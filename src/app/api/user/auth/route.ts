import { NextResponse } from "next/server";
import { SHA256 as sha256 } from "crypto-js";
import { prisma } from "../../../../../lib/prisma";

export const hashPassword = (password: string) => {
  return sha256(password).toString();
};

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user || user.password !== hashPassword(password)) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
