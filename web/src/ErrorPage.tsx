import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
        <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-gray-600">Sorry, the page you are looking for is currently being built. 😔 - Dev</p>
        <div className="flex flex-row gap-7 justify-center">
          <button
            onClick={() => navigate('/')}
            className="hover:cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition-colors duration-200"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate('/map')}
            className="hover:cursor-pointer px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow transition-colors duration-200"
          >
            Go to Map
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
