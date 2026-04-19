"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ResearchAreasClient from "./ResearchAreasClient";
import PageBanner from "@/components/PageBanner";

export default async function ResearchAreas() {
  const payload = await getPayload({ config });

  const researchAreas = await payload.find({
    collection: "researchareas",
    limit: 1000000000, 
  });

  // console.log(researchAreas.docs)

  return (
    <>
      <PageBanner title="Research Areas" />
      <ResearchAreasClient researchAreas={researchAreas.docs} />
    </>
  );
}
