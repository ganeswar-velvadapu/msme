"use client";

const MessageClient = ({ message }) => {
  const content = message?.[0] || {};
  const { hod_message, select_hod } = content;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row items-stretch">
          {/* HOD Photo Side */}
          <div className="lg:w-1/3 bg-gray-50 flex items-center justify-center p-8 lg:p-12">
            <div className="relative group">
              <img
                src={select_hod?.faculty_image?.url || "/api/placeholder/400/500"}
                alt={select_hod?.faculty_name || "HOD"}
                className="relative rounded-lg shadow-xl w-full max-w-[300px] aspect-[4/5] object-cover border-4 border-white"
              />
            </div>
          </div>

          {/* Message Side */}
          <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <svg
                className="w-12 h-12 text-gray-200 mb-4"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="text-gray-700 text-lg leading-relaxed italic whitespace-pre-line">
                {hod_message || "Message content goes here..."}
              </div>
            </div>

            {/* HOD Info at the Bottom */}
            <div className="border-t border-gray-100 pt-8 mt-4">
              <h3 className="text-2xl font-bold text-black uppercase tracking-tight">
                {select_hod?.faculty_designation || "Professor and Head"}
              </h3>
              <p className="text-gray-500 font-medium mt-1">
              Head of the Department
              </p>
              <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase font-semibold">
                Materials Science and Metallurgical Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageClient;