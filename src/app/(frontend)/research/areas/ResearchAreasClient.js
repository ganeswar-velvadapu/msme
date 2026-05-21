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
                {/* Title Box */}
                <div className="border border-gray-200 bg-gray-50/70 rounded-lg px-5 py-4 mb-6 shadow-sm">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                    {area.research_area_name}
                  </h2>
                </div>

                {/* Description and Image */}
                <div className="flow-root mb-6">
                  {area.research_area_photo?.[0]?.image?.url && (
                    <div className="w-full sm:w-48 md:w-56 lg:w-64 float-none sm:float-left mr-0 sm:mr-6 mb-4 overflow-hidden rounded-lg ">
                      <img
                        src={area.research_area_photo[0].image.url}
                        alt={area.research_area_photo[0].image.alt || area.research_area_name}
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <p className="text-gray-700 text-base leading-relaxed text-justify">
                    {area.about_research_area}
                  </p>
                </div>

                {/* Faculty Members Section */}
                {area.research_areas_associated_faculty && area.research_areas_associated_faculty.length > 0 && (
                  <>
                    <hr className="border-gray-200 my-6" />
                    <h3 className="mb-4 font-bold text-xl text-gray-800">Faculty Members</h3>
                    <div className="flex flex-wrap gap-3">
                      {area.research_areas_associated_faculty.map((faculty) => (
                        <Link
                          href={`/people/faculty/${faculty.id}`}
                          key={faculty.id}
                          className="cursor-pointer px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {faculty.faculty_name}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}