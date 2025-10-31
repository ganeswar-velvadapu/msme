import Link from "next/link";

export default function FacultyCard({ 
    name, 
    designation, 
    email, 
    phdFrom, 
    office, 
    id  
}) {
    return (
        <Link href={`/people/faculty/${id}`}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 mb-3">{designation}</p>
                <div className="space-y-2 text-sm text-gray-500">
                    <p className="truncate">{email}</p>
                    <p className="line-clamp-2">{phdFrom}</p>
                    <p>Office: {office}</p>
                </div>
            </div>
        </Link>
    );
}