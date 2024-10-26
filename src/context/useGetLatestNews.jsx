"use client";
import urlApi from "@/utils/api";
import { useEffect, useState } from "react";

const useGetLatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLatestNews = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(`${urlApi}/notificationweb`);
        const response = await apiResponse.json();
        setLatestNews(response.data);
      } catch (error) {
        console.log("Error in GetLatestNew: ", error);
      } finally {
        setLoading(false);
      }
    };

    getLatestNews();
  }, []);

  return [latestNews, loading];
};
export default useGetLatestNews;
