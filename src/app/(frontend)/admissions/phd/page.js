"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhdClient";

export default async function Phd() {
  const payload = await getPayload({ config });

  const phd = await payload.find({
    collection: "phd-admissions",
    limit: 1000000000,
  });

  return <PhDClient phdList={phd.docs} />;
}
