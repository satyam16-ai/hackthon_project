import React from 'react';
import img1 from '../assets/image1.jpg';
import img2 from '../assets/image2.jpg';
import img3 from '../assets/image3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FaHandsHelping, FaHeartbeat, FaBook, FaTree, FaGraduationCap } from 'react-icons/fa'; // Import icons

const Hero = () => {
  // Slick Slider Settings for autoplay and smooth transitions
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Auto-change every 3 seconds
    pauseOnHover: false,
    arrows: false, // Hide arrows for a cleaner look
  };

  return (
    <section className="relative bg-green-500 text-white py-12 px-4 overflow-hidden">
      {/* Animated Icons */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <FaHandsHelping className="absolute text-white opacity-20 animate-float" style={{ top: '10%', left: '20%', fontSize: '4rem' }} />
        <FaHeartbeat className="absolute text-white opacity-20 animate-float" style={{ top: '30%', left: '90%', fontSize: '4rem' }} />
        <FaBook className="absolute text-white opacity-10 animate-float" style={{ top: '50%', left: '40%', fontSize: '4rem' }} />
        <FaTree className="absolute text-white opacity-10 animate-float" style={{ top: '70%', left: '10%', fontSize: '4rem' }} />
        <FaGraduationCap className="absolute text-white opacity-10 animate-float" style={{ top: '80%', left: '90%', fontSize: '4rem' }} />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8">
        
        {/* Text Section */}
        <motion.div 
          className="md:w-1/2 w-full text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-4">
            <Typewriter
              words={['Empowering Change Through Transparent Donations']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg mb-6">
            Helping those who need it most, transparently and effectively.
          </p>
          <a
            href="#donate"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
          >
            Start Donating Now
          </a>
        </motion.div>

        {/* Image Slider Section */}
        <motion.div 
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Slider {...settings} className="w-full">
            {/* Slide 1 */}
            <div>
              <img
                src={img1}
                alt="Volunteers Helping"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            {/* Slide 2 */}
            <div>
              <img
                src={img2}
                alt="Teamwork in Action"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            {/* Slide 3 */}
            <div>
              <img
                src={img3}
                alt="Volunteers Assisting"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;