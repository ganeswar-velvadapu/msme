"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ResearchFacilitiesClient from "./ResearchFacilitiesClient.js";
import PageBanner from "@/components/PageBanner";

export default async function ResearchFacilities() {
  const payload = await getPayload({ config });

  const facilities = await payload.find({
    collection: "researchfacilities",
    limit: 1000000000,
  });

  return (
    <>
      <PageBanner title="Research Facilities" />
      <ResearchFacilitiesClient
        facilities={facilities.docs}
      />
    </>
  );
}
