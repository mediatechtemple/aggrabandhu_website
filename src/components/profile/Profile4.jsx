import Image from "next/image";
import profile4 from "../../public/images/profile4.png";

const Profile4 = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-around items-center bg-gradient-to-r from-red-600 to-sky-700 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2">
        मैं इस भूमिका को एक महत्वपूर्ण जिम्मेदारी मानता हूँ, जो हमारे संस्थान के
        संचालन और प्रशासन में सहायक होती है मेरी प्राथमिकता यह है कि हम अपने सभी
        प्रशासनिक कार्यों को सुचारु और प्रभावी तरीके से प्रबंधित करें, ताकि
        हमारी सेवाएँ बिना किसी विघ्न के समाज तक पहुँच सकें हमारे द्वारा किए गए
        प्रयासों और सेवाओं का सटीक दस्तावेजीकरण और समन्वय महत्वपूर्ण है, क्योंकि
        यह हमें समाज के प्रति हमारी जिम्मेदारियों को पूरा करने में सहायता करता
        है मैं समर्पित हूँ कि हमारी सभी प्रशासनिक गतिविधियाँ संगठन के मूल्यों और
        मिशन के अनुरूप हों, ताकि हम मिलकर एक अधिक न्यायपूर्ण और सशक्त समाज का
        निर्माण कर सकें।
      </h2>

      <div className="flex flex-col items-center md:w-1/2">
        <Image
          src={profile4}
          alt="atulAgarwal"
          className="w-48 h-auto md:w-56 md:h-auto  mb-4"
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
        सुधीर कुमार अग्रवाल
        <br />
        संस्थापक सदस्य/राष्ट्रीय उपसचिव
        </span>
      </div>
    </div>
  );
};

export default Profile4;
