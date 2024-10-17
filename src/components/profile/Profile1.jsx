import Image from "next/image";
import profile1 from "../../public/images/profile1.png";

const Profile1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-green-700 to-orange-600 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2 md:ml-16">
        “ एकता का सूत्र बुनें, विविधता में सजाएं, ज्ञान की मशाल से, अंधकार को
        भेदें। सभी के हक की लड़ाई, हम मिलकर लड़ेंगे, संवेदनाओं की सृष्टि में, हर
        दिल को जोड़ेंगे ”
      </h2>

      <div className="flex flex-col items-center md:w-1/2">
        <Image
          src={profile1}
          alt="Bharatendra Kumar"
          className="w-48 h-auto md:w-56 md:h-auto  mb-4"
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
          भारतेंद्र कुमार अग्रवाल ' राजू ' <br /> संस्थापक/राष्ट्रीय अध्यक्ष
        </span>
      </div>
    </div>
  );
};

export default Profile1;
