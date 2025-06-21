const Packages = () => {
  return (
    <section
      id="packages"
      className="p-8 bg-gray-100 flex flex-col items-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Simple Gather Package */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="/abu-2.jpg"
            alt="Simple Gather Package"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#77CE15]">
            Simple Gather (Free Package)
          </h3>
          <p className="text-gray-700 mt-2">
            Ideal for small gatherings that are strictly by invitation (IV).
          </p>
          {/* <ul className="text-gray-600 text-left mt-2">
            <li>&bull; 50 Access Cards without QR codes.</li>
            <li>&bull; 20 Access Cards with QR codes.</li>
          </ul> */}
          <p className="mt-2 font-semibold">
            Best For: House parties, family meetups, small reunions.
          </p>
        </div>

        {/* Event Essential Package */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="/abu-7.jpg"
            alt="Event Essential Package"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#77CE15]">
            Event Essential Package
          </h3>
          <p className="text-gray-700 mt-2">
            Ideal for events requiring registration and a clear headcount.
          </p>
          <ul className="text-gray-600 text-left mt-2">
            {/* <li>&bull; Unlimited Invitations without QR codes.</li> */}
            <li>&bull; Guests are counted for headcount.</li>
            <li>&bull; Helps the guests feel a sense of belonging.</li>
          </ul>
          <p className="mt-2 font-semibold">
            Best For: Corporate events, seminars, large celebrations.
          </p>
        </div>

        {/* Elite Access Package */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <img
            src="/abu-6.jpg"
            alt="Elite Access Package"
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-[#77CE15]">
            Elite Access Package (Premium)
          </h3>
          <p className="text-gray-700 mt-2">
            Ideal for luxurious, well-organized events.
          </p>
          <ul className="text-gray-600 text-left mt-2">
            <li>&bull; Price based on planned guests.</li>
            {/* <li>&bull; QR-coded access cards for scanning.</li> */}
            <li>&bull; Admin rights for managing guests.</li>
            <li>&bull; Seat reservations for guests.</li>
          </ul>
          <p className="mt-2 font-semibold">
            Best For: Exclusive events, galas, weddings, private luxury parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
