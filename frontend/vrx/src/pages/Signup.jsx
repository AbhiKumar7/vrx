import React, { useState } from "react";
import useSignUp from "../hooks/useSignup";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [SignupData, setSignupData] = useState({
    email: "",
    password: "",
  });
  const { isPending, error, signupMutation } = useSignUp();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    signupMutation(SignupData);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
          <p className="text-gray-500">Create your account to continue</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmitForm}>
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Email Address
            </label>

            <input
              type="email"
              value={SignupData.email}
              onChange={(e) =>
                setSignupData({ ...SignupData, email: e.target.value })
              }
              placeholder="name@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={SignupData.password}
                onChange={(e) =>
                  setSignupData({ ...SignupData, password: e.target.value })
                }
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
         {error && (
  <div className="alert alert-error">
    <span>
      {error?.response?.data?.message || error.message}
    </span>
  </div>
)}
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {isPending ? (
              <>
                <p>Loading...</p>
              </>
            ) : (
              "Create Account"
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <span className="text-sm text-gray-500">Or continue with</span>

            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="border border-gray-300 rounded-lg py-3 hover:bg-gray-100"
            >
              Google
            </button>

            <button
              type="button"
              className="border border-gray-300 rounded-lg py-3 hover:bg-gray-100"
            >
              GitHub
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
