import Header from "./components/Header"
import keyboardImage from "./assets/keyboard.webp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
