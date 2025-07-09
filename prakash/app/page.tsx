"use client"
import Navbar from "./components/Navbar";
import { Herosec,Startkid,About,Story,FooterSec } from "./sections/export";

function Home() {
  return (
    <section className="w-full flex-col overflow-x-clip overflow-y-scroll bg-neutral-900 flex justify-start items-center">
      <Navbar />
      <section className="w-full flex justify-center items-center flex-col">
              <Herosec />
              <Startkid />
              <About />
              {/* <Achivements />  */}
              <Story />
              <FooterSec />
      </section>
    </section>

  );
}


export default Home
