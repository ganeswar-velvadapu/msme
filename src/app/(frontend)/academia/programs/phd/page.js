"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhdClient";
import PageBanner from "@/components/PageBanner";

export default async function Phd() {
  const payload = await getPayload({ config });

  const phd = await payload.find({
    collection: "phd-p",
    limit: 1000000000,
  });

  return (
    <>
      <PageBanner title="Ph.D. Programme" />
      <PhDClient phdList={phd.docs} />
    </>
  );
}
