import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-yellow-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Dosa Menu</Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-brown-700">Home</Link>
            </li>
            <li>
              <Link to="/menu" className="text-white hover:text-brown-700">Menu</Link>
            </li>
            <li>
              <Link to="/order" className="text-white hover:text-brown-700">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;