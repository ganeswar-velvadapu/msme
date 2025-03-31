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
        <div className="grid md:grid-cols-2 gap-8">
          <LatestNews />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}
