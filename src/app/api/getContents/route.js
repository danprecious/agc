import { getContents } from "@/app/actions/getContents";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contents = await getContents();
    console.log(contents);

    return NextResponse.json(contents, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error getting contents" },
      { status: 500 }
    );
  }
}
