import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./page/Services";
import About from "./Components/About";
import Navbaar from "./Components/Navbaar";
import NavTop from "./Components/NavTop";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Property from "./Components/Property";
function App() {
  return (
    <>
      <NavTop />
      <Navbaar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/property" element={<Property />} />
          <Route path="news" element={<News/>}/>
          <Route path="contact" element={<Contact />} />    
        </Routes>
      <Footer />
    </>
  );
}
export default App;