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
      {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
    
        <div className="p-8 flex-[7]">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Send us a message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="border p-3 rounded w-full"
              />
              <input
                type="email"
                placeholder="Your email"
                className="border p-3 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="+2349054057693"
                className="border p-3 rounded w-full"
              />
              <select className="border p-3 rounded w-full">
                <option value="">Select a Package</option>
                <option value="wedding">Wedding Anniversary</option>
                <option value="housewarming">Housewarming</option>
                <option value="fish-farming">Fish Farming</option>
                <option value="business-events">Business Events</option>
                <option value="ceremonies">Ceremonies</option>
                <option value="chicken-rearing">Chicken Rearing</option>
                <option value="farming">Farming Generally</option>
                <option value="celebrations">Celebrations</option>
              </select>
            </div>

            <textarea
              placeholder="Write your message"
              className="border p-3 rounded w-full h-32"
            ></textarea>
            <button className="bg-[#77CE15] cursor-pointer text-white p-3 rounded w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
        <div className="bg-[#77CE15] text-white p-8 flex-[3]">
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
      </div> */}
    </section>
  );
};

export default Contact;
