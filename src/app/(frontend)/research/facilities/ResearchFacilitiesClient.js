"use client"
import { useState } from 'react';
import { Mail, MapPin, User, CreditCard, FileText, Globe, X } from 'lucide-react';

export default function ResearchFacilitiesClient({ facilities }) {
    const [selectedFacility, setSelectedFacility] = useState(null);

    // Filter facilities by priority
    const highPriority = facilities.filter(f => f.priority === 'high');
    const lowPriority = facilities.filter(f => f.priority !== 'high'); // Default or low

    const openModal = (facility) => {
        setSelectedFacility(facility);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedFacility(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* High Priority Section - Grid */}
            {highPriority.length > 0 && (
                <div className="mb-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {highPriority.map((facility) => (
                            <div
                                key={facility.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 flex flex-col"
                                onClick={() => openModal(facility)}
                            >
                                <div className="h-90 bg-gray-200 relative">
                                    <img
                                        src={facility.research_facility_image_url?.url || "/api/placeholder/400/300"}
                                        alt={facility.research_facility_name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow flex flex-col justify-center">
                                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">{facility.research_facility_name}</h3>
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
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Faculty In Charge</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {lowPriority.map((facility) => (
                                    <tr
                                        key={facility.id}
                                        className="hover:bg-gray-50 cursor-pointer transition-colors"
                                        onClick={() => openModal(facility)}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{facility.research_facility_name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{facility.research_facility_location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{facility.research_facility_fic}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Modal for Details */}
            {selectedFacility && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[10000] flex items-center justify-center p-4" onClick={closeModal}>
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900">{selectedFacility.research_facility_name}</h3>
                            <button
                                onClick={closeModal}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Column - Image (if exists) */}
                                {selectedFacility.research_facility_image_url && (
                                    <div className="rounded-lg overflow-hidden bg-gray-100 h-64 md:h-full min-h-[250px]">
                                        <img
                                            src={selectedFacility.research_facility_image_url.url}
                                            alt={selectedFacility.research_facility_name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Right Column - Details */}
                                <div className={`space-y-4 ${selectedFacility.research_facility_image_url ? '' : 'col-span-2'}`}>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Location</p>
                                            <p className="text-gray-900">{selectedFacility.research_facility_location || "N/A"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <User className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Faculty in Charge</p>
                                            <p className="text-gray-900">{selectedFacility.research_facility_fic || "N/A"}</p>
                                        </div>
                                    </div>

                                    {selectedFacility.research_facility_fic_email && (
                                        <div className="flex items-start gap-3">
                                            <Mail className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Email</p>
                                                <a href={`mailto:${selectedFacility.research_facility_fic_email}`} className="text-blue-600 hover:underline">
                                                    {selectedFacility.research_facility_fic_email}
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-3">
                                        <User className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Staff in Charge</p>
                                            <p className="text-gray-900">{selectedFacility.research_facility_staff_incharge || "N/A"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <CreditCard className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                        <div>
                                            <p className="text-sm font-medium text-gray-500">Usage Charges</p>
                                            <p className="text-gray-900">{selectedFacility.research_facility_usage_charges || "N/A"}</p>
                                        </div>
                                    </div>

                                    {selectedFacility.research_facility_forms && (
                                        <div className="flex items-start gap-3">
                                            <FileText className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                                            <div>
                                                <p className="text-sm font-medium text-gray-500">Forms</p>
                                                <p className="text-gray-900">{selectedFacility.research_facility_forms}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Writeup / Description Section */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <h4 className="text-sm font-semibold text-gray-500 mb-2">Description</h4>
                                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                                    {selectedFacility.writeup || "Description not available"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}