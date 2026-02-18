import { getPayload } from "payload";
import config from "@payload-config";
import AdjunctFacultyProfile from "./AdjunctFacultyProfile";

export default async function AdjunctFacultyPage({ params }) {
  const payload = await getPayload({ config });
  const { id } = await params;

  try {
    const faculty = await payload.findByID({
      collection: "adjunct-faculty",
      id: id,
    });

    // console.log(faculty)

    return <AdjunctFacultyProfile faculty={faculty} />;
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Faculty Not Found</h1>
          <p className="text-gray-600">The faculty member you`&apos;`re looking for doesn`&apos;`t exist.</p>
        </div>
      </div>
    );
  }
}


