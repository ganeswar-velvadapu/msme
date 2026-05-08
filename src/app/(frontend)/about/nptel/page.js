"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";
import NPTELClient from "./NPTELClient";

export default async function NPTELPage() {
  const payload = await getPayload({ config });
  const nptel = await payload.find({ 
    collection: "nptel-lectures", 
    limit: 1000, 
  });
  
  return (
    <>
      <PageBanner title="NPTEL Lectures" />
      <div className="container mx-auto px-4 py-12">
            <NPTELClient lectures={nptel.docs} />
      </div>
    </>
  );
}
