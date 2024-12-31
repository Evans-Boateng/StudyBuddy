import { inter } from "@/components/ui/fonts";
import { FiEye } from "react-icons/fi";
import { useState } from 'react';
export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex items-center justify-center w-full relative">
      <input type="password" placeholder="Enter your password" className={`${inter.className} border border-gray-200 text-[14px] w-full px-3 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md mt-2  focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50`} />
      <FiEye />
    </div>
  )
}