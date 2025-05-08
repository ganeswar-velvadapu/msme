"use server";

import { getPayload } from "payload";
import config from "@payload-config";
import StaffClient from "./StaffClient";

export default async function Staff() {
  const payload = await getPayload({ config });

  const staff = await payload.find({
    collection: "staff",
    limit: 1000000000,
  });

  console.log(staff.docs)

  return <StaffClient staffList={staff.docs} />;
}
