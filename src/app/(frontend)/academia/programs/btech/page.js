"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import BtechClient from "./BtechClient";
import PageBanner from "@/components/PageBanner";

export default async function Btech() {
  const payload = await getPayload({ config });

  const btech = await payload.find({
    collection: "btech-p",
    limit: 1000000000,
  });

  return (
    <>
      <PageBanner title="B.Tech. Programme" />
      <BtechClient btechList={btech.docs} />
    </>
  );
}
