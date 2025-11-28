"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import POPFacultyClient from "./POPFacultyClient";

export default async function POPFaculty() {
  const payload = await getPayload({ config });

  const faculty = await payload.find({
    collection: "professors-in-practice",
    limit: 1000000000,
  });
  // console.log(faculty)

  return <POPFacultyClient facultyList={faculty.docs} />;
}
