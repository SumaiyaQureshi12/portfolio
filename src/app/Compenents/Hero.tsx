import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-left lg:bg-[15%] bg-cover"
      style={{
        backgroundImage: "url()",
        backgroundSize: "35%",
        backgroundPosition: "left 100px",
      }}
    >
      <div className="container mx-auto h-[calc(100vh-60px)] flex items-center justify-center">
        {/* Hero Text */}
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="text-[70px] sm:text-[90px] font-bold leading-tight text-cyan-400">
            <p className="mb-2">
              I am
            </p>
            <p className="mb-2">
              Sumaiya
            </p>
            <p>Qureshi</p>
          </div>
        </div>
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
           <Image
            src="/downloa5.jpeg" 
            alt="About Me"
            width={600}
        height={400}
            className="rounded-lg shadow-lg w-3/4 md:w-full"
          /> 
        </div>

      </div>
    </div>
  );
};

export default Hero;
