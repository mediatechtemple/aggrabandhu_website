"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxAvatar } from "react-icons/rx";
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
import SearchBar from "@/components/search/SearchBar";

const DonationPage = () => {
  const [donationList, setDonationList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDonationList = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiResponse = await fetch(`${urlApi}/donationReceive`);
      const response = await apiResponse.json();
      setDonationList(response.data);
    } catch (error) {
      console.error("Error fetching member data:", error);
      setError("Failed to load donation data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleDonationList();
  }, []);

  const filteredDonationList = useMemo(() => {
    return donationList.filter((donation) =>
      donation?.Member?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, donationList]);

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
    <div className="mt-20 overflow-x-auto">
      <h1 className="text-center font-bold text-2xl my-4">Donation Receiver List</h1>
      <SearchBar onSearch={handleSearch} />

      <Table className="min-w-full border-collapse table-auto">
        <TableCaption>A list of Donations.</TableCaption>
        <TableHeader>
          <TableRow className="border border-gray-300">
            <TableHead className="text-start text-nowrap w-[100px] border border-gray-300">Member ID</TableHead>
            <TableHead className="text-center border border-gray-300">Profile</TableHead>
            <TableHead className="text-center border border-gray-300">Name</TableHead>
            <TableHead className="text-center border border-gray-300">Amount</TableHead>
            <TableHead className="text-center border border-gray-300">Address</TableHead>
            <TableHead className="text-center border border-gray-300">Death Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDonationList && filteredDonationList.length > 0 && (
            filteredDonationList.map((item) => (
              <TableRow key={item.id} className="border border-gray-300">
                <TableCell className="border border-gray-300">{item.Member.id}</TableCell>
                <TableCell className="border border-gray-300">
                  <Avatar>
                    <AvatarImage src={`https://backend.aggrabandhuss.org${item.Member.profileUrl}`} />
                    <AvatarFallback>
                      <RxAvatar className="text-5xl font-bold" />
                    </AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="border border-gray-300">{item.Member.name}</TableCell>
                <TableCell className="border border-gray-300">{item.total_donation_received}</TableCell>
                <TableCell className="border border-gray-300 space-x-2">
                  {`${item.Member.district}, ${item.Member.state}`}
                </TableCell>
                <TableCell className="text-start border border-gray-300">
                  {new Date(item.death_date).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          )
          
          }
        </TableBody>
      </Table>
    </div>
  );
};

export default DonationPage;
