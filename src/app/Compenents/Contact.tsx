import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdDriveFileRenameOutline } from "react-icons/md";
const Contact = () => {
  return (
    <div id="contact" className="container mx-auto pt-32 px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-sky-500" data-aos="zoom-in-up">
            Information
          </h2>
          <p
            className="text-gray-300 text-lg leading-relaxed"
          >
           I am a passionate and dedicated professional with a keen interest in [your field/skills]. With a focus on learning and growth, I strive to deliver quality work while exploring innovative ideas. My goal is to contribute effectively, solve problems creatively, and make a positive impact through my skills and experiences.
          </p>
          <div className="flex gap-3 items-center">
          <MdDriveFileRenameOutline size={28} className="text-accent"/>
            <span>Sumaiya Qureshi</span>
          </div>
          <div className="flex gap-3 items-center" >
            <MdMarkEmailRead size={28} className="text-accent" />
            <span>sshushez@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaPhoneVolume size={28} className="text-accent" />
            <span>(+92) 000-0000</span>
          </div>
        </div>
        </div>
      </div>
    
  );
};

export default Contact;
