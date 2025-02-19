const AboutUs = () => {
  return (
    <section className="py-12 px-[5%] lg:py-20 bg-[#F6F6F6]">
      <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-12 max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative group">
          <img src="Images/Mask Group.png" alt="Our Architecture Team" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-11 leading-tight">
            Meet and Connect with Top Architecture Experts
          </h1>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We deliver exceptional architectural services that transcend
            physical boundaries. Our intangible solutions are meticulously
            crafted to satisfy your unique needs, focusing on seamless
            interactions and meaningful collaborations between our experts and
            clients.
          </p>

          {/* Buttons Container */}
          <div className="flex gap-4">
            {/* Button */}
            <button className="w-full sm:w-[181px] h-[64px] bg-[#0A72AD] text-white font-semibold rounded-lg shadow-lg hover:bg-[#085a8a] flex items-center justify-center">
              Meet Our Team
            </button>

            {/* Link */}
            <a
             
              className="relative inline-flex items-center justify-start w-full sm:w-[181px] h-[64px] py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#2b2b2b] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#2b2b2b] group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-[#0A72AD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-[#0A72AD]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Learn More
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
