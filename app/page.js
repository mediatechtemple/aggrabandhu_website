import WhatWeDo from "@/components/Home/WhatWeDo";
import Events from "@/components/Home/Events";
import Achievements from "@/components/Home/Achievements";
import OurBlogSection from "@/components/Home/OurBlogSection";
import BlogSection from "@/components/Home/BlogSection";
import SliderDetail from "@/components/Home/SliderDetail";
import EventsTicker from "@/components/Pincode/four";
import NewsTicker from "@/components/Pincode/three";

export default function Home() {
  return (
    <>
    <SliderDetail/>
    <WhatWeDo/>
    {/* <Achievements/> */}
    <div className="p-4 flex flex-row">
      <div className='flex-grow'>
        <h1 className="text-2xl font-bold mb-4  text-center text-blue-500">Latest News and Updates</h1>
        <NewsTicker />
      </div>
      <div className='flex-grow'>
        <h1 className="text-2xl font-bold mb-4  text-center text-blue-500">Latest Events and Updates</h1>
        <EventsTicker />
      </div>
    </div>
    <Events/>
    {/* <OurBlogSection/> */}
    {/* <BlogSection/> */}
    </>
  );
}
