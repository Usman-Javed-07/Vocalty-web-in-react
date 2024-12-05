import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
export const Footer = () => {
    return (
        <>
          <footer>
            <div className="bg-sky-400">
                <div className="footer-header">
                    <h1 className="text-slate-50 font-bold text-4xl p-5 pb-0 text-base sm:text-sm md:text-lg lg:text-xl" >VOCALTY</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 pt-15 p-5 Use place-items-center ">
                   <div className="footer-data">
                    <h2 className="text-slate-50 font-bold text-3xl pb-5 text-base sm:text-sm md:text-lg lg:text-xl">Inspiration</h2>
                     <p className="text-slate-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit enim consectetur 
                        quibusdam nulla et eos a quam aliquid beatae odio fuga aut sint, sed velit maiores 
                        placeat iusto consequatur quia, adipisci tenetur maxime commodi ipsa nemo earum? 
                        Voluptatem totam debitis, dignissimos, officiis maiores commodi, nam dolore ullam 
                        eum adipisci excepturi.</p>
                   </div>
                   <div className="download-app">
                    <h2 className="text-slate-50 font-bold text-3xl p-10 text-base sm:text-sm md:text-lg lg:text-xl">Download The App</h2>
                    <div className="flex gap-3.5">
                        <img className="  md:rounded-2xl cursor-pointer w-24 h-8 md:w-32 lg:w-48 h-16 md:h-16 lg:h-20" src="./public/images/googleplay.png" alt="google image" />
                        <img className="  md:rounded-2xl cursor-pointer w-24 h-8 md:w-32 lg:w-48 h-16 md:h-16 lg:h-20 " src="./public/images/appstore.png" alt="appstore image" />
                    </div>
                   </div>
                   <div className="grid">
                      <h2 className="text-slate-50   p-10 text-sm md:text-xl  lg:text-3xl text-base sm:text-sm md:text-lg lg:text-xl">Follow Us</h2>
                      <div className="flex gap-3.5 ">

                          <div className="text-base text-slate-50 font-bold text-4xl ">
                              <  FaLinkedin/>
                          </div>
                          <div className="text-base text-slate-50 font-bold text-4xl">
    
                              <IoLogoFacebook />
    
                          </div>
                          <div className="text-base text-slate-50 font-bold text-4xl">
                          <FaInstagram />
                          </div>
                      </div>
                   </div> 
                </div>
                 <p className="text-slate-50 text-center pb-4">All rights reserved &copy; 2024 Vocalty</p>
            </div>
          </footer>
        </>
    )
}