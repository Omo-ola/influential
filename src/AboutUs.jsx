import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const AboutUs = () => {
  return (
    <section id="about-us" className="w-full flex justify-center py-10">
      <div className="w-[20rem] md:w-[50%] lg:w-[90%] max-w-6xl">
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Autoplay]}
          loop={true}
          className="px-2"
        >
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg px-2 py-6 md:p-8 text-center h-full flex flex-col">
              <h2 className="text-xl md:text-4xl font-semibold text-[#77CE15]">
                Who We Are
              </h2>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700 flex-grow">
                At <strong>Influential Catering Services</strong>, we pride
                ourselves on delivering exceptional services that elevate every
                event and bring your visions to life.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700">
                From intimate gatherings to grand celebrations, we are committed
                to excellence, creativity, professionalism, and innovation.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg px-2 py-6 md:p-8 text-center h-full flex flex-col">
              <h2 className="text-xl md:text-4xl font-semibold text-[#77CE15]">
                Our Mission
              </h2>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700 flex-grow">
                Our mission is to transform ordinary occasions into
                extraordinary experiences by providing top-quality services and
                creative solutions.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700">
                We are dedicated to building lasting relationships with our
                clients by understanding their unique needs and exceeding
                expectations.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg px-2 py-6 md:p-8 text-center h-full flex flex-col">
              <h2 className="text-xl md:text-4xl font-semibold text-[#77CE15]">
                Our Vision
              </h2>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700 flex-grow">
                To be proficient Agroprenuers that prioritize growing and
                developing hospitality concepts using minimal resources to
                produce world-class, high-quality products.
              </p>
              <p className="text-base md:text-lg leading-relaxed mt-4 text-gray-700">
                We bring passion, creativity, and professionalism to every
                event. Your satisfaction is our priority!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default AboutUs;
