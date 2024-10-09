import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="bg-green-500 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-8">
        
        {/* Text Section */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Empowering Change Through Transparent Donations
          </h1>
          <p className="text-lg mb-6">
            Helping those who need it most, transparently and effectively.
          </p>
          <a
            href="#donate"
            className="bg-white text-green-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
          >
            Start Donating Now
          </a>
        </div>

        {/* Image Slider Section */}
        <div className="md:w-1/2 w-full flex justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
