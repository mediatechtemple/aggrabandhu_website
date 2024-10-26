'use client'
import { CardWithForm } from "./Card";
import { Loading } from "@/Loading";
import useGetLatestEvent from "@/context/useGetLatestEvent";

const LatestUpdateEvent = ({ updatesName }) => {
  const [latestNews, loading] = useGetLatestEvent()
  if(loading) {
    return <Loading />
  }
  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-3 ">
      <p className="rounded-full bg-green-700 text-white text-center px-3 py-2">
        {updatesName}
      </p>

      <CardWithForm  scrollPosition={2}  newsData={latestNews} />
    </div>
  );
};

export default LatestUpdateEvent;
