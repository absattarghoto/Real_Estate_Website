import React from 'react';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      image: "/Images/Project_1.png",
      alt: "Industrial Service Project",
    },
    {
      image: "/Images/Project_3.png",
      alt: "Residential Service Project",
    },
    {
      image: "/Images/Project_2.png",
      alt: "Commercial Service Project",
    },
    {
      image: "/Images/Project_4.png",
      alt: "Corporate Service Project",
    },
  ];

  return (
    <section className="py-14">
      {/* Header Section */}
      <div className="container mx-auto px-[5%] mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Our collection
          <br />
          best project
        </h1>
      </div>

      {/* Project Gallery */}
      <div className="container mx-auto px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;