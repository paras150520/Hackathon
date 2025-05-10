import React from "react";

function SecondSection() {
  return (
    <>
      <div className="h-[100vh] w-full bg-white flex">
        {/* Left Section with Image */}
        <div className="w-[40%] bg-green-600 bg-[url('sumit-govil-P4qmc5-x_M8-unsplash.jpg')] bg-cover bg-center m-4"></div>

        {/* Right Section with Text */}
        <div className="w-[60%] bg-white flex items-center justify-center py-10 px-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-4xl font-semibold text-black">About Us</p>
            <p className="text-3xl font-semibold text-gray-800">
              "Our Mission: Unveiling the Hidden Beauty Around You"
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              "At DiscoverMycity, we believe that the beauty of a city isn’t
              just in its popular landmarks. It’s in the hidden corners, secret
              gardens, and peaceful spots waiting to be discovered. Our mission is
              to connect you with these forgotten gems, giving you a fresh perspective
              on your own city."
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Our team is passionate about exploring and discovering the undiscovered. 
              We travel far and wide to find hidden gems and showcase them for you to explore. 
              Whether it's a serene garden or a tucked-away waterfall, we bring you closer to nature’s untouched beauty."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
