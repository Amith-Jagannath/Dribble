import React from "react";
import Modal from "../components/Modal";
import ProfileForm from "../components/ProfileForm";
import { getCurrentUser } from "@/libs/session";
import { redirect } from "next/navigation";
const CreateProject = async () => {
  const session = await getCurrentUser();
  if (!session?.user) redirect("/");
  return (
    <Modal>
      <h3 className="modal-head-text">Tell us more about yourself</h3>
      <ProfileForm type="create" session={session} />
    </Modal>
  );
};

export default CreateProject;
