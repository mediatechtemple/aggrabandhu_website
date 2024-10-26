"use client";
import urlApi from "@/utils/api";
import { useEffect, useState } from "react";

const useGetLatestEvent = () => {
  const [latestEvent, setLatestEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestEvent = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(`${urlApi}/events`);
        const response = await apiResponse.json();
        setLatestEvent(response.data);
      } catch (error) {
        console.log("Error in GetLatestEvent: ", error);
      } finally {
        setLoading(false);
      }
    };

    getLatestEvent();
  }, []);

  return [latestEvent, loading];
};
export default useGetLatestEvent;
