import AddGallery from "@/components/add-Gallery/AddGallery";
import ShowGallery from "@/components/add-Gallery/ShowGallery";
import AddMemberList from "@/components/add-memberList/AddMemberList";
import ShowMemberList from "@/components/add-memberList/ShowMemberList";
import React from "react";

const Practice = () => {
  return (
    <div className="mt-20">
      <AddMemberList />
      <ShowMemberList />
    </div>
  );
};

export default Practice;
