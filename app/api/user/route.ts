import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextRequest } from "next/server";

interface RequestBody {
  email: string;
  password: string;
}
export async function POST(request: Request | NextRequest) {
  const body: RequestBody = await request?.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
