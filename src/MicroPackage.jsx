const MicroPackage = () => {
  const packages = [
    {
      title: "🔥 Classic Barbecue",
      img: "/abu-11.jpg",
      desc: "Enjoy a well-marinated barbecue experience, grilled to perfection with a mix of local and exotic spices.",
      bestFor: "Casual outings, house parties, weekend relaxation.",
    },
    {
      title: "🍗 Chicken Delight",
      img: "/abu-10.jpg",
      desc: "Tender and juicy chicken barbecue, seasoned to bring out the best flavors and cooked to golden perfection.",
      bestFor: "Corporate luncheons, wedding receptions, birthday dinners.",
    },
    {
      title: "🥩 Premium Meat Grill",
      img: "/abu-9.jpg",
      desc: "A rich combination of assorted meats grilled with a unique blend of natural spices for an unforgettable taste.",
      bestFor: "VIP events, exclusive celebrations, high-end private parties.",
    },
    {
      title: "Consultancy",
      img: "/abu_2.jpg",
      desc: "Ideal for professional information on setting up of hotels,restaurants,fast foods outlets abd agro-businesses.",
      bestFor: "Hotel ,Agro-catering biz.",
    },
    {
      title: "Catering Academics",
      img: "/abu_1.jpg",
      desc: "Ideal for SIWES and IT students and diploma in short course programs",
      // bestFor: "VIP events, exclusive celebrations, high-end private parties.",
    },
  ];

  return (
    <section
      id="microPackages"
      className="p-8 bg-gray-100 flex flex-col items-center"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {packages.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-[#77CE15]">
              {item.title}
            </h3>
            <p className="text-gray-700 mt-2">{item.desc}</p>
            {item.bestFor && (
              <p className="mt-2 font-semibold text-gray-900">
                Best For: {item.bestFor}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MicroPackage;
