"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import AboutClient from "./AboutClient";
import PageBanner from "@/components/PageBanner";

export default async function About() {
  const payload = await getPayload({ config });

  const about = await payload.findGlobal({
    slug: "about",
  });

  return (
    <>
      <PageBanner title="About" />
      <AboutClient aboutList={[about]} />
    </>
  );
}
