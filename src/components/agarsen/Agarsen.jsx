import LaxmiBrick from "../../public/images/laxmiBrick.png";
import sahyog from "../../public/images/sahyog.png";
import mainVIshkarma from "../../public/images/mianvishkarma.png";
import sideVishkarma from "../../public/images/sideVishkarma.png";
import { Button } from "../ui/button";
import Image from "next/image";

const Agarsen = () => {
  return (
    <div className="w-full h-auto bg-customYellow border border-white mt-20 px-4 py-5 md:py-0 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6">
        <div className="flex flex-col justify-center items-center md:items-start space-y-6 text-center md:text-left w-full md:w-3/5">
          <h3 className="font-semibold text-lg md:text-xl text-darkChoclate">
            “ महाराजा अग्रसेन जी के संदेश{" "}
            <span className="font-bold text-xl md:text-2xl text-green-800">
              'एक ईंट, एक रुपया'
            </span>{" "}
            को साकार करते हुए, संस्था उन अग्रबंधु परिवारों की मदद करती है जहाँ
            परिवार के मुख्य पालनकर्ता की असमय मृत्यु हो जाती है और आश्रित बच्चे
            अबोध उम्र के होते हैं, जिससे परिवार गंभीर आर्थिक संकट में आ जाता है
            “।
          </h3>
          <Button className="font-semibold rounded-full px-6 py-2 text-white bg-orange-600 border border-green-500">
            संपर्क करें
          </Button>
        </div>

        <Image
          src={LaxmiBrick}
          alt="laxmiBrick"
          className="w-64 h-auto object-contain md:ml-6"
        />
      </div>

      <div className="flex flex-col items-center mb-6">
        <Image src={sahyog} alt="sahyog" className="w-8/12 h-auto" />

        <div className="border-r-8 border-orange-600 rounded-full mt-4">
          <div
            className="flex justify-start relative border border-green-700 rounded-full"
            style={{ borderWidth: "30px" }}
          >
            <Image
              src={sideVishkarma}
              alt="Side Vishkarma Background"
              className="absolute inset-0 w-full h-full object-cover rounded-full"
            />
            <Image
              src={mainVIshkarma}
              alt="Main Vishkarma"
              className="relative z-10 w-1/2 h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agarsen;
