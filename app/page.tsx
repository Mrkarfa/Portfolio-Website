import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Project from "./component/Project";
import Capabilities from "./component/Capabilities";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col gap-12">
        <Hero />
        <About />
        <Project />
        <Capabilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
