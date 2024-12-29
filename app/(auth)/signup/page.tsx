import { poppins } from "@/components/ui/fonts"
import Image from "next/image"
import { inter } from "@/components/ui/fonts"
import Link from "next/link"
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center  h-screen p-6">
      <div className="flex flex-col items-center justify-center bg-white border border-gray-200 p-10 rounded-lg shadow-sm box-border mt-[100px]">
        <div className="w-10 h-10 bg-slate-100 rounded-[50%] flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </div>
        <h1 className={`${poppins.className} mt-4 text-2xl font-semibold`}>Sign up</h1>
        <div className="flex flex-col items-center justify-center border-x-inherit  text-wrap">
          <p className={`${inter.className} text-[14px] mt-4  text-[#788BA5] text-center  font-medium antialiased`}>
            Welcome to StudyBuddy! Sign up to join study rooms,  collaborate <br/>  with peers, and excel together
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className={`${inter.className} border border-gray-200 flex text-[15px] font-medium justify-center gap-2 rounded-md items-center w-full mt-6 py-[8px] hover:bg-gray-100 transition duration-300 ease-in-out shadow-sm antialiased`}>
            <Image src="/google_2504739.png" width={20} height={20} alt="Google logo" />
            Continue with Google
          </button>
          <div className="flex items-center my-6 w-full">
            <hr className="flex-grow border-gray-300" />
            <span className={`${inter.className} mx-4 text-gray-500 font-medium text-[12px] antialiased`}>OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
        </div>
        <form className="w-full">
          <div className="flex flex-col justify-center w-full">
            <label className={`${inter.className} text-[14px] font-medium`}>Username</label>
            <input type="email" placeholder="Enter your username" className={`${inter.className} border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`} />
            <label className={`${inter.className} text-[14px] font-medium mt-5`}>Email</label>
            <input type="email" placeholder="Enter your email address" className={`${inter.className} border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`} />
            <label className={`${inter.className} text-[14px] font-medium mt-5`}>Password</label>
            <input type="password" placeholder="Enter your password" className={`${inter.className} border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50`} />
          </div>
          <button className={`${inter.className} bg-blue-600 text-white font-medium text-[15px] py-2 rounded-md w-full mt-6 hover:bg-blue-500 transition duration-300 ease-in-out shadow-sm antialiased`}>
            Create account
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center mt-6 ">
        <p className={`${inter.className} font-medium text-[14px] mb-5`}>Already have an account? <Link href="/login" className={`${inter.className} font-normal text-blue-500`}>Log in</Link></p>
      </div>
    </div>
  )
}