import { NextResponse } from "next/server";
import { SHA256 as sha256 } from "crypto-js";
import { prisma } from "../../../../../lib/prisma";
import { Prisma } from "@prisma/client";

export const hashPassword = (password: string) => {
  return sha256(password).toString();
};

export async function POST(req: Request) {
  const errors: string[] = [];
  const body = await req.json();
  const { password } = body;

  if (password.length < 6) {
    errors.push("Password length should be more than 6 characters");
    return NextResponse.json({ errors }, { status: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: { ...body, password: hashPassword(password) },
    });

    return NextResponse.json({ user }, { status: 201 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json(
          { message: "Email already exists" },
          { status: 400 }
        );
      }
      return NextResponse.json({ message: e.message }, { status: 400 });
    }
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
