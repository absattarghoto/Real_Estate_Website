import React from 'react';

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, alt, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <img src={image} alt={alt} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const serviceCards = [
    {
      image: "Images/Services_card_ing_1.png",
      alt: "Industrial Service",
      title: "Industrial",
      description:
        "Industrial development is our main line of business. We do factory construction, warehouse projects, and more.",
    },
    {
      image: "Images/Services_card_ing_1.png",
      alt: "Residential Service",
      title: "Residential",
      description:
        "Residential development is the beginning that has shaped us. Our projects include houses & apartments.",
    },
    {
      image: "Images/Services_card_ing_2.png",
      alt: "Commercial Service",
      title: "Commercial",
      description:
        "Our commercial projects include showrooms, supermalls, and office buildings, built with expertise and precision.",
    },
  ];

  return (
    <div className="bg-[#F6F6F6]">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 p-6 md:p-12">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
            Over Excellent <br /> Services
          </h1>
        </div>
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Services are essentially intangible activities which are separately identifiable and provide satisfaction of wants.
            Their purchase does not result in the ownership of anything physical. Services involve an interaction to be realised
            between the service provider and the consumer.
          </p>
        </div>
      </div>

      {/* Services Cards Section */}
      <div className="container mx-auto py-8 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCards.map((card, index) => (
            <ServiceCard
              key={index}
              image={card.image}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
