"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

interface HeroProps {
  onStartCall?: () => void;
}

export default function Hero({ onStartCall }: HeroProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </Head>
      <section className="h-screen w-full flex flex-col justify-center items-center text-center bg-[#194D26] text-[#FBEEC8] relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-extrabold text-7xl leading-tight z-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Personal <br /> AI Barista
        </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-3xl text-[#FBEEC8cc] z-10"
      >
        Order your perfect cup with the power of AI conversation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex gap-4 mt-8 z-10"
      >
        <button 
          onClick={onStartCall}
          className="px-5 py-2 z-10 bg-[#F3E8C5] rounded-full text-[#194D26] font-semibold hover:scale-105 transition"
        >
          Start Talking
        </button>

        <button className="px-5 py-2 z-10 border border-[#F3E8C5] rounded-full text-[#F3E8C5] font-semibold hover:bg-[#2d713d] transition">
          View Menu
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-[-5%] flex justify-center items-end w-full pointer-events-none"
      >
         <div className="relative z-0 w-100 h-100 translate-y-12 -rotate-12 opacity-80">
            <Image src="/coffee.png" alt="Coffee Cup" fill className="object-contain" />
         </div>
         <div className="relative z-0 w-120 h-120">
            <Image src="/coffee.png" alt="Coffee Cup" fill className="object-contain" />
         </div>
         <div className="relative w-100 h-100 translate-y-12 rotate-12 opacity-80">
            <Image src="/coffee.png" alt="Coffee Cup" fill className="object-contain" />
         </div>
      </motion.div>
    </section>
    </>
  );
}
