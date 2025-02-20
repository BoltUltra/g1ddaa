import Footer from "@/components/Footer.tsx";
import GetStarted from "@/components/GetStarted.tsx";
import TestimonialSlider from "@/components/Testimonials.tsx";
import WhyGiddaa from "@/components/WhyGiddaa.tsx";
import Products from "@/components/Products.tsx";
import Hero from "@/components/Hero.tsx";
import Navbar from "@/components/Navbar.tsx";
import Partners from "@/components/Partners.tsx";
import AboutUs from "@/components/AboutUs.tsx";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <Partners />
      <WhyGiddaa />
      <TestimonialSlider />
      <AboutUs />
      <GetStarted />
      <Footer />
    </div>
  );
};
export default Homepage;
