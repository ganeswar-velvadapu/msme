"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";
import LatestNewsClient from "@/components/homeComponents/News/LatestNewsClient";
  
export default async function NewsPage() {
  const payload = await getPayload({ config });
  const news = await payload.find({ 
    collection: "news", 
    limit: 1000,
    sort: "-news_date" 
  });
  
  return (
    <>
      <PageBanner title="News" />
      <div className="container mx-auto px-4 py-12">
        <LatestNewsClient newsItems={news.docs} />
      </div>
    </>
  );
}
