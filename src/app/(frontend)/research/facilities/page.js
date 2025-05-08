"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import ResearchFacilitiesClient from "./ResearchFacilitiesClient.js";

export default async function ResearchFacilities() {
  const payload = await getPayload({ config });

  const facilities = await payload.find({
    collection: "researchfacilities",
    limit: 1000000000,
  });

  const carousel = await payload.find({
    collection: "researchfacilitiescarousel",
    limit: 1000000000,
  });

  return (
    <ResearchFacilitiesClient
      facilities={facilities.docs}
      carousel={carousel.docs}
    />
  );
}
