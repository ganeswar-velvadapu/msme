"use client";

import { useState } from "react";
import {
    Mail,
    MapPin,
    User,
    CreditCard,
    FileText,
    X,
} from "lucide-react";

export default function ResearchFacilitiesClient({ facilities }) {
    const [selectedFacility, setSelectedFacility] = useState(null);

    // Filter facilities by priority
    const highPriority = facilities.filter(
        (f) => f.priority === "high"
    );

    const lowPriority = facilities.filter(
        (f) => f.priority !== "high"
    );

    const openModal = (facility) => {
        setSelectedFacility(facility);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedFacility(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="py-8 sm:py-12 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">

            {/* High Priority Section */}
            {highPriority.length > 0 && (
                <div className="mb-12 sm:mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {highPriority.map((facility) => (
                            <div
                                key={facility.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 flex flex-col"
                                onClick={() => openModal(facility)}
                            >
                                <div className="h-72 sm:h-80 lg:h-90 bg-gray-200 relative">
                                    <img
                                        src={
                                            facility
                                                .research_facility_image_url
                                                ?.url ||
                                            "/api/placeholder/400/300"
                                        }
                                        alt={facility.research_facility_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-4 flex-grow flex flex-col justify-center">
                                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                        {facility.research_facility_name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Low Priority Section - Table */}
            <div>
                <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Facility Name
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Location
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Staff In Charge
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {lowPriority.map((facility) => (
                                    <tr
                                        key={facility.id}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => openModal(facility)}
                                    >
                                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {facility.research_facility_name}
                                        </td>

                                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {facility.research_facility_location}
                                        </td>

                                        <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            {facility.research_facility_staff_incharge ||
                                                "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Click Note */}
            <p className="mt-4 text-center text-sm text-gray-500">
                * Click on a facility to get more details
            </p>

            {/* Modal for Details */}
            {selectedFacility && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-3 sm:p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[92vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b border-gray-100">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 pr-4">
                                {selectedFacility.research_facility_name}
                            </h3>

                            <button
                                onClick={closeModal}
                                aria-label="Close"
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0"
                            >
                                <X
                                    size={20}
                                    className="text-gray-500"
                                />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6">

                            {/* Image + Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Image */}
                                {selectedFacility.research_facility_image_url && (
                                    <div className="rounded-lg overflow-hidden bg-gray-100 h-56 sm:h-64 md:h-full md:min-h-[250px]">
                                        <img
                                            src={
                                                selectedFacility
                                                    .research_facility_image_url
                                                    .url
                                            }
                                            alt={
                                                selectedFacility.research_facility_name
                                            }
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Details */}
                                <div
                                    className={`space-y-5 ${
                                        selectedFacility.research_facility_image_url
                                            ? ""
                                            : "md:col-span-2"
                                    }`}
                                >

                                    {/* Location */}
                                    <div className="flex items-start gap-3">
                                        <MapPin
                                            className="text-gray-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-500">
                                                Location
                                            </p>

                                            <p className="text-gray-900 break-words">
                                                {selectedFacility.research_facility_location ||
                                                    "N/A"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* FIC Name */}
                                    <div className="flex items-start gap-3">
                                        <User
                                            className="text-gray-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-500">
                                                Faculty In Charge
                                            </p>

                                            <p className="text-gray-900 break-words">
                                                {selectedFacility.research_facility_fic ||
                                                    "N/A"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* FIC Email */}
                                    {selectedFacility.research_facility_fic_email && (
                                        <div className="flex items-start gap-3">
                                            <Mail
                                                className="text-gray-400 mt-1 flex-shrink-0"
                                                size={18}
                                            />

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-500">
                                                    FIC Email
                                                </p>

                                                <a
                                                    href={`mailto:${selectedFacility.research_facility_fic_email}`}
                                                    className="text-blue-600 hover:underline break-all"
                                                >
                                                    {
                                                        selectedFacility.research_facility_fic_email
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Staff Name */}
                                    <div className="flex items-start gap-3">
                                        <User
                                            className="text-gray-400 mt-1 flex-shrink-0"
                                            size={18}
                                        />

                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-gray-500">
                                                Staff In Charge
                                            </p>

                                            <p className="text-gray-900 break-words">
                                                {selectedFacility.research_facility_staff_incharge ||
                                                    "N/A"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Staff Email */}
                                    {selectedFacility.research_facility_staff_email && (
                                        <div className="flex items-start gap-3">
                                            <Mail
                                                className="text-gray-400 mt-1 flex-shrink-0"
                                                size={18}
                                            />

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Staff Email
                                                </p>

                                                <a
                                                    href={`mailto:${selectedFacility.research_facility_staff_email}`}
                                                    className="text-blue-600 hover:underline break-all"
                                                >
                                                    {
                                                        selectedFacility.research_facility_staff_email
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Actual Usage Charges PDF */}
                                    {selectedFacility.research_facility_usage_file && (
                                        <div className="flex items-start gap-3">
                                            <CreditCard
                                                className="text-gray-400 mt-1 flex-shrink-0"
                                                size={18}
                                            />

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Usage Charges
                                                </p>

                                                {typeof selectedFacility.research_facility_usage_file ===
                                                    "object" &&
                                                selectedFacility
                                                    .research_facility_usage_file
                                                    .url ? (
                                                    <a
                                                        href={
                                                            selectedFacility
                                                                .research_facility_usage_file
                                                                .url
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline text-sm font-medium"
                                                    >
                                                        View Actual Usage Charges
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-900">
                                                        N/A
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {/* Application Form */}
                                    {selectedFacility.research_facility_application_form?.url && (
                                        <div className="flex items-start gap-3">
                                            <FileText
                                                className="text-gray-400 mt-1 flex-shrink-0"
                                                size={18}
                                            />

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Application Form
                                                </p>

                                                <a
                                                    href={
                                                        selectedFacility
                                                            .research_facility_application_form
                                                            .url
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline text-sm font-medium"
                                                >
                                                    Download Application Form
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Booking Form */}
                                    {selectedFacility.facility_usage_charges && (
                                        <div className="flex items-start gap-3">
                                            <FileText
                                                className="text-gray-400 mt-1 flex-shrink-0"
                                                size={18}
                                            />

                                            <div className="min-w-0">
                                                <p className="text-sm font-medium text-gray-500">
                                                    Booking Form
                                                </p>

                                                <a
                                                    href={
                                                        selectedFacility.facility_usage_charges
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline text-sm font-medium break-words"
                                                >
                                                    Open Booking Form
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="text-sm font-semibold text-gray-500 mb-2">
                                    Description
                                </h4>

                                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                                    {selectedFacility.writeup ||
                                        "Description not available"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}