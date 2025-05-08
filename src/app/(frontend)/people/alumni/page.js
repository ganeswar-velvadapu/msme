"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import AlumniClient from "./AlumniClient";

export default async function Alumni() {
  const payload = await getPayload({ config });

  const alumni = await payload.find({
    collection: "alumni",
    limit: 1000000000,
  });

  return <AlumniClient alumniList={alumni.docs} />;
}
