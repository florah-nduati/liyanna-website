import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import TourPackages from "./pages/tourPackages/tourPackage";
import TourDetails from "./pages/tourDetails/tourDetail";
import Booking from "./pages/booking/booking";
import About from "./pages/aboutUs/about";
import Gallery from "./pages/gallery/gallery";
import Contact from "./pages/contact/contact";
import FAQs from "./pages/faq/faq";
import Blog from "./pages/blog/BLOG.JSX";
import SingleBlog from "./pages/singleBlogPost/singleBlog";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<TourPackages />} />
          <Route path="/tour/:id" element={<TourDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
