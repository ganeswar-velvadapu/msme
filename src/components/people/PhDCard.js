"use client";

export default function PhDCard({ name, roll_no, image_url, onClick }) {
    return (
        <div 
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 flex flex-col group"
            onClick={onClick}
        >
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                    src={image_url || "/api/placeholder/400/400"}
                    alt={name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-black mb-1 line-clamp-1">
                    {name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                    {roll_no}
                </p>

                <div
                    className="mt-auto text-sm font-semibold text-black inline-flex items-center group-hover:text-gray-600 transition-colors"
                >
                    Know more
                    <svg
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </div>
            </div>
        </div>
    );
}
