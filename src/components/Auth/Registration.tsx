/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import preview from "@/assets/logo2.png";

import logo from "@/assets/logo.png";

import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
  };

  return (
    <div className="min-h-screen flex flex-row-reverse">
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
      <div className="w-full lg:w-1/2 flex  justify-center items-center">
        <div className="w-full max-w-xl ">
          {/* Logo and Brand */}
          <div className="flex items-center justify-start mb-3 px-6  xl:px-0">
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
            {/* Back Arrow */}
            <Link href={"/login"}>
              <button className="mb-4 flex items-center text-foreground cursor-pointer">
                <ArrowLeft className="h-6 w-6" />
              </button>
            </Link>

            {/* Header */}
            <div className="mb-4">
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                Register
              </h1>
              <p className="text-gray-900">Lets create new account</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm text-gray-900">
                  Your name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 border border-gray-300 bg-background"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm text-gray-900">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-12 border border-gray-300 bg-background"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm text-gray-900">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(+12)435-1213-232"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-12 border border-gray-300 bg-background"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-900">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="h-12 border border-gray-300 bg-background pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Repeat Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="repeatPassword"
                  className="text-sm text-gray-900"
                >
                  Repeat Password
                </Label>
                <div className="relative">
                  <Input
                    id="repeatPassword"
                    type={showRepeatPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.repeatPassword}
                    onChange={(e) =>
                      handleInputChange("repeatPassword", e.target.value)
                    }
                    className="h-12 border border-gray-300 bg-background pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 hover:text-foreground"
                  >
                    {showRepeatPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-teal-600 text-lg hover:bg-teal-700 text-white font-medium mt-8"
              >
                Register
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

          {/* login Link */}
          <div className="text-center ">
            <span className="text-[#6C7278] font-medium">
              {"Already have an account?"}
            </span>
            <Link href="/login" className="text-[#0D9488] font-semibold ml-1">
              Login Here
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
