"use client";

import MemberList from "./MemberList";
import SearchBar from "@/components/search/SearchBar";
import { useEffect, useState, useMemo } from "react";
import urlApi from "@/utils/api";

const TeamMember = () => {
  const [member, setMember] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMemberList = async () => {
    const data = await fetch(`${urlApi}/designation`);
    const res = await data.json();
    setMember(res);
  };

  useEffect(() => {
    handleMemberList();
  }, []);

  const filteredMembers = useMemo(() => {
    return member.filter((m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [member, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold text-green-700 mb-4">Team Members</h1>

      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <SearchBar onSearch={handleSearch} />
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
          <p className="col-span-4 text-center text-red-500">No members found</p>
        )}
      </div>
    </div>
  );
};

export default TeamMember;
