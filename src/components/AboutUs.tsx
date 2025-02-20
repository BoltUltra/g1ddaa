import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nowPlaying = () => {
    toast.success("Playing video");
  };

  return (
    <section
      ref={sectionRef}
      className={`section md:py-20 py-10 transition-all duration-700 transform ${
        isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
      }`}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-1 milik">
          Know More About Us
        </h2>
        <div className="h-1 bg-primary w-24 rounded-full mx-auto mb-5" />
        <p className="text-gray-600 md:max-w-sm mx-auto">
          From our teams lips to your ears — let’s tell you about Giddaa.
        </p>
      </div>
      <div className="relative">
        <img src="/images/aboutus.webp" alt="" />
        <button
          onClick={nowPlaying}
          className="absolute h-full w-full top-0 left-0 flex items-center justify-center"
        >
          <img src="/icons/play.svg" alt="" />
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
