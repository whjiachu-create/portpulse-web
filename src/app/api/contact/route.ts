import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email: string;
  message: string;
  [k: string]: unknown;
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as ContactBody;
  if (!body?.email || !body?.message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }
  // TODO: send via email provider / log
  return NextResponse.json({ ok: true });
}
