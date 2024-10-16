import { Button } from "../ui/button";
import youtubeLogo from "../../public/images/youtubeLogo.png";
import instraLogo from "../../public/images/instraLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import whatsAppLogo from "../../public/images/whatsAppLogo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-black w-full py-8">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-semibold text-white uppercase">
          <p>Terms and Conditions</p>
          <Link href={"privacy"}>Privacy Policy</Link>
          <Link href={"rule"}>Rules & Regulations</Link>
          <Button className="rounded-full font-semibold uppercase bg-orange-600 border border-green-500 hover:bg-orange-700">
            Contact Us
          </Button>
        </div>
      </div>

      <hr className="border-t border-gray-400 my-4" />

      <p className="text-white text-center text-sm uppercase">
        All Rights Reserved to Agrabandhu Sewarth Sansthan (ABSS) - Designed &
        Developed by MediaTechTemple
      </p>

      <div className="fixed bottom-2 right-8 z-20 flex flex-col space-y-2">
        <Image src={youtubeLogo} alt="YouTube Logo" className="w-10 h-auto" />
        <Image src={facebookLogo} alt="Facebook Logo" className="w-10 h-auto" />
        <Image src={instraLogo} alt="Instagram Logo" className="w-10 h-auto" />
        <Image src={whatsAppLogo} alt="WhatsApp Logo" className="w-10 h-auto" />
      </div>
    </div>
  );
};

export default Footer;
