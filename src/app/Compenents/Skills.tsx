import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Description Section */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-sky-500" data-aos="zoom-in-up">Skills</h2>
          <p className="text-gray-300 pt-4 text-lg leading-relaxed">
            I am a junior front-end developer skilled in HTML, CSS, and TypeScript. 
            I have experience working with modern frameworks like Next.js and possess 
            the ability to provide creative and practical solutions in web development. 
            My recent project, <span className="text-sky-500 font-semibold">Milestone</span>, 
            is an excellent demonstration of using web technologies.
          </p>
        </div>

        {/* Skills List Section */}
        <div data-aos="zoom-in-up" className="pt-8">
          {/* Flex container for skills */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {/* Skill with hover effect */}
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              HTML
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              CSS
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              TypeScript
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              Next.js
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              React.js
            </div>
            <div className="text-2xl sm:text-3xl font-semibold text-gray-300 hover:text-sky-500 transition-colors duration-300 cursor-pointer">
              MS Office
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
