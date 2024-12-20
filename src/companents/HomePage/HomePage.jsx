import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../../assets/PHOTO-2019-11-12-22-08-045 1.svg";
import Image2 from "../../assets/image 5.svg";
import Image3 from "../../assets/Frame 45.svg";
import Image4 from "../../assets/Frame 47.svg";
import Image5 from "../../assets/Frame 46.svg";
import Image6 from "../../assets/Frame 46 (1).svg";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image1} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Sea Grill North Miami Beach</h2>
          <p className="text-gray-600 text-sm">
            3913 NE 163rd St<br />North Miami Beach, FL 33160
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>
      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image2} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Sea Grill of Merrick Park</h2>
          <p className="text-gray-600 text-sm">
          4250 Salzedo Street, <br />
          Suite 1425Coral Gables, FL 33146
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>

      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image3} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Villagio Restaurant & Bar</h2>
          <p className="text-gray-600 text-sm">
          360 San Lorenzo Avenue, Suite <br />
          1430Coral Gables, FL 33146-1865
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>

      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image4} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Carpaccio American Dream</h2>
          <p className="text-gray-600 text-sm">
          1 American Dream Way.<br />
          #F225East Rutherford, NJ 07073
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4 ">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>

      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image5} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Villagio Restaurant & Bar</h2>
          <p className="text-gray-600 text-sm">
          1760 Sawgrass Mills <br />
          CircleSunrise, FL 33323-3912
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>
      <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <img src={Image6} alt="" className="w-full h-48 object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-gray-800 text-lg font-bold">Villagio Restaurant & Bar</h2>
          <p className="text-gray-600 text-sm">
          344 Plaza Real, Suite 1433<br />
          Boca Raton, FL 33432-3937
          </p>
          <p className="text-gray-600 text-sm mt-1">11:30 AM - 11:00 PM</p>
        </div>
        <div className="flex justify-between items-center p-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded-lg text-sm">09:30</button>
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg text-sm cursor-not-allowed" disabled>
            10:15
          </button>
          <Link to="/about" className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
