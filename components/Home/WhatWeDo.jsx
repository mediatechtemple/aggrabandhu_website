import Image from 'next/image';
/* eslint-disable react/no-unescaped-entities */
const WhatWeDo = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0 relative h-[300px] lg:h-[400px]">
            <Image 
              src="/Images/logo/Lakhshami.jpg" 
              alt="About" 
              fill 
              className="contain" // Ensures image scales properly
              style={{objectFit: "cover"}}
              priority
            />
          </div>

          {/* Text Section with Scroll */}
          <div className="w-full lg:w-1/2 px-4 lg:max-h-[400px] overflow-y-auto">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
                महाराजा अग्रसेन जी के संदेश
              </h2>
              <p className="text-justify indent-5 mb-4">
                अग्रबंधु सेवार्थ संस्थान एक प्रतिष्ठित समाजसेवी संगठन है, जो समाज के आर्थिक, शैक्षिक और सामाजिक रूप से वंचित वर्गों की सेवा और उत्थान के लिए समर्पित है।
                इस संस्था का मुख्य उद्देश्य जरूरतमंदों को सहायता प्रदान कर उनके जीवन में सुधार लाना है। शिक्षा, स्वास्थ्य, और सामाजिक कल्याण के विभिन्न क्षेत्रों में अग्रसर, यह संगठन समाज के कमजोर वर्गों को सशक्त बनाने के लिए निरंतर प्रयासरत है।
              </p>
              <p className="text-justify indent-5 mb-4">
                सच्चे समाजवाद के प्रणेता और महाभारत काल में जन्मे श्री श्री 1008 महाराजा अग्रसेन के "एक ईट, एक रुपया" संदेश को मूर्त रूप देने के उद्देश्य से संस्था (ABSS) संकट में फंसे परिवारों को आर्थिक सहयोग प्रदान करती है। 
                यदि किसी परिवार के मुख्य सदस्य की असमय मृत्यु हो जाती है, तो संस्थान के वर्तमान नियमों के अनुसार, उस मृत्यु मामले में संस्था के सदस्य उस परिवार के नॉमिनी को सीधे खाते में सम्मानजनक सहायता राशि प्रदान करते हैं। 
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
