import { NextResponse } from "next/server";

export const GET = () => {
  return new NextResponse("Hello", { status: 200 });
};
export const POST = (req: any, res: any) => {
  console.log(req);
  return new NextResponse(JSON.stringify({ msg: "Hello" }), { status: 200 });
};
