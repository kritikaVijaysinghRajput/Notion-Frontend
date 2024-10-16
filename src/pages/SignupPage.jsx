import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp path="/signup" routing="path" />
    </div>
  );
};

export default SignupPage;
