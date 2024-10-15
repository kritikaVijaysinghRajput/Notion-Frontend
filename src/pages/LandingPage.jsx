import React from "react";
import { heroimg, feature1, feature2, feature3 } from "../assets/index.js";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Work feels better here.
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6">
              Write, plan, and organize in our powered workspace for every team.
            </p>
            <div className="space-x-4">
              <Link
                to="/login"
                className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-500 transition ease-in-out duration-300"
              >
                Get started free
              </Link>
              <Link
                to="/signup"
                className="border border-gray-600 text-gray-600 py-2 px-6 rounded hover:bg-gray-100 transition ease-in-out duration-300"
              >
                Try a demo
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src={heroimg}
              alt="heroimg"
              className="w-full h-auto transform hover:scale-105 transition duration-500 ease-in-out"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4">
              Discover the key features that make us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-2xl p-6 transform hover:scale-105 transition duration-500">
              <img
                src={feature1}
                alt="Feature 1"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">
                Collaborative Workspace
              </h3>
              <p className="text-gray-600">
                Seamlessly collaborate with your team in real-time with our
                AI-powered tools.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 transform hover:scale-105 transition duration-500">
              <img
                src={feature2}
                alt="Feature 2"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Task Management</h3>
              <p className="text-gray-600">
                Plan, assign, and manage tasks efficiently, keeping your
                projects on track.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-2xl p-6 transform hover:scale-105 transition duration-500">
              <img
                src={feature3}
                alt="Feature 3"
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">Smart Integrations</h3>
              <p className="text-gray-600">
                Integrate with your favorite tools and automate workflows for
                better productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
