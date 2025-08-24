"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import BtechClient from "./BtechClient";

export default async function Btech() {
  const payload = await getPayload({ config });

  const btech = await payload.findGlobal({
    slug: "btech-admissions"
  });

  // console.log(btech)

  return <BtechClient btech={btech} />;
}
