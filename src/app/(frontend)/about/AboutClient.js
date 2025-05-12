// "use client";
// import { useState } from "react";

// export default function AboutClient({ aboutList }) {
//   const [activeTab, setActiveTab] = useState("about");

//   const aboutContent = aboutList[0] || {};

//   const {
//     about_msme,
//     about_the_department,
//     vision,
//     timeline_at_iith = [],
//     Explore = [],
//   } = aboutContent;

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-center mb-8 text-black">About MSME</h1>

//       {/* Navigation Tabs */}
//       <div className="flex flex-wrap justify-center mb-8 gap-2">
//         {["about", "department", "vision", "history", "explore"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-4 py-2 rounded-md font-medium transition-all ${
//               activeTab === tab
//                 ? "bg-black text-white"
//                 : "bg-gray-200 hover:bg-gray-300 text-gray-700"
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* About MSME */}
//       {activeTab === "about" && about_msme && (
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-black">What is Materials Science and Metallurgical Engineering?</h2>
//           <p className="text-gray-700 whitespace-pre-line">{about_msme}</p>
//         </div>
//       )}

//       {/* About the Department */}
//       {activeTab === "department" && about_the_department && (
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-black">About the Department</h2>
//           <p className="text-gray-700 whitespace-pre-line">{about_the_department}</p>
//         </div>
//       )}

//       {/* Vision */}
//       {activeTab === "vision" && vision && (
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-black text-center">Department Vision</h2>
//           <p className="text-gray-700 whitespace-pre-line text-center max-w-3xl mx-auto">{vision}</p>
//         </div>
//       )}

//       {/* Timeline */}
//       {activeTab === "history" && (
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-black text-center">Department History and Timeline</h2>
//           <div className="relative">
//             {timeline_at_iith.map((item, index) => (
//               <div key={index} className="flex mb-8 relative">
//                 <div className="w-24 md:w-32 flex-shrink-0 text-right pr-4">
//                   <div className="font-bold text-black">{item.year}</div>
//                 </div>
//                 <div className="relative">
//                   <div className="w-4 h-4 rounded-full bg-black absolute top-1 -left-2"></div>
//                   {index < timeline_at_iith.length - 1 && (
//                     <div className="w-0.5 h-full bg-gray-300 absolute left-0 top-5"></div>
//                   )}
//                 </div>
//                 <div className="flex-grow pl-6">
//                   <div className="bg-gray-50 p-4 rounded-lg shadow">
//                     <p className="text-gray-700">{item.timeline}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Explore */}
//       {activeTab === "explore" && (
//         <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
//           <h2 className="text-2xl font-bold mb-4 text-black text-center">Explore MSME</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Explore.map((item, index) => (
//               <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-lg font-semibold text-black mb-2">{item.program_name}</h3>
//                 <p className="text-gray-600 mb-4">{item.program_brief_description}</p>
//                 <a
//                   href={item.link_to_program}
//                   className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function AboutClient({ aboutList }) {
  const [activeTab, setActiveTab] = useState("about");

  const aboutContent = aboutList[0] || {};

  const {
    about_msme,
    about_the_department = {},
    vision,
    timeline_at_iith = [],
    Explore = [],
  } = aboutContent;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">About MSME</h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["about", "department", "vision", "history", "explore"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md font-medium transition-all ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* About MSME */}
      {activeTab === "about" && about_msme && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">
            What is Materials Science and Metallurgical Engineering?
          </h2>
          <p className="text-gray-700 whitespace-pre-line">{about_msme}</p>
        </div>
      )}

      {/* About the Department */}
      {activeTab === "department" && about_the_department?.sections?.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-black text-center">About the Department</h2>

          {/* Department Description */}
          {about_the_department.description && (
            <p className="text-gray-700 whitespace-pre-line mb-6">
              {about_the_department.description}
            </p>
          )}

          {/* Section List */}
          <div className="space-y-6">
            {about_the_department.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {section.Thrust}
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {section.Thrust_Area}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Vision */}
      {activeTab === "vision" && vision && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">Department Vision</h2>
          <p className="text-gray-700 whitespace-pre-line max-w-3xl">{vision}</p>
        </div>
      )}

      {/* Timeline */}
      {activeTab === "history" && timeline_at_iith.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Department History and Timeline</h2>
          <div className="relative">
            {timeline_at_iith.map((item, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="w-24 md:w-32 flex-shrink-0 text-right pr-4">
                  <div className="font-bold text-black">{item.year}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-black absolute top-1 -left-2"></div>
                  {index < timeline_at_iith.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 absolute left-0 top-5"></div>
                  )}
                </div>
                <div className="flex-grow pl-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4 text-black">{item.timeline_heading}</h2>
                    <p className="text-gray-700">{item.timeline_content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explore */}
      {activeTab === "explore" && Explore.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Explore MSME</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Explore.map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">{item.program_name}</h3>
                <p className="text-gray-600 mb-4">{item.program_brief_description}</p>
                <a
                  href={item.link_to_program}
                  className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

