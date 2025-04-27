export default function CompanyGrid({ companies }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                {company.companyName.charAt(0)}
              </div>
              <p className="font-medium text-gray-800">{company.companyName}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  