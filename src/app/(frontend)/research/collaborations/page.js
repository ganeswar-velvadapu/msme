"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import CollaborationsClient from "./CollaborationsClient.js";

export default async function Collaborations() {
  const payload = await getPayload({ config });

  const collaborations = await payload.find({
    collection: "collaborations",
    limit: 1000000000,
  });

  // console.log(collaborations.docs)

  return <CollaborationsClient collaborations={collaborations.docs} />;
}
