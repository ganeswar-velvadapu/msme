"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhDClient";

export default async function PhD() {
  const payload = await getPayload({ config });

  const phdStudents = await payload.find({
    collection: "phd",
    limit: 1000000000,
  });

  return <PhDClient phdStudents={phdStudents.docs} />;
}
