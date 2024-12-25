import Image from "next/image";
import Header from "@/components/Header";
import { ImagesSliderContainer } from "@/components/ui/ImagesSlider";
import dynamic from 'next/dynamic';
import { poppins } from "@/components/ui/fonts";
import { features } from "@/components/ui/steps";

// Dynamically import the component, disabling SSR
// const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), {
//   ssr: false, // Disable SSR for this component
// });

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="h-[300px] sm:h-[400px] w-full ">
        <ImagesSliderContainer />
      </div>
      <div className="mt-8 flex  items-center justify-center">
        <button className={
          `${poppins.className} 
          bg-blue-600 
          hover:bg-blue-500 transition duration-300 ease-in-out text-white font-medium text-md sm:text-lg py-[6px] px-9 sm:px-12 rounded-[20px]  
           shadow-lg antialiased`
        }>
          Get started
        </button>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="animate-bounce text-gray-400" width="4em" height="4em" viewBox="0 0 448 512" data-v-e8d572f6="">
          <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
      </div>
      <div className="mt-8 px-7 lg:px-[120px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {
          features.map((step, index) => {
            return (
              <div className="flex flex-col  justify-center bg-white p-3 rounded-lg shadow" key={index}>
                <div className="mb-1 flex gap-1 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon text-indigo-500" width="1em" height="1em" viewBox="0 0 576 512" data-v-e8d572f6="">
                    <path fill="currentColor" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32v352c0 35.3 28.7 64 64 64h192v-64H64V160h192V96H64zm224 160c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4L409.4 9.4c-6-6-14.1-9.4-22.6-9.4H320c-17.7 0-32 14.3-32 32zm0 288c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32h-98.7c-8.5 0-16.6-3.4-22.6-9.4l-13.3-13.3c-6-6-14.1-9.4-22.6-9.4l-66.8.1c-17.7 0-32 14.3-32 32z"></path>
                  </svg>
                  <h3 className={`${poppins.className}  text-4 font-semibold`}>
                    <i className="fa fa-commenting-o" aria-hidden="true"></i>
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-[14px] font-400 text-gray-500">{step.description}</p>
              </div>
            )
          })
        }

      </div>
      
      
    </div>
  );
}
