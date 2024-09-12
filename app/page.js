import WhatWeDo from "@/components/Home/WhatWeDo";
import Events from "@/components/Home/Events";
import Achievements from "@/components/Home/Achievements";
import OurBlogSection from "@/components/Home/OurBlogSection";
import BlogSection from "@/components/Home/BlogSection";
import SliderDetail from "@/components/Home/SliderDetail";

export default function Home() {
  return (
    <>
    <SliderDetail/>
    <WhatWeDo/>
    <Events/>
    <Achievements/>
    <OurBlogSection/>
    <BlogSection/>
    </>
  );
}
