"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhDClient";
import PageBanner from "@/components/PageBanner";

export default async function PhD() {
  const payload = await getPayload({ config });

  const phdStudents = await payload.find({
    collection: "phd",
    limit: 100, 
  });

  return (
    <>
      <PageBanner title="PhD Students" />
      <div className="container mx-auto px-4 py-12">
        <PhDClient phdStudents={phdStudents.docs} />
      </div>
    </>
  );
}
