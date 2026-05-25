import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Index from "./components/Index/Index";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import Testimonials from "./Pages/Testimonials/Testimonials";
import TourGuide from "./Pages/TourGuide/TourGuide";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServicesDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/tourguide" element={<TourGuide />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
