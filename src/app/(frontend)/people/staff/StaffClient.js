"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Search,
  X,
  Mail,
  MapPin,
  GraduationCap,
  BookOpen,
} from "lucide-react";
import StaffCard from "../../../../components/people/StaffCard";

export default function StaffClient({ staffList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedAndFilteredStaff = useMemo(() => {
    if (!Array.isArray(staffList)) return [];

    return staffList
      .filter((member) =>
        member?.staff_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        (a?.staff_name || "").localeCompare(b?.staff_name || "")
      );
  }, [staffList, searchTerm]);

  const openModal = (staff) => {
    setSelectedStaff(staff ?? null);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStaff(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">
        Staff Members
      </h1>

      <div className="relative max-w-md mb-10">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search staff by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white text-gray-800"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedAndFilteredStaff.length > 0 ? (
          sortedAndFilteredStaff.map((member, index) => (
            <StaffCard
              key={member?.id ?? index}
              name={member?.staff_name ?? "N/A"}
              designation={member?.staff_designation ?? ""}
              email={member?.staff_email ?? ""}
              phdFrom={member?.staff_education ?? ""}
              office={member?.staff_office ?? ""}
              onClick={() => openModal(member)}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            No staff members match your search
          </div>
        )}
      </div>

      {/* Staff Detail Modal */}
      {isModalOpen && selectedStaff && (
        <div className="fixed inset-0 backdrop-blur-md bg-black/60 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Staff Profile
              </h2>
              <button
                onClick={closeModal}
                className="p-1 cursor-pointer rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={20} className="text-gray-500" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 flex-grow">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex-shrink-0">
                  <img
                    src={
                      selectedStaff?.staff_image?.url ||
                      "/api/placeholder/300/300"
                    }
                    alt={selectedStaff?.staff_name ?? "Staff"}
                    className="w-full aspect-square object-contain rounded-lg shadow-sm"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {selectedStaff?.staff_name ?? "N/A"}
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    {selectedStaff?.staff_designation ?? ""}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Mail size={18} className="text-gray-500" />
                      <span className="text-gray-700">
                        {selectedStaff?.staff_email ?? "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-gray-500" />
                      <span className="text-gray-700">
                        Education: {selectedStaff?.staff_education ?? "N/A"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-gray-500" />
                      <span className="text-gray-700">
                        Office: {selectedStaff?.staff_office ?? "N/A"}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={18} className="text-gray-500" />
                      <h4 className="font-semibold text-gray-900">
                        Research Interests
                      </h4>
                    </div>
                    <div className="pl-6 flex flex-wrap gap-2">
                      {Array.isArray(
                        selectedStaff?.staff_research_interests
                      ) &&
                      selectedStaff.staff_research_interests.length > 0 ? (
                        selectedStaff.staff_research_interests.map(
                          (interest, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {interest?.research_interest_staff ?? "N/A"}
                            </span>
                          )
                        )
                      ) : (
                        <span className="text-gray-500 text-sm">
                          No research interests listed
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Facility In Charge
                    </h4>
                    <div className="pl-6 flex flex-wrap gap-2">
                      {Array.isArray(selectedStaff?.fic_staff) &&
                      selectedStaff.fic_staff.length > 0 ? (
                        selectedStaff.fic_staff.map((staff_option, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {staff_option?.fic_staff_option ?? "N/A"}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-500 text-sm">
                          None assigned
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
