import { getPayload } from "payload";
import config from "@payload-config";
import DistinguishedFacultyProfile from "./DistinguishedFacultyProfile";

export default async function DistinguishedFacultyPage({ params }) {
  const payload = await getPayload({ config });
  const { id } = await params;

  try {
    const faculty = await payload.findByID({
      collection: "distinguished-faculty",
      id: id,
    });

    return <DistinguishedFacultyProfile faculty={faculty} />;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Faculty Not Found</h1>
          <p className="text-gray-600">The distinguished faculty member you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }
}
