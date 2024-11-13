import prisma from "../lib/globalPrisma";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dvjlckdam",
  api_key: "676657359276124",
  api_secret: "x9sk7MfBw9Ztk77-ewyf_klvUzc",
});

export const getContents = async () => {
  try {
    const contents = await prisma.filecontent.findMany();

    const contentsWithUrls = contents.map((content) => {
      return {
        ...content,
        fileUrl: cloudinary.url(content.fileId, {
          fetch_format: "auto",
          quality: "auto",
        }), 
      };
    });

    return contentsWithUrls;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting file contents");
  }
};
