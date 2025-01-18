import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import { hashPassword } from "@/layers/6-shared/helpers/hash-password";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== hashPassword(password)) {
      return NextResponse.json(
        { message: "iiiiinvalid email or password" },
        { status: 402 }
      );
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
