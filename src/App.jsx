import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./page/Services";
import About from "./Components/About";
import Navbaar from "./Components/Navbaar";
import NavTop from "./Components/NavTop";
import Footer from "./Components/Footer";
import News from "./Components/News";
import Contact from "./Components/Contact";
import Properties from "./Components/Properties";
function App() {
  return (
    <>
      <NavTop />
      <Navbaar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="news" element={<News/>}/>
          <Route path="contact" element={<Contact />} />    
        </Routes>
      <Footer />
    </>
  );
}
export default App;