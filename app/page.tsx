import Awards from "@/components/main/Awards";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Planet from "@/components/sub/Planet";
import Sun from "@/components/sub/Sun";
import Moon from "@/components/sub/Moon";
import Image from "next/image";
import Rocket from "@/components/sub/Rocket";
import Ship from "@/components/sub/Ship";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 space-y-6 md:space-y-10">
        <Hero />
        <Sun/>
        <Skills />
        <Planet/>
        <Awards/>
        <Ship/>
        <Encryption />
        <Moon/>
        <Projects />
        <Rocket/>
      </div>
    </main>
  );
}
