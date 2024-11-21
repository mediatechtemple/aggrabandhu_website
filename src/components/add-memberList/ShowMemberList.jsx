"use client";

import { useEffect, useState } from "react";
import { Loading } from "@/Loading";
import urlApi from "@/utils/api";

const ShowMemberList = () => {
  const [memberList, setMemberList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(null);

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

  const handleDeleteMemberList = async (id) => {
    setDeleting(id);
    try {
      const apiResponse = await fetch(`${urlApi}/designation/${id}`, {
        method: "DELETE",
      });
      if (!apiResponse.ok) {
        console.log("Network response was not ok");
        return;
      }
      // Directly update the member list state after deletion
      setMemberList((prevList) =>
        prevList.filter((member) => member.id !== id)
      );
    } catch (error) {
      console.log("Error deleting member:", error);
    } finally {
      setDeleting(null);
    }
  };

  useEffect(() => {
    handleGetMemberList();
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
      <table className="min-w-full bg-white border">
        <caption className="text-lg font-semibold mb-4">
          A list of Member
        </caption>
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
          {memberList &&
            memberList.length > 0 &&
            memberList.map((item) => (
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
                    disabled={deleting === item.id}
                    className={`px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring focus:ring-red-500 focus:outline-none ${
                      deleting === item.id
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {deleting === item.id ? "Deleting..." : "Delete"}
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
