import React from 'react';

const Achievements = () => {
  return (
    <div className="doctor-message bg-cover bg-fixed" style={{ backgroundImage: 'url("/Images/slider/slide-02.jpg")' }}>
      <div className="inner-lay bg-black bg-opacity-80 p-12 text-white">
        <div className="container mx-auto">

          <div className="row session-title text-center mb-8">
            <h2 className="text-4xl font-bold">Our Achievements in Numbers</h2>
            <p className="mt-4 text-lg">
              We can talk for a long time about advantages of our Dental clinic before other medical treatment facilities.
              But you can read the following facts in order to make sure of all pluses of our clinic:
            </p>
          </div>


          <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="text-center p-4 rounded shadow-md">
                  <h3 className="text-4xl lg:text-6xl font-bold border-b border-gray-400 pb-2 mb-4">12+</h3>
                  <span className="text-lg">YEARS OF EXPERIENCE</span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="text-center p-4rounded shadow-md">
                  <h3 className="text-4xl lg:text-6xl font-bold border-b border-gray-400 pb-2 mb-4">1812+</h3>
                  <span className="text-lg">HAPPY CHILDREN</span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="text-center p-4 rounded shadow-md">
                  <h3 className="text-4xl lg:text-6xl font-bold border-b border-gray-400 pb-2 mb-4">52+</h3>
                  <span className="text-lg">EVENTS</span>
                </div>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
                <div className="text-center p-4 rounded shadow-md">
                  <h3 className="text-4xl lg:text-6xl font-bold border-b border-gray-400 pb-2 mb-4">48+</h3>
                  <span className="text-lg">FUNDS RAISED</span>
                </div>
              </div>
        </div>




        </div>
      </div>
    </div>
  );
};

export default Achievements;
