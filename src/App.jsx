import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/brands";
import Gallery from './components/Gallery';
import Models from './components/Model';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        <Hero />
      </div>
      <Brands />
      <Models />
      <Gallery />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;
