import { Button } from "../ui/button";
import youtubeLogo from "../../public/images/youtubeLogo.png";
import instraLogo from "../../public/images/instraLogo.png";
import facebookLogo from "../../public/images/facebookLogo.png";
import whatsAppLogo from "../../public/images/whatsAppLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className="bg-black w-full py-8">
      <div className="flex flex-col md:flex-row justify-around items-center gap-8">
        <div className="flex flex-col md:flex-row items-center gap-6 text-lg font-semibold text-white uppercase">
          <Link href="https://wa.me/917830305040" target="blank">
            Support
          </Link>
          <Link href={"privacy"}>Privacy Policy</Link>
          <Link href={"rule"}>Rules & Regulations</Link>
          <Button
            onClick={() => router.push("contact-us")}
            className="rounded-full font-semibold uppercase bg-orange-600 border border-green-500 hover:bg-orange-700"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <hr className="border-t border-gray-400 my-4" />

      <p className="text-white text-center text-sm uppercase">
        All Rights Reserved to Agrabandhu Sewarth Sansthan (ABSS) |
        <Link
          href="https://www.mediatechtemple.com/web-design-and-development-services/"
          target="_blank"
          title="Media Tech Temple"
        >
          &nbsp; Website Developed By
        </Link>
        <Link
          href="https://mediatechtemple.com/"
          target="_blank"
          title="Media Tech Temple"
        >
          {" "}
          Media Tech Temple
        </Link>
      </p>

      <div className="fixed bottom-2 right-8 z-20 flex flex-col space-y-2">
        <Link
          href="https://www.youtube.com/@AggrabandhuSewaSansthan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={youtubeLogo}
            alt="YouTube Logo"
            className="w-10 h-auto cursor-pointer"
          />
        </Link>
        <Link
          href="https://www.facebook.com/aggrabandhusevarthsansthan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={facebookLogo}
            alt="Facebook Logo"
            className="w-10 h-auto cursor-pointer"
          />
        </Link>
        <Link
          href="https://www.instagram.com/agrabandhusevarthsansthan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={instraLogo}
            alt="Instagram Logo"
            className="w-10 h-auto cursor-pointer"
          />
        </Link>
        <Link
          href="https://whatsapp.com/channel/0029VajOtfp59PwSxSNdHT1W"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={whatsAppLogo}
            alt="WhatsApp Logo"
            className="w-10 h-auto cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
