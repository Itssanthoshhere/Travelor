import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Index from "./components/Index/Index";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";
import ServicesDetails from "./Pages/Services/ServicesDetails";
import Testimonials from "./Pages/Testimonials/Testimonials";
import TourGuide from "./Pages/TourGuide/TourGuide";
import TourGuideDetails from "./Pages/TourGuide/TourGuideDetails";
import Faqs from "./Pages/Faqs/Faqs";
import PricingPlan from "./Pages/PricingPlan/PricingPlan";
import Destination from "./Pages/Destination/Destination";
import DestinationDetails from "./Pages/Destination/DestinationDetails";
import Tours from "./Pages/Tours/Tours";
import ToursDetails from "./Pages/Tours/ToursDetails";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";

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
          <Route path="/tourguide/:id" element={<TourGuideDetails />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pricing" element={<PricingPlan />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<ToursDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
