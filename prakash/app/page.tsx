"use client"
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "motion/react"
import { Herosec,Startkid } from "./sections/export";

function Home() {
  return (
    <section className="w-screen flex-col bg-neutral-800 flex justify-start items-center">
      <Navbar />
      <section className="w-full">
              <Herosec />
      </section>
      <section className="w-full">
              <Startkid />
      </section>
    </section>

  );
}


export default Home
