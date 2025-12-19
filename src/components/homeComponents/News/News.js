"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import LatestNewsClient from "./LatestNewsClient.js";  

export default async function LatestNews() {
  const payload = await getPayload({ config });
  const news = await payload.find({ collection: "news", limit:4 });
  return <LatestNewsClient newsItems={news.docs} />;
}
