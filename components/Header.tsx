import Link from "next/link";
import { plusJakartaSans } from "./ui/fonts";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white/30 backdrop-blur-md drop-shadow-md py-4 px-8 sticky z-50 top-0">
      <div>
        <p className="text-blue text-2xl">StudyBuddy</p>
      </div>
      <div>
        <button className={`${plusJakartaSans.className} border border-blue-600 rounded-md py-1 px-4 sm:px-6 hover:text-white hover:bg-blue-600 transition duration-300 ease-in-out antialiased`}><Link href='/login'>Login</Link></button>
      </div>
      
    </div>
  );
}