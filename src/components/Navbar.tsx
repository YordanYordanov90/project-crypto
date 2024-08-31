"use client";

import { ModeToggle } from "@/components/ui/ModToggle";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between h-20 font-bold border border-secondary rounded-2xl shadow-xl  px-2 max-w-[1140px] w-full mx-auto ">
      <Link href="/coin">
        <h1 className="text-2xl">Cryptobase</h1>
      </Link>
      <div className="hidden md:block">
        <ModeToggle />
      </div>
      <Button asChild variant="default"><Link href="/coinpage">Coin Market</Link></Button>
      <div className="hidden md:block space-x-2">
        <Button asChild>
          <Link href="/signin"> Sign in</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/signup"> Sign up</Link>
        </Button>
      </div>
      <div className="block md:hidden cursor-pointer z-50">
        {open ? (
          <AiOutlineClose onClick={handleOpen} />
        ) : (
          <AiOutlineMenu onClick={handleOpen} />
        )}
      </div>
      {/* mobile menu */}

      {open && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-white/90 flex flex-col items-center justify-evenly z-40 ease-in duration-200">
          <ul className="w-full p-6 space-y-6 text-center">
            <li className="text-lg ">
              <Link href="/" className="block py-2 ">
                Home
              </Link>
            </li>
            <li className="text-lg">
              <Link href="/account" className="block py-2 ">
                Account
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
          <div className="flex flex-col space-y-4 p-4">
            <Button asChild>
              <Link href="/signin">Sign in</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
