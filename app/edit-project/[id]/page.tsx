import React from "react";
import Modal from "../../components/Modal";
import ProjectForm from "../../components/ProjectForm";
import { getCurrentUser } from "@/libs/session";
import { redirect } from "next/navigation";
import { getProjectDetails } from "@/libs/actions";
import { ProjectInterface } from "@/common.types";
const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };
  return (
    <Modal>
      <h3 className="modal-head-text">Edit Project</h3>
      <ProjectForm project={result?.project} type="edit" session={session} />
    </Modal>
  );
};

export default EditProject;
