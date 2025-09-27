import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo1 from "../assets/Naayatradelogo.png"; // ✅ Correct path

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Logo */}
        <a href="/">
          <img
            src={logo1}
            alt="Naayatrade Logo"
            className="mx-auto mb-6 w-32 h-auto hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* 404 Content */}
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a
          href="/"
          className="text-blue-500 underline hover:text-blue-700"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
