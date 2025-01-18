import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "../../../../../lib/prisma";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { authOptions } from "~/auth-settings";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.email) {
    return NextResponse.json(
      { message: "Unauthorized. Please log in to upload videos." },
      { status: 401 }
    );
  }
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const description = formData.get("description") as string | null;
  const published = formData.get("published") === "true";
  const file = formData.get("file") as Blob;
  const gameId = formData.get("gameId") as string;

  if (!title || !file) {
    return NextResponse.json(
      { message: "Title and file are required fields." },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const url = await saveFileToStorage(buffer, file.type);
  console.log("File uploaded to S3:", url);

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  const game = await prisma.game.findUnique({
    where: { id: gameId },
  });

  if (!user) {
    return NextResponse.json(
      { message: "User not found. Cannot upload video." },
      { status: 404 }
    );
  }

  if (!game) {
    return NextResponse.json(
      { message: "Game not found. Cannot upload video." },
      { status: 404 }
    );
  }

  try {
    const video = await prisma.video.create({
      data: {
        title,
        url,
        description,
        published,
        game: { connect: { id: game.id } },
        author: { connect: { id: user.id } },
      },
    });

    console.log("Video uploaded:", video);
    return NextResponse.json(video, { status: 201 });
  } catch (error) {
    console.error("Database error while uploading video:", error);
    return NextResponse.json(
      { message: "An error occurred while saving the video." },
      { status: 500 }
    );
  }
}

async function saveFileToStorage(buffer: Buffer, fileType: string) {
  const bucketName = process.env.S3_BUCKET_NAME!;
  const key = `videos/${randomUUID()}`;

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: buffer,
    ContentType: fileType,
  };

  try {
    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const fileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return fileUrl;
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw new Error("Error uploading file");
  }
}
