'use client';
import Image from 'next/image';

export default function Events() {
  return (
    <section className="bg-white py-12 md:py-8 px-4 sm:px-2">
      <div className="container mx-auto">
        <div className="session-title mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">What we Do</h2>
          <p className="text-lg">We are a non-profit & charity raising money for child education</p>
        </div>
        <div className="event-ro flex flex-wrap -mx-4">
          <div className="col-md-4 col-sm-6 px-4 mb-8 w-full md:w-1/3 sm:w-1/2">
            <div className="event-box text-center">
              <Image
                src="/Images/slider/slide-01.jpg"
                alt=""
                width={500}
                height={300}
                className="mb-4 w-full h-auto object-cover"
                priority
              />
              <h4 className="text-xl font-semibold mb-2">Child Education in Africa</h4>
              <p className="raises mb-2 text-base">
                <span className="text-green-600">Raised : $34,425</span> / $500,000
              </p>
              <p className="desic text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">Donate Now</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 px-4 mb-8 w-full md:w-1/3 sm:w-1/2">
            <div className="event-box text-center">
              <Image
                src="/Images/slider/slide-02.jpg"
                alt=""
                width={500}
                height={300}
                className="mb-4 w-full h-auto object-cover"
                priority
              />
              <h4 className="text-xl font-semibold mb-2">Child Education in Africa</h4>
              <p className="raises mb-2 text-base">
                <span className="text-green-600">Raised : $34,425</span> / $500,000
              </p>
              <p className="desic text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">Donate Now</button>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 px-4 mb-8 w-full md:w-1/3 sm:w-1/2">
            <div className="event-box text-center">
              <Image
                src="/Images/slider/slide-03.jpg"
                alt=""
                width={500}
                height={300} 
                className="mb-4 w-full h-auto object-cover"
                priority
              />
              <h4 className="text-xl font-semibold mb-2">Child Education in Africa</h4>
              <p className="raises mb-2 text-base">
                <span className="text-green-600">Raised : $34,425</span> / $500,000
              </p>
              <p className="desic text-sm mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded text-sm">Donate Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
