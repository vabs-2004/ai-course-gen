import React, { useState, useEffect } from "react";
import { SignIn, SignUp, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const {isSignedIn} = useUser();
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log("isSignedIn:", isSignedIn);
    if(isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-300 to-blue-400">
      <div className="relative w-full max-w-2xl min-h-[500px] bg-white shadow-xl rounded-xl overflow-hidden flex">
        {/* Sign In */}
        <div
          className={`w-1/2 flex items-center justify-center transition-opacity duration-500 ${
            isSignUp ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <SignIn />
        </div>

        {/* Sign Up */}
        <div
          className={`w-1/2 flex items-center justify-center transition-opacity duration-500 ${
            isSignUp ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <SignUp />
        </div>

        {/* Toggle */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 text-white p-8 text-center transition-transform duration-500 transform z-10 ${
            isSignUp ? "-translate-x-full" : ""
          }`}
        >
          <h1 className="text-2xl font-bold">
            {isSignUp ? "Welcome Back!" : "Hello, Friend!"}
          </h1>
          <p className="mt-2 text-sm">
            {isSignUp ? "Sign in to access all features." : "Sign up to enjoy all features."}
          </p>
          <button
            className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg font-semibold"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>

      {/* Back Button */}
      <button
        className="absolute top-5 left-5 bg-white text-blue-500 px-4 py-2 rounded-md shadow-md"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>
    </div>
  );
};

export default AuthContainer;
