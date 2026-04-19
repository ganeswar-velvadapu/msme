"use server"

import { getPayload } from "payload";
import config from "@payload-config";
import EventsClient from "./EventsClient.js";  

export default async function UpcomingEvents({ limit = 4, isHome = false }) {
  const payload = await getPayload({ config });
  const events = await payload.find({ collection: "events", limit });
  // console.log(events.docs)
  return <EventsClient materialsScienceEvents={events.docs} isHome={isHome} />;
}
