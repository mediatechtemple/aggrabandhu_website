"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DonationPage = () => {
  const [donationList, setDonationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleDonationList = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(`${urlApi}/donationReceive`);
      const response = await apiResponse.json();
      setDonationList(response.data);
    } catch (error) {
      console.error("Error fetching member data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDonationList();
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
      <h1 className="text-center font-bold text-2xl">A Donation List</h1>
      <Table className="min-w-full border-collapse table-auto">
        <TableCaption>A list of Donations.</TableCaption>
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="w-[100px] border border-gray-300">
              Member ID
            </TableHead>
            <TableHead className="border border-gray-300">Profile</TableHead>
            <TableHead className="border border-gray-300">Name</TableHead>
            <TableHead className="text-center border border-gray-300">
              Bank
            </TableHead>
            <TableHead className="border border-gray-300">Address</TableHead>
            <TableHead className="text-right border border-gray-300">
              Start Date
            </TableHead>
            <TableHead className="text-right border border-gray-300">
              End Date
            </TableHead>
            <TableHead className="text-center border border-gray-300">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {donationList.map((item) => (
            <TableRow key={item.id} className="border border-gray-300">
              <TableCell className="border border-gray-300">
                {item.Member.id}
              </TableCell>
              <TableCell className="border border-gray-300">
                <Avatar>
                  <AvatarImage
                    src={`https://backend.aggrabandhuss.org${item.Member.profileUrl}`}
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {/* Status Icon and Text */}
                <div className="flex items-center space-x-2">
                  {item.status === "Active" ? (
                    <>
                      <span className="rounded-full w-1.5 h-1.5 bg-green-600"></span>
                      <span>Active</span>
                    </>
                  ) : (
                    <>
                      <span className="rounded-full w-1.5 h-1.5 bg-red-600"></span>
                      <span>Inactive</span>
                    </>
                  )}
                </div>
              </TableCell>
              <TableCell className="border border-gray-300">
                {item.Member.name}
              </TableCell>
              <TableCell className="border border-gray-300">
                {item.bank_detail}
              </TableCell>
              <TableCell className="border border-gray-300 space-x-2">
                {item.Member.state}
                <br />
                {item.Member.district}
              </TableCell>
              <TableCell className="text-right border border-gray-300">
                {new Date(item.start_date).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right border border-gray-300">
                {new Date(item.end_date).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right border border-gray-300">
                <Button onClick={() => router.push("payment")}>
                  Click To Donate
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DonationPage;
