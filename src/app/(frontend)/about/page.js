// "use server";

// import { getPayload } from "payload";
// import { GlobalConfig } from "payload";
// import AboutClient from "./AboutClient";

// export default async function About() {
//   const payload = await getPayload({ GlobalConfig });

//   const about = await payload.findGlobal({
//     globals: "about",
//     limit: 1000000000,
//   });

//   return <AboutClient aboutList={about.docs} />;
// }

// "use server";

// import { getPayload } from "payload";
// import AboutClient from "./AboutClient";

// export default async function About() {
//   const payload = await getPayload();

//   const about = await payload.findGlobal({
//     slug: "about",
//   });

//   return <AboutClient aboutList={[about]} />;
// }
// "use server";

// import { getPayload } from "payload";
// import AboutClient from "./AboutClient";

// export default async function About() {
//   const payload = await getPayload();

//   const about = await payload.findGlobal({
//     slug: "about",
//   });

//   return <AboutClient aboutList={[about]} />;
// }
"use server";

import { getPayload } from "payload";
import config from "@payload-config";; // adjust path if needed
import AboutClient from "./AboutClient";

export default async function About() {
  const payload = await getPayload({ config });

  const about = await payload.findGlobal({
    slug: "about",
  });

  return <AboutClient aboutList={[about]} />;
}
