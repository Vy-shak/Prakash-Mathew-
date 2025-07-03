import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <section className="w-screen bg-neutral-800 flex justify-start items-center">
      <Navbar />
      <div className="w-full h-screen rounded-xl overflow-hidden grid place-items-center">
        <video
          className="w-full h-full object-cover"
          src="/Herocut.mp4"
          muted
          loop
          autoPlay
        />
      </div>
    </section>
  );
}
