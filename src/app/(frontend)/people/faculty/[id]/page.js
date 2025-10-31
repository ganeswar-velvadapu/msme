import { getPayload } from "payload";
import config from "@payload-config";
import FacultyProfile from "./FacultyProfile";

export default async function FacultyPage({ params }) {
  const payload = await getPayload({ config });
  const { id } = await params;

  try {
    const faculty = await payload.findByID({
      collection: "faculty",
      id: id,
    });

    // console.log(faculty)

    return <FacultyProfile faculty={faculty} />;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Faculty Not Found</h1>
          <p className="text-gray-600">The faculty member you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }
}

