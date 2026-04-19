"use server"
import { getPayload } from "payload";
import config from "@payload-config";
import PageBanner from "@/components/PageBanner";

export default async function TimeTable() {
    const payload = await getPayload({ config });
    const timeTable = await payload.findGlobal({ slug: "timetable" });
    
    // Directly accessing the time_table array from the response
    const timeTableData = timeTable.time_table || []; // Fallback to empty array if no data
    
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            <PageBanner title="Time Table" />
            <div className="bg-white p-6">
                <div className="max-w-4xl mx-auto">

                {/* Main Table */}
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-4 text-left text-black text-sm uppercase tracking-wider">
                                        Time Period
                                    </th>
                                    <th className="px-6 py-4 text-center text-black text-sm uppercase tracking-wider">
                                        Link
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {timeTableData.map((item, index) => (
                                    <tr key={item.id} className="hover:bg-gray-100 transition-colors duration-200">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-lg text-black">
                                                {item.time_table_year}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <a
                                                href={item.time_table_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors duration-200"
                                            >
                                                <div className="mr-2">
                                                    View Schedule
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};