import Image from "next/image";
import laxmiJi from "../../public/images/laxmiJi.png";

const Agarbandhu = () => {
  return (
    <div className="bg-lightBule p-10 border-2 border-gray-200 rounded-lg shadow-lg max-w-full mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:gap-10">
        {/* Text Section */}
        <div className="flex flex-col gap-10 w-full md:w-2/3 p-6">
          <h2 className="font-extrabold text-xl text-gray-800 leading-relaxed">
            “ अग्रबंधु सेवार्थ संस्थान एक प्रतिष्ठित समाजसेवी संगठन है, जो समाज के
            आर्थिक, शैक्षिक और सामाजिक रूप से वंचित वर्गों की सेवा और उत्थान के
            लिए समर्पित है। इस संस्था का मुख्य उद्देश्य जरूरतमंदों को सहायता
            प्रदान कर उनके जीवन में सुधार लाना है। शिक्षा, स्वास्थ्य, और सामाजिक
            कल्याण के विभिन्न क्षेत्रों में अग्रसर, यह संगठन समाज के कमजोर वर्गों
            को सशक्त बनाने के लिए निरंतर प्रयासरत है।"
          </h2>
          <h2 className="font-extrabold text-xl text-gray-800 leading-relaxed">
            सच्चे समाजवाद के प्रणेता और महाभारत काल में जन्मे श्री श्री 1008
            महाराजा अग्रसेन के "एक ईट, एक रुपया" संदेश को मूर्त रूप देने के
            उद्देश्य से संस्था (ABSS) संकट में फंसे परिवारों को आर्थिक सहयोग
            प्रदान करती है। यदि किसी परिवार के मुख्य सदस्य की असमय मृत्यु हो जाती
            है, तो संस्थान के वर्तमान नियमों के अनुसार, उस मृत्यु मामले में संस्था
            के सदस्य उस परिवार के नॉमिनी को सीधे खाते में सम्मानजनक सहायता राशि
            प्रदान करते हैं।
          </h2>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-end mt-6 md:mt-6">
          <Image
            src={laxmiJi}
            className="rounded-lg w-96 h-96 object-contain"
            alt="Laxmi Ji"
          />
        </div>
      </div>
    </div>
  );
};

export default Agarbandhu;
