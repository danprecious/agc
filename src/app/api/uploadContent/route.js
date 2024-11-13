import { createContent } from "@/app/actions/createContent";
import { gridFsStoreFile } from "@/app/actions/gridFsStore";
// import prisma from "@/app/lib/globalPrisma";
import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
import { cloudinaryUpload } from "@/app/actions/cloudinaryConfig";

const prisma = new PrismaClient();

export async function POST(request) {
  const data = await request.formData();

  const file = data.get("file");
  const type = data.get("type");
  const state = data.get("state");

  console.log(type, state);

  const fileContent = {
    file,
    type,
    state,
  };

  const filename = file.name;

  try {
    const existingFile = await prisma.filecontent.findFirst({
      where: {
        title: filename,
      },
    });

    if (!existingFile) {
      const id = await cloudinaryUpload(file);
      console.log(id);

      const newFileContent = await createContent({ filename, type, state, id });

      console.log(newFileContent);

      return NextResponse.json(newFileContent, { status: 200 });
    } else {
      return NextResponse.json("content already exists", { status: 403 });
    }
  } catch (error) {
    console.error(error);

    return NextResponse.json(error, { status: 500 });
  }
}
