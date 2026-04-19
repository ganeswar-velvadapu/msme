"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import MtechClient from "./MtechClient";
import PageBanner from "@/components/PageBanner";

export default async function Mtech() {
  const payload = await getPayload({ config });

  const mtech = await payload.findGlobal({
    slug: 'mtech-admissions',
  });

  // console.log(mtech)

  return (
    <>
      <PageBanner title="M.Tech Admissions" />
      <MtechClient mtech={mtech} />
    </>
  );
}
