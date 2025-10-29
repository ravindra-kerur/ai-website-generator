"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

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
  const { user } = useUser();
  return (
    <div className="flex items-center justify-between p-4 shadow">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} width={35} height={35} alt="logo" />
        <h2 className="font-bold text-xl">AI Website Generator</h2>
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
        {!user ? (
          <SignInButton mode="modal" forceRedirectUrl={"/workspace"}>
            <Button>
              Get Started <ArrowRight />
            </Button>
          </SignInButton>
        ) : (
          <Link href={"/workspace"} passHref>
            <Button>
              Get Started <ArrowRight />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
