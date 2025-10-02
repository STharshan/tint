import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "It was a delight to find this young man's company and to speak with him on the phone. Ian was very informative when I enquired to having my response vehicle rear windows tinted. I was able to take my vehicle in earlier than arranged. Ian's work is excellent. If you're  considering any form of tint work for your vehicle, go to DerbyTint's'n'Wraps.",
    author: "Simon Butler",
  },
  {
    quote:
      "Had the rear windows on my 5 series touring done today and Ian has done an amazing job! Tint gives the car a great look and Ian is informative and professional... top customer service. Cheers!",
    author: "Richard Michael West",
  },
  {
    quote: "Can't recommend Ian highly enough, I was more than impressed by the whole booking, confirmation text with directions and obviously the tinting job on our windows. What was also a great help to me was that Ian was willing to get in earlier than his normal hours to help fit around my work. I would definitely recommend derby tints & wraps to anyone who needs a high quality job doing on their car!",
    author: "James Scattergood",
  },
    {
    quote: "Couldn't ask for better service and job, I asked Ian on a Friday if he had any free spots and the next morning it was sorted, top bloke and top job, cheers! I would highly recommend DerbyTints'n'Wraps!",
    author: "Ryan Fitz ",
  },
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
