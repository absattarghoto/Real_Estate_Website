import React from 'react';

const NewsUp: React.FC = () => {
  const NewsCards = [
    {
      image: "Images/Mask Group (2).png",
      alt: "Industrial Service",
      title: "Elements of Content in Epoxy Paint ",
      description:
        "Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...",
    },
    {
      image: "Images/Mask Group (3).png",
      alt: "Residential Service",
      title: "5 Right Steps in Warehouse Planning and Construction",
      description:
        "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully.When the planning is done properly, the construction is..",
    },
    {
      image: "Images/Mask Group (4).png",
      alt: "Commercial Service",
      title: "The Right Solution to Build a Sturdy Type 45 House",
      description:
        "Having a solid home is certainly everyone'  s dream. How not, the house is a place where the residents can rest and take shelter from thebad weather..",
    },
  ];

  return (
    <div className="bg-[#F6F6F6] py-14">
      {/* Header Section */}
      <div >
        
          <h1 className=" lg:pl-11 md:pl-[5%] text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          News & Update
          </h1>
        
        
      </div>

      {/* Services Cards Section */}
      <div className="container mx-auto py-8 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NewsCards.map((card, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img src={card.image} alt={card.alt} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsUp;
