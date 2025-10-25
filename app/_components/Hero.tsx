"use client";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import {
  ArrowUp,
  HomeIcon,
  ImagePlus,
  Key,
  LayoutDashboard,
  User,
} from "lucide-react";
import React, { useState } from "react";

const suggestions = [
  {
    label: "Dashboard",
    prompt:
      "Create an analytics dashboard to track customers and revenue data for a SaaS",
    icon: LayoutDashboard,
  },
  {
    label: "SignUp Form",
    prompt:
      "Create a modern signup form with email/password fields, Google and GitHub login options, and terms checkbox",
    icon: Key,
  },
  {
    label: "Hero",
    prompt:
      "Create a modern Header and centered hero section for a productivity SaaS. Include a badge for feature announcement, a title with subtle gradient effect, subtitle, CTA, small social proof and an image",
    icon: HomeIcon,
  },
  {
    label: "User Profile Card",
    prompt:
      "Create a modern user profile card component for a social media website",
    icon: User,
  },
];

const Hero = () => {
  const [userInput, setUserInput] = useState<string>();
  return (
    <div className="flex flex-col items-center h-[80vh] justify-center">
      {/* Header & Description */}
      <h2 className="font-bold text-5xl">What Should We Design</h2>
      <p className="mt-2 text-xl text-gray-500">
        Generate, Edit and Explore design with AI, Export code as well
      </p>

      {/* input box */}
      <div className="border w-full max-w-2xl rounded-2xl p-5 mt-5">
        <textarea
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
          placeholder="Describe your page design"
          className="w-full h-24 focus:outline-none focus:ring-0 resize-none"
        />
        <div className="flex justify-between items-center">
          <Button variant={"ghost"}>
            <ImagePlus />
          </Button>
          <SignInButton mode="modal" forceRedirectUrl={"/workspace"}>
            <Button disabled={!userInput} size={"icon"}>
              <ArrowUp />
            </Button>
          </SignInButton>
        </div>
      </div>

      {/* suggestion list */}
      <div className="mt-4 flex gap-3">
        {suggestions.map((suggestion, index) => (
          <Button
            className="justify-between items-center"
            variant={"outline"}
            key={index}
            onClick={() => setUserInput(suggestion.prompt)}
          >
            <suggestion.icon /> {suggestion.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
