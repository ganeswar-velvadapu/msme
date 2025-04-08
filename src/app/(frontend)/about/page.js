"use client"
import { useState } from "react";
// import img from "next/img";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  // Timeline data
  const timelineData = [
    {
      year: 1959,
      title: "Department Established",
      description: "The Department of Metallurgical Engineering was established as one of the founding departments of the institute."
    },
    {
      year: 1975,
      title: "Research Expansion",
      description: "Expansion of research facilities with the addition of advanced characterization labs and introduction of specialized courses."
    },
    {
      year: 1992,
      title: "Curriculum Modernization",
      description: "Major curriculum overhaul to incorporate emerging areas in materials science alongside traditional metallurgy."
    },
    {
      year: 2003,
      title: "Renamed to MSME",
      description: "Department renamed to 'Materials Science and Metallurgical Engineering' reflecting the broader scope of teaching and research."
    },
    {
      year: 2010,
      title: "Center of Excellence",
      description: "Established Center of Excellence in Advanced Materials with industry collaboration."
    },
    {
      year: 2018,
      title: "International Partnerships",
      description: "Formal research and student exchange partnerships with leading international universities in materials research."
    },
    {
      year: 2023,
      title: "New Research Facility",
      description: "Inauguration of the state-of-the-art Materials Innovation Center with focus on sustainable materials development."
    }
  ];

  // Vision journey data
  const visionJourneyData = [
    {
      phase: "Fundamental Research",
      title: "Atomic & Molecular Level",
      description: "Understanding material behavior at the atomic scale through advanced computational and experimental methods."
    },
    {
      phase: "Material Design",
      title: "Nano to Micro Structure",
      description: "Engineering materials with tailored microstructure to achieve specific mechanical, thermal, and electrical properties."
    },
    {
      phase: "Processing Techniques",
      title: "Novel Fabrication Methods",
      description: "Developing innovative processing techniques to translate theoretical designs into practical materials."
    },
    {
      phase: "Characterization",
      title: "Advanced Testing & Analysis",
      description: "Utilizing cutting-edge characterization tools to understand structure-property relationships."
    },
    {
      phase: "Application Development",
      title: "Engineering Solutions",
      description: "Creating application-specific materials for sectors including aerospace, energy, healthcare, and electronics."
    },
    {
      phase: "Sustainability",
      title: "Green Materials & Processes",
      description: "Pioneering sustainable materials and recycling technologies to address global environmental challenges."
    }
  ];

  // Explore MSME data
  const exploreLinks = [
    {
      title: "Undergraduate Programs",
      description: "B.Tech in Materials Science and Metallurgical Engineering",
      link: "/academics/undergraduate"
    },
    {
      title: "Graduate Programs",
      description: "M.Tech and PhD opportunities in specialized areas",
      link: "/academics/graduate"
    },
    {
      title: "Research Areas",
      description: "Explore our diverse research portfolio and latest breakthroughs",
      link: "/research"
    },
    {
      title: "Facilities",
      description: "State-of-the-art laboratories and equipment for materials research",
      link: "/facilities"
    },
    {
      title: "Faculty",
      description: "Meet our distinguished faculty members and their expertise",
      link: "/people/faculty"
    },
    {
      title: "Industry Collaboration",
      description: "Partnership opportunities and ongoing industrial projects",
      link: "/industry"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">About MSME</h1>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {["about", "department", "message", "vision", "history", "explore"].map((tab) => (
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

      {/* What is MSME */}
      {activeTab === "about" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">What is Materials Science and Metallurgical Engineering?</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                Materials Science and Metallurgical Engineering (MSME) is a multidisciplinary field that combines physics, chemistry, and engineering principles to study and develop materials for various applications. It encompasses the study of metals, ceramics, polymers, composites, and advanced materials at different length scales from atoms to bulk products.
              </p>
              <p className="text-gray-700 mb-4">
                This field explores the relationships between the structure, properties, processing, and performance of materials, enabling the design and creation of new materials with tailored properties for specific applications.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                MSME plays a crucial role in advancing technology across various sectors including aerospace, automotive, electronics, energy, healthcare, and infrastructure development. The continuous innovation in materials has been fundamental to human technological progress throughout history.
              </p>
              <p className="text-gray-700">
                At its core, MSME bridges fundamental scientific understanding with practical engineering applications, creating materials that push the boundaries of what's possible in modern technology.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* About the department */}
      {activeTab === "department" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black">About the Department</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                The Department of Materials Science and Metallurgical Engineering was established in 1959 as one of the founding departments of the institute. Over the decades, it has evolved from a traditional metallurgy program to a comprehensive materials engineering department addressing both fundamental and applied aspects of materials science.
              </p>
              <p className="text-gray-700 mb-4">
                Our department houses state-of-the-art research facilities for materials synthesis, processing, characterization, and testing. These facilities support cutting-edge research in areas such as advanced structural materials, functional materials, nanomaterials, computational materials science, and sustainable materials development.
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-700 mb-4">
                With a distinguished faculty of 25 professors and over 200 students across undergraduate, postgraduate, and doctoral programs, the department fosters a vibrant academic environment. Our research output includes numerous high-impact publications, patents, and technology transfers.
              </p>
              <p className="text-gray-700">
                The department maintains strong collaborations with leading academic institutions, research laboratories, and industries worldwide. These partnerships enable our faculty and students to work on interdisciplinary projects addressing real-world challenges through materials-based solutions.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Message from HoD */}
      {activeTab === "message" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Message from the Head of Department</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-72 overflow-hidden rounded-lg shadow-md">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                  <img 
                    src="/api/placeholder/240/280" 
                    alt="HoD Portrait" 
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic mb-4">
                  "I am delighted to welcome you to the Department of Materials Science and Metallurgical Engineering. Our department stands at the forefront of scientific and technological advancement in materials research, with a rich heritage dating back to the institute's inception.
                </p>
                <p className="text-gray-700 italic mb-4">
                  In today's rapidly evolving technological landscape, materials play a pivotal role in addressing global challenges related to energy, environment, healthcare, and infrastructure. Our dedicated faculty, researchers, and students work collaboratively to develop innovative materials solutions that contribute to human progress and sustainability.
                </p>
                <p className="text-gray-700 italic mb-4">
                  We take pride in our comprehensive curriculum that balances theoretical knowledge with practical skills, preparing our students to excel in academia, industry, and entrepreneurship. Our research initiatives span from fundamental investigations at the atomic scale to applied technologies ready for industrial implementation.
                </p>
                <p className="text-gray-700 italic">
                  I invite you to explore our department and discover the exciting opportunities in materials science and engineering. Whether you are a prospective student, researcher, industry partner, or simply curious about our field, we welcome your interest and look forward to potential collaborations."
                </p>
                <div className="mt-4 text-right">
                  <p className="font-semibold text-black">Prof. Rajesh Kumar</p>
                  <p className="text-gray-600">Head, Department of MSME</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Department Vision */}
      {activeTab === "vision" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Department Vision: Atoms to Applications</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Our vision encompasses the entire spectrum of materials science—from atomic understanding to real-world applications—creating a continuous pipeline of innovation and knowledge.
          </p>
          
          <div className="relative">
            {visionJourneyData.map((item, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="w-12 md:w-24 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  {index < visionJourneyData.length - 1 && (
                    <div className="w-1 h-full bg-gray-300 absolute left-4 top-8"></div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                    <div className="text-sm text-gray-500 mb-2">{item.phase}</div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Department History and Timeline */}
      {activeTab === "history" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Department History and Timeline</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Since its establishment in 1959, our department has continuously evolved to stay at the cutting edge of materials science and engineering research and education.
          </p>
          
          <div className="relative">
            {timelineData.map((item, index) => (
              <div key={index} className="flex mb-8 relative">
                <div className="w-24 md:w-32 flex-shrink-0 text-right pr-4">
                  <div className="font-bold text-black">{item.year}</div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-black absolute top-1 -left-2"></div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 absolute left-0 top-5"></div>
                  )}
                </div>
                <div className="flex-grow pl-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow">
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explore MSME */}
      {activeTab === "explore" && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black text-center">Explore MSME</h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Discover the various facets of our department, from academic programs and research areas to facilities and opportunities for collaboration.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exploreLinks.map((item, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a 
                  href={item.link} 
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