import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const count = await prisma.user.count({
    where: {
      email: body.email,
    }
  });

  if (count !== 0) {
    return NextResponse.json({
      message: 'THIS ACCOUNT ALREADY EXISTS'
    }, {
      status: 409,
    });
  }

  const user = await prisma.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });

  const { password, ...result } = user;
  return NextResponse.json(result);
}
