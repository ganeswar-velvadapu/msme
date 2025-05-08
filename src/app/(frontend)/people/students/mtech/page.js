"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PgStudentsClient from "./MtechClient.js";

export default async function BTech() {
  const payload = await getPayload({ config });

  const mtechStudents = await payload.find({
    collection: "mtech",
    limit: 1000000000,
  });


  return <PgStudentsClient students={mtechStudents.docs} />;
}
