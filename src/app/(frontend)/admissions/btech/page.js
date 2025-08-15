"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import BtechClient from "./BtechClient";

export default async function Btech() {
  const payload = await getPayload({ config });

  const btech = await payload.find({
    collection: "btech-admissions",
    limit: 1000000000,
  });

  return <BtechClient btechList={btech.docs} />;
}
