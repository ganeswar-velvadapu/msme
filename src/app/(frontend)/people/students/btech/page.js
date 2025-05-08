"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import UgStudentsClient from "./BtechClient.js";

export default async function BTech() {
  const payload = await getPayload({ config });

  const btechStudents = await payload.find({
    collection: "btech",
    limit: 1000000000,
  });


  return <UgStudentsClient students={btechStudents.docs} />;
}
