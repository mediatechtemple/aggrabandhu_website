"use client";

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
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ShowMemberList = () => {
  const router = useRouter();
  const [memberList, setMemberList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGetMemberList = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(`${urlApi}/designation`);
      const response = await apiResponse.json();
      setMemberList(response);
    } catch (error) {
      console.error("Error fetching member data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handelDeleteMemberList = async (getCurrentID) => {
    try {
      const apiResponse = await fetch(`${urlApi}/designation/${getCurrentID}`, {
        method: "DELETE",
      });
      if (!apiResponse.ok) {
        throw new Error("Network response was not ok");
      } else router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetMemberList();
    router.refresh();
  }, [router]);
  if (loading) {
    return (
      <div className="flex justify-center items-center mt-20">
        <Loading />
      </div>
    );
  }
  return (
    <div className="mt-20 overflow-x-auto">
      <Table>
        <TableCaption>A list of Gallery.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Image</TableHead>

            <TableHead>Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell className="font-medium">
                <Avatar>
                  <AvatarImage
                    src={`https://backend.aggrabandhuss.org${item.image}`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.designation}</TableCell>
              <TableCell>
                <Button
                  onClick={() => handelDeleteMemberList(item.id)}
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring focus:ring-red-500 focus:outline-none ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Deleting..." : "Delete Image"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ShowMemberList;
