import Link from "next/link";

export default function FacultyCard({
    name,
    image_url,
    designation,
    id
}) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden flex flex-col h-full group">
            <Link href={`/people/faculty/${id}`} className="block overflow-hidden h-[250px]">
                <img
                    src={image_url || "/api/placeholder/400/400"}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </Link>
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <Link href={`/people/faculty/${id}`} className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors block mb-2">
                        {name}
                    </Link>
                    <p className="text-gray-600">{designation}</p>
                </div>
            </div>
        </div>
    );
}