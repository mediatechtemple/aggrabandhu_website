"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/Loading";
import urlApi from "@/utils/api";

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

  const handleDeleteMemberList = async (getCurrentID) => {
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
      <table className="min-w-full bg-white border">
        <caption className="text-lg font-semibold mb-4">A list of Gallery</caption>
        <thead>
          <tr className="text-left">
            <th className="border px-4 py-2">Id</th>
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Designation</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={`https://backend.aggrabandhuss.org${item.image}`}
                  alt={item.name}
                />
              </td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.designation}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDeleteMemberList(item.id)}
                  disabled={loading}
                  className={`px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring focus:ring-red-500 focus:outline-none ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowMemberList;
