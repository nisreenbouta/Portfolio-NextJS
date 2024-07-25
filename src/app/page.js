import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-36 items-center justify-between ">
      
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </main>
  );
}
