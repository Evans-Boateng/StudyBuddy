"use client";
import { inter } from "@/components/ui/fonts";
import { FiEye } from "react-icons/fi";
import { useState } from 'react';
import { FiEyeOff } from "react-icons/fi";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordShow = () => {
    setShowPassword((prev) => !prev);
  }
  return (
    <div className="flex items-center justify-center w-full h-full relative mt-2">
      <input type={showPassword ? 'text': 'password'} placeholder="Enter your password" className={`${inter.className} border border-gray-200 text-[14px] w-full pl-3 pr-10 py-[8px] focus:border-blue-600 placeholder-slate-400 rounded-md focus:outline-none focus:ring-[3px] focus:ring-blue-300 focus:ring-opacity-50`} />
      <div className="absolute right-5 cursor-pointer" onClick={togglePasswordShow}>
        {
          showPassword ? <FiEyeOff className="text-slate-500"/> :  <FiEye className="text-slate-500" /> 
        }
      </div>
      
    </div>
  )
}