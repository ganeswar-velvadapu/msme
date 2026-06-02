import PageBanner from "@/components/PageBanner";
import EventsCalendar from "@/components/homeComponents/eventscalendar/EventsCalendar";

export default async function EventsPage() {
  return (
    <>
      <PageBanner title="Events" />
      <div className="container mx-auto px-4 py-12">
        <EventsCalendar isHome={false} />
      </div>
    </>
  );
}
