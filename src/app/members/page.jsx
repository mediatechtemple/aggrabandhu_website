"use client";

import SearchBar from "@/components/search/SearchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loading } from "@/Loading";
import urlApi from "@/utils/api";
import { useEffect, useMemo, useState } from "react";

const MembersPage = () => {
  const [memberList, setMemberList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleMemberList = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiResponse = await fetch(`${urlApi}/member`);
      const response = await apiResponse.json();
      setMemberList(response.data);
    } catch (error) {
      console.error("Error fetching member data:", error);
      setError("Failed to load member data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleMemberList();
  }, []);
  const filteredMemberList = useMemo(() => {
    return memberList.filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [memberList, searchQuery]);
  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <Loading />
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 mt-20">{error}</div>;
  }
  return (
    <div className=" mt-24 overflow-x-auto">
      <h1 className="text-center font-bold text-2xl">Member List</h1>

      <SearchBar onSearch={handleSearch} />

      <Table className="min-w-full border-collapse table-auto">
        <TableCaption>A list of members.</TableCaption>
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="text-start border border-gray-300 text-nowrap">
              Member ID
            </TableHead>
            <TableHead className="border border-gray-300">Profile</TableHead>
            <TableHead className="text-center border border-gray-300">
              Name
            </TableHead>
            <TableHead className="text-center border border-gray-300">
              Profession
            </TableHead>
            <TableHead className="text-center border border-gray-300">
              Address
            </TableHead>
            <TableHead className="text-nowrap border border-gray-300">
              Joining Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMemberList && filteredMemberList.length > 0 &&
            filteredMemberList.map((item) => (
              <TableRow key={item.id} className="border border-gray-300">
                <TableCell className="border border-gray-300">
                  {item.id}
                </TableCell>
                <TableCell className="border border-gray-300">
                  <Avatar>
                    <AvatarImage
                      src={`https://backend.aggrabandhuss.org${item.profileUrl}`}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="border border-gray-300">
                  {item.name}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {item.profession}
                </TableCell>
                <TableCell className="border border-gray-300">
                  {item.address}
                </TableCell>
                <TableCell className="text-right border border-gray-300">
                  {new Date(item.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MembersPage;
