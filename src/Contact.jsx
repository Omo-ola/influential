const Contact = () => {
  return (
    <section id="contact" className="w-full max-w-6xl">
      <div className="bg-[#77CE15] text-white p-8 flex-[3] rounded-2xl">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <p className="flex items-center mb-2">
          <span className="mr-2">📍</span> Mosafejo Kelebe, Osogbo , Osun State
        </p>
        <p className="flex items-center mb-2">
          <span className="mr-2">📞</span> +2347069054024
        </p>
        <p className="flex items-center mb-2">
          <span className="mr-2">📞</span> +2348084941650
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
    </section>
  );
};

export default Contact;
