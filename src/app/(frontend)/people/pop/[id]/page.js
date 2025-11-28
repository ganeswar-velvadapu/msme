import { getPayload } from "payload";
import config from "@payload-config";
import POPFacultyProfile from "./POPFacultyProfile"

export default async function POPFacultyPage({ params }) {
  const payload = await getPayload({ config });
  const { id } = await params;

  try {
    const faculty = await payload.findByID({
      collection: "professors-in-practice",
      id: id,
    });

    // console.log(faculty)

    return <POPFacultyProfile faculty={faculty} />;
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

