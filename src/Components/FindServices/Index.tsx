const FindServices = () => {
    return (
      <>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 p-6 md:p-12">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                What Make Us
                <br />
                Different?
              </h1>
            </div>
            <div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Check out our best service you can possibly orders in building
                your company and don't forget to ask via our email or our customer
                service if you are interested in using our services
              </p>
            </div>
          </div>
          <div className="container mx-auto py-8 px-[5%]">
            {/* Responsive grid: 1 column on mobile, 3 columns on medium screens and up */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Card 1: Industrial */}
              <div className=" rounded-lg  overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img
                  src="Images/Group 14.png"
                  alt="Industrial Service"
                  className="w-[135px] px-6 "
                />
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">Experienced</h3>
                  <p className="text-gray-600">
                    Our experience of 25 years of building and making achievements
                    in the world of development
                  </p>
                </div>
              </div>
  
              {/* Card 2: Residential */}
              <div className=" rounded-lg  overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img
                  src="Images/Group 15.png"
                  alt="Industrial Service"
                  className="w-[135px] px-6 "
                />
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">competitive price</h3>
                  <p className="text-gray-600">
                    The prices we offer you are very competitive without reducing
                    the quality of the company's work in the slightest
                  </p>
                </div>
              </div>
  
              {/* Card 3: Commercial */}
              <div className=" rounded-lg  overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img
                  src="Images/Group 15.png"
                  alt="Industrial Service"
                  className="w-[135px] px-6 "
                />
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">On Time</h3>
                  <p className="text-gray-600">
                    We prioritize the quality of our work and finish it on tim
                  </p>
                </div>
              </div>
  
              {/* Card 3: Commercial */}
              <div className=" rounded-lg  overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <img
                  src="Images/Group 14.png"
                  alt="Industrial Service"
                  className="w-[135px] px-6 "
                />
                <div className="p-6">
                  <h3 className="font-bold text-2xl mb-2">Best Materials</h3>
                  <p className="text-gray-600">
                    The material determines the building itself so we recommend
                    that you use the best & quality materials in its class.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default FindServices;
  