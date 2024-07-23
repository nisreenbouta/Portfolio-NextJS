import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-36 items-center justify-between p-4">
      
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}
