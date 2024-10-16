import Image from "next/image";
import profile2 from "../../public/images/profile2.png";

const Profile2 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-around items-center bg-gradient-to-r from-orange-300 to-sky-700 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2">
      “ संघर्ष की राह पर, हम कदम से कदम मिलाएं,
समाज के हर कोने में, परिवर्तन की धारा बहाएं।
हम सब हैं एकजुट, एक परिवार की तरह,
सभी की शक्ति है सही दिशा की ओर बढाए ”
      </h2>

      <div className="flex flex-col items-center md:w-1/2">
        <Image 
          src={profile2} 
          alt="atulAgarwal" 
          className="w-48 h-auto md:w-56 md:h-auto  mb-4" 
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
        अतुल अग्रवाल<br /> संस्थापक सदस्य/राष्ट्रीय उपाध्यक्ष
        </span>
      </div>
    </div>
  );
};

export default Profile2;
