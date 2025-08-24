"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import MtechClient from "./MtechClient";

export default async function Mtech() {
  const payload = await getPayload({ config });

  const mtech = await payload.findGlobal({
    slug: 'mtech-admissions',
  });

  // console.log(mtech)

  return <MtechClient mtech={mtech} />;
}
