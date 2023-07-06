"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};
const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const generateRandomValues = () => {
      const randomViews = Math.floor(Math.random() * 1000);
      const randomLikes = Math.floor(Math.random() * 100);

      setViews(randomViews);
      setLikes(randomLikes);
    };

    generateRandomValues();
  }, []);
  return (
    <div className="flexStart flex-col rounded-2xl drop-shadow-card">
      <Link
        href={`/projects/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          width={414}
          height={414}
          className="w-full h-full object-cover rounded-2xl"
          alt="Project image"
        />
        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">{title}</p>
        </div>
      </Link>
      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2">
            <Image
              src={avatarUrl}
              width={34}
              height={34}
              className="rounded-full"
              alt="Profile-Image"
            />
            <p>{name}</p>
          </div>
        </Link>
        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            <Image src="/hearth.svg" width={17} height={17} alt="heart" />
            <p className="text-sm">{likes}</p>
          </div>
          <div className="flexCenter gap-2">
            <Image src="/eye.svg" width={17} height={17} alt="heart" />
            <p className="text-sm">{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
