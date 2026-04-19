"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import MtechClient from "./MtechClient";
import PageBanner from "@/components/PageBanner";

export default async function Mtech() {
  const payload = await getPayload({ config });

  const mtech = await payload.find({
    collection: "mtech-p",
    limit: 1000000000,
  });

  return (
    <>
      <PageBanner title="M.Tech Programme" />
      <MtechClient mtechList={mtech.docs} />
    </>
  );
}
