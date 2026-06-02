"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import EventsCalendarClient from "./EventsCalendarClient";

export default async function EventsCalendar({ isHome = false }) {
  const payload = await getPayload({ config });
  const events = await payload.find({
    collection: "events",
    limit: 1000,
    sort: "-events_date",
  });

  return (
    <EventsCalendarClient
      materialsScienceEvents={events.docs}
      isHome={isHome}
    />
  );
}
