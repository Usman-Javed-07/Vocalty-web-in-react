
export const Home = () => {

    return (
        <>
        <div>
        <div className="bg-[url('./public/images/banner.jpg')] h-[750px] w-full bg-cover bg-center flex flex-col justify-center items-center h-screen"> 
            <div className="text-center">
                <div>
                    <h1 className="text-5xl font-bold text-slate-50 "> Find Your Outdoors</h1>
                    </div>
                    <div className="p-2 sm:p-4 md:p-6 lg:p-8">
                    
                        <input  className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500  focus:border-blue-500" type="search" placeholder="Search By city, place or trail name" />
                    </div>
            </div>
             </div>
             </div>
        </>
    )
}