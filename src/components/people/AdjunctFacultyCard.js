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
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <img
                    src={image_url || "/api/placeholder/400/400"}
                    alt={name}
                    className="w-full aspect-square object-contain rounded-lg shadow-md"
                />
                <div className="m-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                    <p className="text-gray-600 mb-3">{designation}</p>
                    <div className="space-y-2 text-sm text-gray-500">
                        <p className="truncate">{email}</p>
                        <p className="line-clamp-2">{phdFrom}</p>
                        <p>Office: {office}</p>
                        <Link href={`/people/adjunct/${id}`} className="hover:text-blue-600" >Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
}