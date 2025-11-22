"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-5 flex justify-center bg-[#194D26] text-[#FBEEC8]">
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-14 font-medium text-lg"
      >
        <li className="cursor-pointer hover:text-[#FFFFFF]">Home</li>
        <li className="cursor-pointer hover:text-[#FFFFFF]">AI Barista</li>
        <li className="cursor-pointer hover:text-[#FFFFFF]">Menu</li>
        <li className="cursor-pointer hover:text-[#FFFFFF]">Locations</li>
      </motion.ul>
    </nav>
  );
}
