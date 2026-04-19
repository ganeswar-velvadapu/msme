"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import PhDClient from "./PhdClient";
import PageBanner from "@/components/PageBanner";

export default async function Phd() {
  const payload = await getPayload({ config });

  const phd = await payload.findGlobal({
    slug: "phd-admissions",
  });


  // console.log(phd)


  return (
    <>
      <PageBanner title="Ph.D. Admissions" />
      <PhDClient phdData={phd} />
    </>
  );
}
