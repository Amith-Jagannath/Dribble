import { fetchAllProjects } from "@/libs/actions";
import Image from "next/image";
import Categories from "./components/Categories";
import ProjectCard from "./components/ProjectCard";
import { ProjectInterface } from "@/common.types";
type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

import React from "react";
import LoadMore from "./components/LoadMore";
type SearchParams = {
  category?: string | null;
  endCursor: string | null;
};
type Props = {
  searchParams: SearchParams;
};
export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;
const Home = async ({ searchParams: { category } }: Props) => {
  const data = (await fetchAllProjects(category || "")) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];
  if (projectsToDisplay.length == 0) {
    return (
      <section className="flexStart flex-col paddings">
        <Categories />
        <p className="no-result-text text-center">
          No projects found, go create first
        </p>
      </section>
    );
  }
  const pagination = data?.projectSearch?.pageInfo;
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Categories />
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node?.id}
            id={node?.id}
            name={node?.createdBy?.name}
            image={node?.image}
            title={node?.title}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}
      </section>
      <LoadMore
        startCursor={pagination.startCursor}
        endCursor={pagination.endCursor}
        hasPreviousPage={pagination.hasPreviousPage}
        hasNextPage={pagination.hasNextPage}
      />
    </section>
  );
};

export default Home;
