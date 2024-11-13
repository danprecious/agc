import prisma from "../lib/globalPrisma";

export async function createContent({ type, state, id, filename }) {
  try {
    const content = await prisma.filecontent.upsert({
      where: { title: filename },
      update: {
        title: filename,
        fileId: id,
        type: type,
        state: state,
      },
      create: {
        title: filename,
        fileId: id,
        type: type,
        state: state,
      },
    });

    return content;
  } catch (error) {
    throw new Error(error);
  }
}
