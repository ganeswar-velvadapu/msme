"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import LatestNewsClient from "./LatestNewsClient.js";  

export default async function LatestNews({ limit = 4, isHome = false }) {
  const payload = await getPayload({ config });
  const news = await payload.find({ collection: "news", limit });
  return <LatestNewsClient newsItems={news.docs} isHome={isHome} />;
}
