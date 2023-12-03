import Awards from "@/components/main/Awards";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20 space-y-6 md:space-y-10">
        <Hero />
        <Skills />
        <Awards/>
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
