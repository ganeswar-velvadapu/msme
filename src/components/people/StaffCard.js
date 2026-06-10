import { GraduationCap, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function StaffCard({ name, designation, image_url, onClick }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100 flex flex-col">

            <img
                src={image_url || "/api/placeholder/400/400"}
                alt={name}
                className="w-full h-[250px] object-cover"
            />

            {/* Content */}
            <div className="m-4 flex flex-col flex-grow">

                <p className="text-gray-600 mb-3">
                    {name}
                </p>

                {/* Push button to bottom */}
                <button
                    className="mt-auto text-sm font-medium text-gray-900 hover:text-gray-700 inline-flex items-center transition-colors hover:cursor-pointer"
                    onClick={onClick}
                >
                    Know more
                    <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

            </div>

        </div>
    )
}