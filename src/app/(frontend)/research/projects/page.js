"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ProjectsClient from "./ProjectsClient.js";

export default async function Projects() {
  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects",
    limit: 1000000000,
  });

  return <ProjectsClient projects={projects.docs} />;
}
