"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import MtechClient from "./MtechClient";

export default async function Mtech() {
  const payload = await getPayload({ config });

  const mtech = await payload.find({
    collection: "mtech-p",
    limit: 1000000000,
  });

  return <MtechClient mtechList={mtech.docs} />;
}
