const ServicesSection = () => {
  return (
    <section
      id="services"
      className="p-8 bg-gray-100 flex flex-col items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl text-center">
        {/* Wedding Anniversary */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">💍</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Wedding Anniversary
          </h3>
          <p className="text-gray-600 mt-2">
            Celebrate your special day with an unforgettable event planned to
            perfection.
          </p>
        </div>

        {/* Housewarming */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🏡</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Housewarming
          </h3>
          <p className="text-gray-600 mt-2">
            Welcome friends and family into your new home with a warm and joyful
            celebration.
          </p>
        </div>

        {/* Fish Farming */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🐟</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Fish Farming
          </h3>
          <p className="text-gray-600 mt-2">
            Expert guidance and resources for setting up and managing a
            profitable fish farm.
          </p>
        </div>

        {/* Business Events */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">📈</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Business Events
          </h3>
          <p className="text-gray-600 mt-2">
            Professional planning and execution of corporate meetings, launches,
            and networking events.
          </p>
        </div>

        {/* Ceremonies */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🎊</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Ceremonies
          </h3>
          <p className="text-gray-600 mt-2">
            From graduations to naming ceremonies, we create meaningful and
            memorable experiences.
          </p>
        </div>

        {/* Chicken Rearing */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🐔</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Chicken Rearing
          </h3>
          <p className="text-gray-600 mt-2">
            Comprehensive support for starting and managing a successful poultry
            business.
          </p>
        </div>

        {/* Farming Generally */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🌱</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Farming Generally
          </h3>
          <p className="text-gray-600 mt-2">
            Resources, training, and consultancy for various farming practices
            and agribusiness ventures.
          </p>
        </div>

        {/* Celebrations */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-yellow-500 text-4xl">🎂</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            Celebrations
          </h3>
          <p className="text-gray-600 mt-2">
            From birthdays to reunions, we bring joy and excitement to every
            celebration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
