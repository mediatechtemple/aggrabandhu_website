"use client";
import { BsSearch } from "react-icons/bs";
import { Input } from "../ui/input";
import MemberList from "./MemberList";
import { useEffect, useState } from "react";
import urlApi from "@/utils/api";

const TeamMember = () => {
  const [member, setMember] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handelMemberList = async () => {
    const data = await fetch(`${urlApi}/designation`);
    const res = await data.json();
    setMember(res);
    setFilteredMembers(res);
  };

  useEffect(() => {
    handelMemberList();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = member.filter((m) => m.name.toLowerCase().includes(query));
    setFilteredMembers(filtered);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold text-green-700 mb-4">
        Team Members
      </h1>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearch}
            className="rounded-full bg-orange-100 pr-10 pl-10"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BsSearch className="text-gray-500" />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-6">
        {filteredMembers && filteredMembers.length > 0 ? (
          filteredMembers.map((item) => (
            <MemberList
              key={item.id}
              name={item.name}
              designation={item.designation}
              image={item.image}
            />
          ))
        ) : (
          <p className="col-span-4 text-center text-red-500">
            No members found
          </p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
