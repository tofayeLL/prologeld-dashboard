/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import preview from "@/assets/previews.jpg";

import logo from "@/assets/logo.png";

import { useLoginMutation } from "@/redux/api/authApi";
import { Alert, Spin } from "antd";
import { toast } from "sonner";
import { LoadingOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const customIcon = (
  <LoadingOutlined style={{ fontSize: 24, color: "#fff" }} spin />
);

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch<AppDispatch>();
  const route = useRouter();

  const validateForm = () => {
    let isValid = true;

    // Email validation
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await login({ body }).unwrap();
      console.log("login response", response);
      console.log(response?.result?.userInfo?.role);

      if (response.success) {
        toast.success(response.message || "Login successful!");

        // Set token expiration based on Remember Me checkbox
        const tokenExpiration = rememberMe ? 30 : 1; // 30 days if remembered, 1 day otherwise

        Cookies.set("token", response?.result?.accessToken, {
          expires: tokenExpiration,
        });
        Cookies.set("role", response?.result?.userInfo?.role, {
          expires: tokenExpiration,
        });

        // Store Remember Me preference for future use
        if (rememberMe) {
          Cookies.set("rememberMe", "true", { expires: 2 });
          Cookies.set("rememberedEmail", email, { expires: 2 });
        } else {
          Cookies.remove("rememberMe");
          Cookies.remove("rememberedEmail");
        }

        dispatch(setUser(response?.result));
        console.log("login response", response);
        console.log(response?.result?.accessToken);
        console.log(response?.result?.userInfo?.role);
        console.log(response?.result);
        route.push("/");
      }
    } catch (error: any) {
      console.error("An error occurred:", error);
    } finally {
      console.log("Execution completed.");
    }
  };

  // Load remembered email on component mount
  React.useEffect(() => {
    const rememberedEmail = Cookies.get("rememberedEmail");
    const isRemembered = Cookies.get("rememberMe") === "true";

    if (isRemembered && rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Ocean Background */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src={preview}
          alt="Fishing boat in blue ocean waters"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-xl ">
          {/* Logo and Brand */}
          <div className="flex items-center justify-start mb-4 px-6  xl:px-0">
            <Image
              src={logo}
              height={100}
              width={100}
              alt="Logo"
              className=""
              priority
            />
          </div>

          <div className="flex-grow"></div>

          {/* Login Form */}
          <div className="lg:space-y-10 space-y-6 lg:mt-20 my-4 lg:px-0 px-4">
            <div className="text-start">
              <h2 className="text-3xl font-bold text-[#1C2634]">Login</h2>
              <p className="lg:mt-5 mt-2 text-[#6C7278] font-medium">
                {"Let’s login into your account first"}
              </p>
            </div>

            <form onSubmit={handleLogin} className="lg:space-y-10 space-y-6">
              {/* Email Input */}
              <label htmlFor="email">Email</label>
              <div className="relative mt-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:bg-white transition-colors"
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 ml-2">{emailError}</p>
                )}
              </div>

              {/* Password Input */}
              <label htmlFor="Password">Password</label>
              <div className="relative mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-4 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
                {passwordError && (
                  <p className="text-red-500 text-xs mt-1 ml-2">
                    {passwordError}
                  </p>
                )}
              </div>
              {error && (
                <Alert
                  message={
                    (error as any)?.data?.message ||
                    (typeof error === "object" && "message" in error
                      ? (error as any).message
                      : "An error occurred")
                  }
                  type="error"
                  showIcon
                />
              )}

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 ${
                      rememberMe ? "bg-[#0D9488]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        rememberMe ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                  <span className="ml-3 text-sm text-gray-700">
                    Remember Me
                  </span>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#0D9488] hover:bg-[#0D9488] text-white font-semibold py-3 px-4 text-lg rounded-2xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#0D9488] focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    Logging <Spin indicator={customIcon} />
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </form>
          </div>

          {/* Divider */}
          <div className="relative lg:my-6 my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-gray-50 text-[#6C7278] font-medium">
                or
              </span>
            </div>
          </div>

          {/* Register Link */}
          <div className="text-center ">
            <span className="text-[#6C7278] font-medium">
              {"Don't have an account? "}
            </span>
          <Link href="/register" className="text-[#0D9488] font-semibold">
            <button
              type="button"
              className="text-[#0D9488] hover:underline font-bold ml-1 cursor-pointer"
            >
              Register Here
            </button>
          </Link>
          </div>

          <div className="flex-grow"></div>

          {/* Footer */}
          <div className="flex lg:flex-row flex-col lg:text-start text-center text-sm lg:mt-20 mt-4">
            <p className="text-[#6C7278] font-medium ">
              © 2025 Prologeld. All rights reserved.
            </p>

            <div className="flex justify-center space-y-2">
              <p className="lg:ml-16 text-[#0D9488]">Terms & Condition</p>
              <span className="ml-2 text-gray-400">|</span>
              <p className="lg:ml-2 ml-2 text-[#0D9488]">Privacy & Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
