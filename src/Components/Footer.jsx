import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
          {/* Left Section: Company Information */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Our Company</h2>
            <p className="text-gray-400">
              We provide a modern and AI-powered workspace to help teams write,
              plan, and organize better.
            </p>
          </div>

          {/* Middle Section: Links */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Information */}
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">Email: support@ourcompany.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">
              Address: 123 AI Street, Tech City, USA
            </p>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Our Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
