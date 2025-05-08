"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import EventsClient from "./EventsClient.js";  

export default async function LatestNews() {
  const payload = await getPayload({ config });
  const events = await payload.find({ collection: "events", limit:1000000000 });
  // console.log(events.docs)
  return <EventsClient materialsScienceEvents={events.docs} />;
}
