import Image from "next/image";
import profile7 from "../../public/images/profile7.png";

const Profile7 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around items-center bg-gradient-to-r from-green-700 to-orange-600 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2">
        मेरा दायित्व न केवल वित्तीय संसाधनों का प्रबंधन करना है, बल्कि यह
        सुनिश्चित करना भी है कि हर योगदान का सही और पारदर्शी उपयोग हो हमारे सभी
        दानदाताओं और समर्थकों का विश्वास हमारी सबसे बड़ी संपत्ति है, और हम पूरी
        ईमानदारी के साथ उस विश्वास को बनाए रखते हैं हर एक रुपए का सदुपयोग सही
        दिशा में किया जाता है, ताकि संस्थान के उद्देश्यों और समाज की जरूरतों को
        प्रभावी रूप से पूरा किया जा सके हमारा उद्देश्य केवल संसाधनों का संकलन
        नहीं, बल्कि उनका ऐसा प्रबंधन करना है जिससे दीर्घकालिक सामाजिक बदलाव
        सुनिश्चित हो सके। शिक्षा, स्वास्थ्य और जरूरतमंदों की सहायता में किए गए
        हमारे निवेश समाज के सबसे कमजोर वर्गों के जीवन में एक स्थायी सकारात्मक
        बदलाव लाने का प्रयास हैं हम एक पारदर्शी, समर्पित और सामूहिक दृष्टिकोण के
        साथ अपने मिशन पर आगे बढ़ रहे हैं, ताकि हर सहयोगी को यह विश्वास हो कि
        उनका सहयोग सही दिशा में जा रहा है और इसका समाज पर व्यापक प्रभाव पड़ रहा
        है।
      </h2>

      <div className="flex flex-col items-center md:w-1/2 mb-4 md:mb-0">
        <Image
          src={profile7}
          alt="Bharatendra Kumar"
          className="w-48 h-auto md:w-56 md:h-auto  mb-4"
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
          जैनेन्द्र अग्रवाल
          <br />
          सॉफ्टवेयर विकास टीम के प्रमुख
        </span>
      </div>
    </div>
  );
};

export default Profile7;
