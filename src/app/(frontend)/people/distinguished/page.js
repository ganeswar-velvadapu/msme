"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import DistinguishedFacultyClient from "./DistinguishedFacultyClient";

export default async function DistinguishedFaculty() {
  const payload = await getPayload({ config });

  const faculty = await payload.find({
    collection: "distinguished-faculty",
    limit: 1000000000,
  });

  return <DistinguishedFacultyClient facultyList={faculty.docs} />;
}
