import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = "RJiXkWru1o1xChgJgVEQRJJ1yysi6hvxd2Pqx3bwzk0=";
export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret, raw: true });

  return NextResponse.json({ token }, { status: 200 });
}
