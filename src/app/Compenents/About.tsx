import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-32 px-4">
      {/* Section Heading */}
      <h2
        className="text-4xl md:text-5xl font-bold text-sky-500"
        data-aos="zoom-in-up"
      >
        About Me
      </h2>

      {/* Section Content */}
      <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div data-aos="fade-right" className="space-y-4">
          <p className="text-gray-300 leading-relaxed text-lg">
            Hello! I am a passionate developer with a keen interest in building
            responsive, user-friendly web applications. I specialize in HTML,
            CSS, TypeScript, and frameworks like Next.js. My goal is to create
            impactful digital experiences that solve real-world problems.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            With a focus on clean code and modern design principles, I love
            turning ideas into functional, beautiful interfaces. When Iam not
            coding, you might find me exploring new technologies or working on
            exciting personal projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
