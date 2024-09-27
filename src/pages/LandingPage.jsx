import React from "react";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl font-bold mb-6">Work feels better here.</h1>
          <p className="text-lg text-gray-600 mb-8">
            Write, plan, and organize in Notion, the AI-powered workspace for
            every team.
          </p>

          {/* Call to action buttons */}
          <div className="space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
              Get Notion Free
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Request a Demo
            </button>
          </div>

          {/* Trusted By Section */}
          <div className="mt-12">
            <p className="text-gray-500">Trusted by teams at:</p>
            <div className="flex justify-center mt-4 space-x-6">
              {/* Add logos here */}
              <span className="text-gray-500">Toyota</span>
              <span className="text-gray-500">Figma</span>
              <span className="text-gray-500">Spotify</span>
              <span className="text-gray-500">Discord</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
