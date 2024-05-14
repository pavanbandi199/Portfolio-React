
import AboutNew from "./Components/AboutNew";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Hero from "./Components/Hero";
import NavbarNew from "./Components/NavbarNew";
import Projects from "./Components/Projects";
import Technologies from "./Components/Technologies";

function App() {
  return (
    <div className="text-white selection:bg-cyan-500 selection:text-black" >
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
      </div>
      <div className="container mx-auto px-8">
        <NavbarNew/>
        <Hero/>
        <AboutNew/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
//className=" bg-gradient-to-b from-slate-800 to-black text-white"