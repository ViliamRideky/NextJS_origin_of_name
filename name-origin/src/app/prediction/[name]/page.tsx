const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
}

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
}

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
}

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);
  const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Results for {params.name}
          </h1>
          <p className="text-gray-600">Here are your prediction results</p>
        </div>

        <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-100">
          <div className="text-xl font-semibold text-indigo-800 mb-4 pb-2 border-b border-indigo-200">
            Personal Info
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Age</div>
                <div className="font-medium text-gray-900">{age?.age || 'Unknown'}</div>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Gender</div>
                <div className="font-medium text-gray-900">{gender?.gender || 'Unknown'}</div>
              </div>
            </div>
            
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-500">Country</div>
                <div className="font-medium text-gray-900">{country?.country?.[0]?.country_id || 'Unknown'}</div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
  );
}