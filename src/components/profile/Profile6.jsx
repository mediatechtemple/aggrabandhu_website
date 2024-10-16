import Image from "next/image";
import profile6 from "../../public/images/profile6.png";

const Profile6 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center bg-gradient-to-r from-red-700 to-pink-600 p-8 mt-3">
      <h2 className="font-extrabold text-2xl text-white text-center md:text-left md:w-1/2">
        अग्रबंधु सेवार्थ संस्थान (ABSS) की कार्यप्रणाली पूरी तरह से पारदर्शिता,
        वित्तीय अनुशासन, और सामाजिक उत्तरदायित्व के उच्च मानकों पर आधारित है।
        संस्था द्वारा किए गए सभी लेन-देन और आर्थिक सहयोग की प्रक्रिया में
        नियमानुसार सख्त अनुपालन होता है, जिसे नियमित ऑडिटिंग के माध्यम से
        सुनिश्चित किया जाता है ABSS की सभी वित्तीय गतिविधियां स्पष्टता और
        जवाबदेही की भावना से संचालित होती हैं, जिससे यह सुनिश्चित होता है कि हर
        सहयोग राशि सही तरीके से और सही हितधारकों तक पहुंचे। संस्था के द्वारा
        अपनाई गई नीतियां और नियम प्रभावी ढंग से लागू किए जाते हैं, जिससे ट्रस्ट
        के उद्देश्यों की पूर्ति और वित्तीय स्थिरता दोनों सुनिश्चित होते हैं।
      </h2>

      <div className="flex flex-col items-center md:w-1/2">
        <Image
          src={profile6}
          alt="Bharatendra Kumar"
          className="w-48 h-auto md:w-56 md:h-auto  mb-4"
        />
        <span className="text-xl text-lightGreen font-extrabold text-center">
        C.A. नितिन अग्रवाल
        <br />
        संस्थापक सदस्य/राष्ट्रीय आय व्यय निरीक्षक
        </span>
      </div>
    </div>
  );
};

export default Profile6;
