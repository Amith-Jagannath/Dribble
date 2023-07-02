"use client";
import { SessionInterface } from "@/common.types";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import FormField from "./FormField";
type Props = {
  type: string;
  session: SessionInterface;
};

const ProjectForm = ({ type, session }: Props) => {
  const handleFromSubmit = (e: React.FormEvent) => {};
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {};
  const handleStateChange = (fieldName: string, value: string) => {};
  const form = {
    image: "",
    title: "",
  };

  return (
    <form onSubmit={handleFromSubmit} className="flextStart form">
      <div className="flexStart form_image-container">
        <label htmlFor="poster" className="flexCenter from_image-label">
          {!form.image && "Choose a poster for your project"}
        </label>

        <input
          id="image"
          type="file"
          className="form_image-input"
          accept="image/*"
          required={type === "create"}
          onChange={handleChangeImage}
        />
        {form.image && (
          <Image
            src={form?.image}
            className="sm:p-10 object-contain z-20"
            alt="image"
            fill
          />
        )}
      </div>
      <FormField
        title="title"
        state={form.title}
        placeholder="Flexible"
        setState={(value) => handleStateChange("title", value)}
      />
    </form>
  );
};

export default ProjectForm;
