"use client";
import Link from 'next/link';

export default function ResearchAreasClient({ researchAreas }) {
  const dataToUse = researchAreas;
 

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

                {/* Description and Image */}
                <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
                  {area.research_area_photo?.[0]?.image?.url && (
                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img
                        src={area.research_area_photo[0].image.url}
                        alt={area.research_area_photo[0].image.alt || area.research_area_name}
                        className="w-full h-auto rounded-lg object-fit"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-gray-700 text-base leading-relaxed text-justify">
                      {area.about_research_area}
                    </p>
                  </div>
                </div>

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