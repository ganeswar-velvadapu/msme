"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import FacultyClient from "./FacultyClient";

export default async function Faculty() {
  const payload = await getPayload({ config });

  const faculty = await payload.find({
    collection: "faculty",
    limit: 1000000000,
  });

  return <FacultyClient facultyList={faculty.docs} />;
}
