"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";
import MessageClient from "./MessageClient";

export default async function MessageFromHod() {
  const payload = await getPayload({ config });

  const hod_message = await payload.findGlobal({
    slug: "hod-message",
  });

  return (
    <>
      <PageBanner title="Message from HOD" />
      <MessageClient message={[hod_message]} />
    </>
  );
}
