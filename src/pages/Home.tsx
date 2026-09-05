import keyboardImage from "../assets/keyboard.webp";
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
    <img 
      src={keyboardImage} 
      alt="Playing the keyboard"
      className="
        w-full
        h-full
        object-cover
        object-top-left
        aspect-3/4
        md:aspect-16/10
      "
    />
    <div className="flex flex-col gap-4 py-4 px-4 md:px-0">
      <About />
      <ProjectList featured={true} />
      <Contact />
    </div>
    <Footer />
    </>
  )
}