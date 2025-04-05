"use client";

import Calendar from "../calendar/Calendar";
import UpcomingEvents from "../Events/Events";
import MSME from "../msme/Msme";
import LatestNews from "../News/News";

export default function AfterCarousel() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <MSME />
      </div>
      <div className="flex flex-col gap-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <LatestNews />
          </div>
          <div className="md:col-span-1">
            <UpcomingEvents />
          </div>
        </div>
      </div>
    </div>
  );
}
