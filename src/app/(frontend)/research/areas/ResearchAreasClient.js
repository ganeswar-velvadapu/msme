"use client";
import Link from 'next/link';

export default function ResearchAreasClient({ researchAreas }) {
  const dataToUse = researchAreas;

  const getResearchIcon = (icons) => {
    return (
      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {icons.map((icon, index) => (
            <div
              key={icon.id || index}
              className="flex flex-col items-center text-center gap-2"
            >
              <img
                src={icon.image.url}
                alt={icon.image.alt || `Research icon ${index + 1}`}
                className="w-30 h-30 object-fit"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Research Areas Cards */}
        <div className="space-y-6">
          {dataToUse.map((area, areaIndex) => (
            <div
              key={area.id || areaIndex}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
                  {area.research_area_name}
                </h2>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-base leading-relaxed text-justify">
                    {area.about_research_area}
                  </p>
                </div>

                {/* Research Icons */}
                {/* {getResearchIcon(area.research_area_photo)} */}

                {/* Faculty Members */}
                <h3 className="mb-4 font-bold text-xl">Faculty Members</h3>
                <div className="flex flex-wrap gap-3">
                  {area.research_areas_associated_faculty?.map((faculty) => (
                    <Link
                      href={`/people/faculty/${faculty.id}`}
                      key={faculty.id}
                      className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {faculty.faculty_name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}