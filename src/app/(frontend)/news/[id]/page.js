"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";
import IndividualNewClient from "@/components/homeComponents/News/IndividualNewClient";

export default async function IndividualNews({ params }) {
  const { id } = await params;
  const payload = await getPayload({ config });
  
  let newsItem = null;
  try {
    newsItem = await payload.findByID({
      collection: "news",
      id: id,
    });
  } catch (error) {
    console.error("Error fetching news item:", error);
  }

  return (
    <>
      <PageBanner title="News Details" />
      <IndividualNewClient newsItem={newsItem} />
    </>
  );
}
