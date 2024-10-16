import Agarbandhu from "@/components/agarbandhu/Agarbandhu";
import Agarsen from "@/components/agarsen/Agarsen";
import Footer from "@/components/footer/Footer";
import Galery from "@/components/galery/Galery";
import LatestUpdate from "@/components/latest-update/LatestUpdate";
import Profile1 from "@/components/profile/Profile1";
import Profile2 from "@/components/profile/Profile2";
import Profile3 from "@/components/profile/Profile3";
import Profile4 from "@/components/profile/Profile4";
import Profile5 from "@/components/profile/Profile5";
import Profile6 from "@/components/profile/Profile6";
import Profile7 from "@/components/profile/Profile7";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Agarsen />
      <Agarbandhu />
      {/* <div className="bg-customYellow flex justify-between items-center p-10">
        <LatestUpdate updatesName={"Latest Nesw And Updates"} />
        <LatestUpdate updatesName={"Latest Event And Updates"} />
      </div> */}
      
     
      <Profile1 />
      <Profile2 />
      <Profile3 />
      <Profile4 />
      <Profile5 />
      <Profile6 />
      <Profile7 />
      <Galery />
      <Footer />
    </div>
  );
}
