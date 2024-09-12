// components/PageNav.js

import { FaHome, FaAngleDoubleRight } from 'react-icons/fa';

export default function PageNav() {
  return (
    <div className="page-nav no-margin row bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="row flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold mb-2">About People Care</h2>
          <ul className="flex items-center space-x-2 text-gray-600">
            <li className="flex items-center">
              <FaHome className="text-xl" />
              <a href="#" className="ml-1 text-blue-500 hover:text-blue-700">Home</a>
            </li>
            <li className="flex items-center">
              <FaAngleDoubleRight className="mx-2 text-xl" />
              <span>About Us</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
