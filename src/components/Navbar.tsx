"use client";

import { ModeToggle } from "@/components/ui/ModToggle";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { userId } = useAuth();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex items-center justify-between   h-20 font-bold border border-secondary rounded-2xl shadow-xl  px-4 max-w-[1140px] w-full mx-auto ">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <h1 className="text-2xl">Cryptobase</h1>
        </Link>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
      </div>
      {userId && (
        <div className="flex items-center justify-end space-x-5">
          <Button asChild variant="default">
            <Link href="/coinpage">Home</Link>
          </Button>
          <Button asChild variant="default">
            <Link href="/account">Watched Coins</Link>
          </Button>
          <Button asChild variant="default">
            <Link href="/">News</Link>
          </Button>
        </div>
      )}

      <div className="hidden md:block space-x-2">
        {!userId && (
          <>
            <Button asChild>
              <Link href="/signin"> Sign in</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/signup"> Sign up</Link>
            </Button>
          </>
        )}
      </div>
      <div className="hidden md:block">
        <UserButton afterSignOutUrl="/" />
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
        <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-neutral-300/80  dark:bg-gray-900/90 flex flex-col items-center justify-evenly z-40 ease-in duration-200">
          <ul className="w-full p-6 space-y-6 text-center">
            <li className="text-lg ">
              <Button asChild>
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li className="text-lg">
              <Button asChild>
                <Link href="/account">Account</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
          <div className="flex flex-col space-y-4 p-4">
            {!userId && (
              <>
                <Button asChild>
                  <Link href="/signin">Sign in</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>

          <UserButton afterSignOutUrl="/" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
