import Image from 'next/image';

const OurBlogSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0 relative h-[300px] lg:h-[400px]">
            <Image 
              src="/Images/slider/slide-02.jpg" 
              alt="About" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-4">
                  Why choose People Care for your <br />
                  <span className="text-green-600">Next Charity Donation</span>
                </h4>
                <p className="text-justify mb-4 indent-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer neque libero, pulvinar et elementum quis,
                  facilisis eu ante. Mauris non placerat sapien. Pellentesque tempor arcu non odio scelerisque ullamcorper.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius eros consequat auctor gravida. Fusce
                  tristique lacus at urna sollicitudin pulvinar. Suspendisse hendrerit ultrices mauris.
                </p>
              </div>
              <p className="text-justify indent-5">
                Ut ultricies lacus a rutrum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Sed porta dolor quis felis pulvinar dignissim. Etiam nisl ligula, ullamcorper non metus vitae,
                maximus efficitur mi. Vivamus ut ex ullamcorper, scelerisque lacus nec, commodo dui. Proin massa urna, volutpat
                vel augue eget, iaculis tristique dui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlogSection;
