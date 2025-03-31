"use client";

export default function MSME() {
  return (
    <>
      <div className="max-w-7xl mx-auto  px-4 py-12">
        <h2 className="text-3xl mb-8 text-gray-800 border-blue-500 font-bold">What is MSME?</h2>
        <div className="bg-gray-100 rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            Micro, Small and Medium Enterprises (MSMEs) are the backbone of the Indian economy.
            They contribute significantly to the country's GDP, exports, and employment generation.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            MSMEs are classified based on their investment in plant and machinery or equipment:
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                <span className="text-xl">Mi</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Micro enterprises</h3>
                <p className="text-gray-600">Investment up to Rs. 1 crore and turnover up to Rs. 5 crore</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                <span className="text-xl">S</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Small enterprises</h3>
                <p className="text-gray-600">Investment up to Rs. 10 crore and turnover up to Rs. 50 crore</p>
              </div>
            </div>
            
            <div className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                <span className="text-xl">Me</span>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Medium enterprises</h3>
                <p className="text-gray-600">Investment up to Rs. 50 crore and turnover up to Rs. 250 crore</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6">
            <p className="text-gray-700 leading-relaxed">
              The government provides various schemes and initiatives to support the growth and development of MSMEs,
              including financial assistance, technological upgradation, infrastructure development, and marketing support.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <a href="#" className="inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors">
            Learn more about MSME initiatives →
          </a>
        </div>
      </div>
    </>
  );
}