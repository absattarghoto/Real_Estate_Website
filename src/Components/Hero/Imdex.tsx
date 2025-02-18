const Hero = () => {
    return (
      <section className="bg-[#2B2B2B] pl-[5%] pt-12 md:pt-24 px-4 font-poppins">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20">
          {/* Text Content */}
          <div className="md:w-1/2 pt-6 flex flex-col space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug text-white">
              We Provide<br className="hidden md:block" /> 
              Architectural Design<br className="hidden md:block" />
              and Construction
            </h1>
  
            <p className="text-base md:text-lg text-[#C4C4C4] leading-relaxed md:leading-loose">
              More than 100 building and housing projects that we have built. 
              The building owner chose us over other contractors in Jakarta, 
              because our work is different.
            </p>
  
            <button className="bg-[#0A72AD] text-white px-8 py-4 md:px-6 md:py-3 rounded-lg hover:bg-[#00659E] transition-colors duration-300 w-[196px] text-lg">
              Discover More
            </button>
          </div>
  
          {/* Image Container */}
          <div className="md:w-1/2 w-full max-w-2xl md:max-w-none">
            <img 
              src="Images/Hero.png"
              alt="Architecture Projects"
              className="w-full h-auto object-cover rounded-lg shadow-xl md:max-h-[600px]"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;