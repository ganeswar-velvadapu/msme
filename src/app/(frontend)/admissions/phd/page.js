"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhdClient";

export default async function Phd() {
  const payload = await getPayload({ config });

  const phd = await payload.findGlobal({
    slug: "phd-admissions",
  });


  // console.log(phd)


  return <PhDClient phdData={phd} />;
}
