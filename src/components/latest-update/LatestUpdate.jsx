import { CardWithForm } from "./Card";

const LatestUpdate = ({ updatesName }) => {
  return (
    <div className="md:w-1/2 w-full flex flex-col items-center gap-3 ">
      <p className="rounded-full bg-green-700 text-white text-center px-3 py-2">
        {updatesName}
      </p>

      <CardWithForm />
    </div>
  );
};

export default LatestUpdate;
