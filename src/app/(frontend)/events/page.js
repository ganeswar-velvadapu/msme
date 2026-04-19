"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";
import EventsClient from "@/components/homeComponents/Events/EventsClient";

export default async function EventsPage() {
  const payload = await getPayload({ config });
  const events = await payload.find({ 
    collection: "events", 
    limit: 1000,
    sort: "-event_date" 
  });
  
  return (
    <>
      <PageBanner title="Events" />
      <div className="container mx-auto px-4 py-12">
        <EventsClient materialsScienceEvents={events.docs} />
      </div>
    </>
  );
}
