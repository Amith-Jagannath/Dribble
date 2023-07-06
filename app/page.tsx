import { fetchAllProjects } from "@/libs/actions";
import Image from "next/image";

import ProjectCard from "./components/ProjectCard";
import { ProjectInterface } from "@/common.types";
type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endcursor: string;
    };
  };
};
export default async function Home() {
  const data = (await fetchAllProjects()) as ProjectSearch;
  const projectsToDisplay = data?.projectSearch?.edges || [];
  if (projectsToDisplay.length == 0) {
    return (
      <section className="flexStart flex-col paddings">
        Categories
        <p className="no-result-text text-center">
          No projects found, go create first
        </p>
      </section>
    );
  }
  return (
    <section className="flex-start flex-col paddings mb-16">
      <h1>Categories</h1>
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
      <h1>Loadmore</h1>
    </section>
  );
}
