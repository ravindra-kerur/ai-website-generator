import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

const MenuOptions = [
  {
    namme: "Pricing",
    path: "/pricing",
  },
  {
    namme: "Contact Us",
    path: "/contact-us",
  },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={35} height={35} alt="logo" />
        <h2 className="font-bold text-xl">AI Website Generator Ravindra</h2>
      </div>

      {/* Menu Options */}
      <div className="flex gap-3">
        {MenuOptions.map((menu, index) => (
          <Button variant={"ghost"} key={index}>
            {menu.namme}
          </Button>
        ))}
      </div>

      {/* Get Started Button */}
      <div>
        <SignInButton mode="modal" forceRedirectUrl={"/workspace"}>
          <Button>
            Get Started <ArrowRight />
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Header;
