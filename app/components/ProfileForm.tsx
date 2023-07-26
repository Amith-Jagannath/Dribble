"use client";

import Image from "next/image";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import FormField from "./FormField";
import Button from "./Button";
import CustomMenu from "./CustomMenu";
import { categoryFilters } from "../../constants";
import {
  createNewProject,
  fetchToken,
  updateProfile,
  updateProject,
} from "../../libs/actions";
import { FormState2, ProjectInterface, SessionInterface } from "@/common.types";

type Props = {
  type: string;
  session: SessionInterface;
};

const ProfileForm = ({ type, session }: Props) => {
  const router = useRouter();

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<FormState2>({
    description: "",
    avatarUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  });

  const handleStateChange = (fieldName: keyof FormState2, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [fieldName]: value }));
  };

  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.includes("image")) {
      alert("Please upload an image!");

      return;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result as string;

      handleStateChange("avatarUrl", result);
    };
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setSubmitting(true);

    const { token } = await fetchToken();

    try {
      //   if (type === "create") {
      //     // await createNewProject(form, session?.user?.id, token);
      //     console.log("yes");
      //     router.push("/");
      //   }
      //   if (type === "edit") {
      //     // await updateProject(form, project?.id as string, token);
      //     router.push("/");
      //   }

      await updateProfile(form, session?.user?.id as string, token);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flexStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter form_image-label">
          {!form.avatarUrl && "Upload your own Avatar"}
        </label>
        <input
          id="image"
          type="file"
          accept="image/*"
          className="form_image-input"
          onChange={(e) => handleChangeImage(e)}
        />
        {form.avatarUrl && (
          <Image
            src={form?.avatarUrl}
            className="sm:p-10 object-contain z-20"
            alt="image"
            fill
          />
        )}
      </div>

      <FormField
        title="Description"
        state={form.description}
        placeholder="Showcase and discover remarkable developer projects."
        isTextArea
        setState={(value) => handleStateChange("description", value)}
      />

      <FormField
        type="url"
        title="LinkedIn URL"
        state={form.linkedinUrl}
        placeholder="https://linkedIn.com"
        setState={(value) => handleStateChange("linkedinUrl", value)}
      />

      <FormField
        type="url"
        title="GitHub URL"
        state={form.githubUrl}
        placeholder="https://github.com"
        setState={(value) => handleStateChange("githubUrl", value)}
      />

      <div className="flexStart w-full">
        <Button
          title={
            submitting
              ? `${type === "create" ? "Creating" : "Editing"}`
              : `${type === "create" ? "Create" : "Edit"}`
          }
          type="submit"
          isSubmitting={submitting}
        />
      </div>
    </form>
  );
};

export default ProfileForm;
