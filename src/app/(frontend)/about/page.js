"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import AboutClient from "./AboutClient";
import PageBanner from "@/components/PageBanner";
import { Suspense } from "react";

export default async function About() {
  const payload = await getPayload({ config });

  // Parallel data fetching
  const [about, hodMessage, booksResult, nptelResult] = await Promise.all([
    payload.findGlobal({ slug: "about" }),
    payload.findGlobal({ slug: "hod-message" }),
    payload.find({ collection: "books", limit: 1000 }),
    payload.find({ collection: "nptel-lectures", limit: 1000 }),
  ]);

  return (
    <>
      <PageBanner title="About" />
      <Suspense fallback={
        <div className="max-w-7xl mx-auto px-4 py-20 text-center text-gray-500 font-medium animate-pulse">
          Loading page content...
        </div>
      }>
        <AboutClient
          aboutList={[about]}
          hodMessage={hodMessage}
          books={booksResult.docs || []}
          nptelLectures={nptelResult.docs || []}
        />
      </Suspense>
    </>
  );
}
