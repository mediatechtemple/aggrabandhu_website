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

const ShowGallery = () => {
  const router = useRouter();
  const [galleryList, setGalleryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleGalleryList = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch(`${urlApi}/gallery`);
      const response = await apiResponse.json();
      setGalleryList(response);
    } catch (error) {
      console.error("Error fetching member data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handelDeleteGallery = async (getCurrentID) => {
    try {
      const apiResponse = await fetch(`${urlApi}/gallery/${getCurrentID}`, {
        method: "DELETE",
      });
      console.log(apiResponse);
      if (!apiResponse.ok) {
        throw new Error("Network response was not ok");
      } else router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    router.refresh();
    handleGalleryList();
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
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {galleryList.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell className="font-medium">
                <img
                  src={`https://backend.aggrabandhuss.org${item.url}`}
                  alt={item.description}
                  className="w-44 h-36 rounded-md"
                />
              </TableCell>
              <TableCell>{item.description}</TableCell>

              <TableCell>
                <Button
                  onClick={() => handelDeleteGallery(item.id)}
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

export default ShowGallery;
