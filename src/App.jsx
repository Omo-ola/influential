import { useEffect, useState } from "react";
import Packages from "./Packages";
import Services from "./Service";
// import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import Gallery from "./Gallery";
import MicroPackage from "./MicroPackage";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
        setMenuOpen(false);
      });
    });
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#77CE15] bg-opacity-50 text-white py-4 px-8 flex justify-between items-center z-50">
      <h1 className="text-4xl font-bold mr-8">
        Influential<span className="text-yellow-400">.</span>
      </h1>

      <div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`md:flex md:space-x-6 md:items-center md:static absolute top-16 left-0 w-full bg-[#77CE15] text-white flex-col md:flex-row space-y-4 md:space-y-0 md:ml-auto p-4 pl-10 md:p-0 md:bg-transparent ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About us
            </a>
          </li>
          <li>
            <a href="#packages" className="hover:text-yellow-400">
              Packages
            </a>
          </li>
          <li>
            <a href="#microPackages" className="hover:text-yellow-400">
              Special
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-yellow-400">
              Gallery
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a
              href="#reservations"
              className=" text-lg text-white hover:text-yellow-400 md:ml-12"
            >
              Reservations
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const HeroSection = () => {
//   return (
//     <section
//       id="home"
//       className="relative md:h-[80vh] h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/abu-16.jpg')" }}
//     >
//       <div className="absolute inset-0 opacity-90"></div>
//       <div className="relative top-10 z-10 md:flex justify-between w-[90%] gap-10">
//         <div className="md:text-left max-w-2xl flex justify-center items-center">
//           <h2 className="text-5xl md:text-7xl font-semibold text-black">
//             Influential Event Planning and Agro-Catering Services
//             <span className="text-yellow-400">.</span>
//           </h2>
//         </div>
//         <div className="flex justify-center items-center">
//           <div className="w-[20rem] h-[20rem] rounded-2xl">
//             <img src="/BgLogo.png" alt="company logo" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };




const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative md:h-[80vh] h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/abu-16.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* <div className="relative top-10 z-10 md:flex justify-between w-[90%] gap-10"> */}
      <div className="relative top-10 z-10 md:flex justify-center w-[90%] gap-10">
        <div className="md:text-left max-w-4xl flex justify-center items-center">
          <h2 className="text-5xl md:text-7xl font-semibold text-white">
            Influential Event Planning and Agro-Catering Services
            <span className="text-yellow-400">.</span>
          </h2>
        </div>
        {/* <div className="flex justify-center items-center">
          <div className="w-[20rem] h-[20rem] rounded-2xl">
            <img src="/BgLogo.png" alt="company logo" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

const Section = (prop) => {
  const { id, title, logo, children } = prop;
  return (
    <section
      id={id}
      className="min-h-screen flex items-center flex-col justify-center p-8 bg-gray-100"
    >
      <div className="text-center mb-8  max-w-3xl">
        <div className="text-gray-700 text-5xl mb-2">{logo}</div>
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <div className="w-16 border-t-2 border-[#77CE15] mt-2 mx-auto"></div>
      </div>

      <div>{children}</div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section id="about" title="About us" logo="ℹ️">
        <AboutUs />
      </Section>
      <Section id="packages" title="Our Packages" logo="🎁">
        <Packages />
      </Section>
      <Section id="microPackages" title="Our Special Packages" logo="🍖">
        <MicroPackage />
      </Section>
      <Section id="services" title="Our Services" logo="🎉">
        <Services />
      </Section>
      <Section id="gallery" title="Our Gallery" logo="📸">
        <Gallery />
      </Section>

      <Section id="reservations" title="Make a Reservation" logo="📅">
        {/* <Contact /> */}
        <div className="bg-[#77CE15] text-white p-8 flex-[3] rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
          <p className="flex items-center mb-2">
            <span className="mr-2">📍</span> Mosafejo Kelebe, Osogbo , Osun
            State
          </p>
          <p className="flex items-center mb-2">
            <span className="mr-2">📞</span> +2347069054024
          </p>
          <p className="flex items-center mb-2">
            <span className="mr-2">📞</span> +2348081941650
          </p>
          <p className="flex items-center mb-2">
            <span className="mr-2">📧</span>
            <a
              href="mailto:influentialcateringservices@gmail.com"
              className="underline hover:text-blue-300"
            >
              influentialcateringservices@gmail.com
            </a>
          </p>
          <p className="flex items-center">
            <span className="mr-2">💬</span>
            <a
              href="https://wa.me/2347069054024?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-300"
            >
              Message us on WhatsApp
            </a>
          </p>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default App;
