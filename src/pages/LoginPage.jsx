import React from "react";
import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignIn path="/login" routing="path" />
    </div>
  );
};

export default LoginPage;
