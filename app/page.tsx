import Image from "next/image";
import Header from "@/components/Header";
import { ImagesSliderContainer } from "@/components/ui/ImagesSlider";
import dynamic from 'next/dynamic';
import { poppins } from "@/components/ui/fonts";

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
           shadow-lg`
        }>
          Get started
        </button>
      </div>
      <div className="mt-8 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="animate-bounce" width="4em" height="4em" viewBox="0 0 448 512" data-v-e8d572f6="">
          <path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7L86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
        </svg>
      </div>
      <div className="mt-8 bg-blue-500 h-[400px]"></div>
      
      
    </div>
  );
}
