"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import AdjinctFacultyClient from "./AdjunctFacultyClient";

export default async function AdjunctFaculty() {
  const payload = await getPayload({ config });

  const faculty = await payload.find({
    collection: "adjunct-faculty",
    limit: 1000000000,
  });

  // console.log(faculty)

  return <AdjinctFacultyClient facultyList={faculty.docs} />;
}
