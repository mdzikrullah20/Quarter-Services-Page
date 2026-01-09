import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./page/Services";
import About from "./Components/About";
import Navbaar from "./Components/Navbaar";
import NavTop from "./Components/NavTop";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavTop />
      <Navbaar />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/property" element={<Property />} /> */}
        </Routes>
      <Footer />
    </>
  );
}

export default App;