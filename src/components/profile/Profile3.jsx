import Image from "next/image";
import profile3 from "../../public/images/profile3.png";

const Profile3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-blue-700 to-orange-600 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2">
        मैं गर्व महसूस करता हूँ कि हम सामाजिक कल्याण के क्षेत्र में जो कार्य कर
        रहे हैं, वह सही दिशा में अग्रसर है हमारी प्राथमिकता हमेशा उन लोगों की
        सेवा करना है, जो समाज में हाशिये पर हैं और जिन्हें सहायता की सबसे अधिक
        आवश्यकता है हम शिक्षा, स्वास्थ्य और सामाजिक न्याय के क्षेत्रों में अपने
        प्रयासों को निरंतर बढ़ाते जा रहे हैं संस्थान का हर सदस्य, दानदाता और
        स्वयंसेवक इस मिशन का अभिन्न हिस्सा है उनके बिना यह यात्रा संभव नहीं
        होती। हम सामूहिक प्रयासों और साझा उद्देश्यों के माध्यम से एक ऐसा समाज
        बनाने के लिए प्रतिबद्ध हैं, जो समता, सहानुभूति और समृद्धि पर आधारित हो
        हमारा लक्ष्य न केवल तत्काल सहायता प्रदान करना है, बल्कि दीर्घकालिक
        सकारात्मक परिवर्तन लाना है हम विश्वास करते हैं कि सेवा का कार्य केवल एक
        कर्तव्य नहीं, बल्कि हमारे समाज को सशक्त बनाने का माध्यम है।
      </h2>

      <div className="flex flex-col items-center md:w-1/2">
        <Image
          src={profile3}
          alt="Bharatendra Kumar"
          className="w-48 h-auto md:w-56 md:h-auto  mb-4"
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
        आनंद अग्रवाल
        <br />
        संस्थापक सदस्य/राष्ट्रीय सचिव
        </span>
      </div>
    </div>
  );
};

export default Profile3;
