"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ProjectsClient from "./ProjectsClient.js";
import PageBanner from "@/components/PageBanner";

export default async function Projects() {
  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects",
    limit: 1000000000,
  });

  return (
    <>
      <PageBanner title="Projects" />
      <ProjectsClient projects={projects.docs} />
    </>
  );
}
