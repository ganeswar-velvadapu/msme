import Link from "next/link";

export default function AdjunctFacultyCard({
    name,
    designation,
    email,
    image_url,
    phdFrom,
    office,
    id
}) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <img
                    src={image_url || "/api/placeholder/400/400"}
                    alt={name}
                    className="w-full h-[250px] object-cover"
                />
                <div className="m-4">
                    <Link href={`/people/adjunct/${id}`} className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600">{name}</Link>
                    <p className="text-gray-600 mb-3">{designation}</p>
                </div>
            </div>
        </>
    );
}