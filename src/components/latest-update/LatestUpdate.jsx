import React from "react";
import { Button } from "../ui/button";
import { CardWithForm } from "./Card";

const LatestUpdate = ({ updatesName }) => {
  return (
    <div className="w-1/2">
      <Button className="rounded-full bg-green-700 text-white ml-36 mb-5">
        {updatesName}
      </Button>
      <div className="flex justify-center items-center gap-2">
        <CardWithForm />
        <div className="w-2 h-48 rounded-full bg-white">
          <span className="p-1 bg-green-600 rounded-t-full"></span>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
