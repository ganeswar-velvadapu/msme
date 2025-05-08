"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ResearchAreasClient from "./ResearchAreasClient";

export default async function ResearchAreas() {
  const payload = await getPayload({ config });

  const researchAreas = await payload.find({
    collection: "researchareas",
    limit: 1000000000, 
  });

  return <ResearchAreasClient researchAreas={researchAreas.docs} />;
}
