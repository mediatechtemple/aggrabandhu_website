"use client";

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
import { useEffect, useState } from "react";

const MembersPage = () => {
  const [memberList, setMemberList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleMemberList = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(`${urlApi}/member`);
      const response = await apiResponse.json();
      setMemberList(response.data);
    } catch (error) {
      console.error("Error fetching member data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleMemberList();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <Loading />
      </div>
    );
  }
  return (
    <div className="mt-20 overflow-x-auto">
      <h1 className="text-center font-bold text-2xl">Member List</h1>
      <Table className="min-w-full border-collapse table-auto">
        <TableCaption>A list of members.</TableCaption>
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="w-[100px] border border-gray-300">
              Member ID
            </TableHead>
            <TableHead className="border border-gray-300">Profile</TableHead>
            <TableHead className="border border-gray-300">Name</TableHead>
            <TableHead className="border border-gray-300">Profession</TableHead>
            <TableHead className="border border-gray-300">Address</TableHead>
            <TableHead className="text-right border border-gray-300">
              Joining Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberList.map((item) => (
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
///this is member page
