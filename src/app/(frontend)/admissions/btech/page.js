"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import BtechClient from "./BtechClient";
import PageBanner from "@/components/PageBanner";

export default async function Btech() {
  const payload = await getPayload({ config });

  const btech = await payload.findGlobal({
    slug: "btech-admissions"
  });

  // console.log(btech)

  return (
    <>
      <PageBanner title="B.Tech. Admissions" />
      <BtechClient btech={btech} />
    </>
  );
}
