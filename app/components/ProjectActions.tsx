"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteProjects, fetchToken } from "@/libs/actions";
const ProjectActions = ({ projectId }: { projectId: string }) => {
  const router = useRouter();
  const [isdeleting, setdeleting] = useState(false);
  const handleDeleteProject = async () => {
    setdeleting(true);
    const { token } = await fetchToken();

    try {
      await deleteProjects(projectId, token);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setdeleting(false);
    }
  };
  return (
    <>
      <Link
        href={`/edit-project/${projectId}`}
        className="flexCenter edit-action_btn"
      >
        <Image src="/pencile.svg" alt="edit" width={15} height={15} />
      </Link>
      <button
        type="button"
        className={`flexCenter delete-action_btn
         ${isdeleting ? "bg-gray" : "bg-primary-purple"}
     `}
        onClick={handleDeleteProject}
      >
        <Image src="/trash.svg" alt="edit" width={15} height={15} />
      </button>
    </>
  );
};

export default ProjectActions;
