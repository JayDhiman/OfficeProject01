import React from 'react'
// import img from '../../assets/img.jpg';
import about02 from '../../assets/about02.jpg'
import { Link } from 'react-router-dom'

const HomeMainContent = () => {

  return (
    <>
    <main className='w-full'>
     <section className="flex justify-center items-center  w-fit rounded-xl bg-white mx-auto max-sm:flex-col">
        
          <div className="w-full border-spacing-4 border-double   ">
            
            {/* Image section */}
            
            <img src={about02} className="rounded-xl max-sm:hidden"  />
           </div>
          
          <div className="w-screen  flex-col justify-start items-start border-double border-4  max-sm:w-fit ">
            
            {/* dummy text */}
           


            
            <div className="text-start font-light mx-14 ">
              <h1
                className="mx-auto hover:underline hover:decoration-1 hover:font-normal max-sm:text-2xl text-6xl max-lg:text-4xl mr-3">
                
                Des<span className="text-cyan-200">cription</span>
               </h1>

             <h3 className="  max-sm:text-md xl:text-3xl lg:text-2xl ">
                Lorem | ipsum | dolor.
              </h3>
            </div>

            <div className="w-fit mx-14 text-start max-sm:text-sm ">
              <p className="font-thin text-black overflow-hidden w-56 mx-auto mt-2 t">
                Lorem ipsum dolor sit amet consectetur asperiores aliquid quod
                eius.
              </p>
            </div>

              <div className="w-fit mx-14 text-start ">
                <Link to = '/dashboard'>
                
           <button
              //  onClick={handleNavigation}
               className="px-2  max-sm:text-sm  text-sm font-light text-white bg-sky-600 hover:bg-sky-700 hover:text rounded-md cursor-pointe ">
                GETTING STARTED
           </button>
              </Link>
            </div>
          
          </div>
        </section>
     
     
    </main>
    </>
  )
}

export default HomeMainContent