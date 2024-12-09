
export const CountryTours = () => {
    
        // Array of country names
        const countries = [
          "Japan", "United States", "United Kingdom", "Iceland", "Greece", "France",
          "Italy", "Egypt", "Australia", "Brazil", "India", "China", "Pakistan", "Bangladesh"
        ];
    return (
        <>
        <div className="bg-gradient-to-br from-green-400 to-blue-500  h-auto w-full">
            <div className="flex flex-col justify-center items-center h-screen">
            <div >
                <h1 className="text-2xl text-slate-50 pb-5 ">Find inspiration for your next trip</h1>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 p-10 gap-10">
      
      {countries.map((country, index) => (
        <button
          key={index}
          className="bg-gradient-to-r from-teal-200 to-lime-200 hover:from-lime-200 hover:to-teal-200 text-white font-bold py-3 px-9 rounded"
        >
          {country}
        </button>
      ))}
    </div>
             </div>
        </div>
        </>
    )
}