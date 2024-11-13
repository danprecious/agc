import React from "react";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import UploadContentForm from "./uploadContentForm";

const AdminSection = async () => {
  const session = await auth();

  if (!session) redirect("/signInAdmin");

  return (
    <div className="flex flex-col items-center px-3 lg:px-30 py-10">
      <h1 className="mb-10 font-semibold text-[1.5rem]">Upload Contents</h1>
      <UploadContentForm />
    </div>
  );
};

export default AdminSection;
