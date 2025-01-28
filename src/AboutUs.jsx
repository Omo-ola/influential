const AboutUs = () => {
  return (
    <section id="about-us" className="w-full max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex-1 bg-[#77CE15] text-white p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            At <strong>Influential Catering Services</strong>, we pride
            ourselves on delivering exceptional services that elevate every
            event and bring your visions to life. With a team of dedicated
            professionals, we combine creativity and attention to detail to
            provide unforgettable experiences tailored to your needs.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            From intimate gatherings to grand celebrations, we are passionate
            about making every moment count. With years of expertise and a
            customer-centric approach, we are committed to excellence and
            innovation.
          </p>
        </div>

        <div className="flex-1 bg-white text-gray-900 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to transform ordinary occasions into extraordinary
            experiences by providing top-quality services and creative
            solutions. Whether you&apos;re celebrating milestones, hosting
            business events, or exploring farming solutions, we are here to
            serve with integrity, passion, and professionalism.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We are dedicated to building lasting relationships with our clients
            by understanding their unique needs and exceeding expectations. Your
            satisfaction is at the heart of everything we do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
