import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { ModeToggle } from "./ui/ModToggle";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-5   md:flex-row items-center justify-between h-50  border border-secondary rounded-2xl shadow-xl mt-10 pb-4 px-2 max-w-[1140px] w-full mx-auto">
      <Link href="/">
        <h3 className="text-2xl">Cryptobase</h3>
      </Link>

      <div>
        <ul className="space-y-1">
          <li>Support</li>
          <li> About</li>
          <li> Contact</li>
        </ul>
      </div>
      <div>
        <ul className="space-y-1">
          <li>Careers</li>
          <li>Invest</li>
          <li>Legal</li>
        </ul>
      </div>
      <div className="space-x-2 flex md:flex-row flex-col space-y-2 outline-none focus:outline-none">
        <input
          className="p-2 border rounded-md"
          type="text"
          placeholder="Sing up for updates"
        />
        <Button variant="default">Sign up</Button>
      </div>
    </div>
  );
};

export default Footer;
