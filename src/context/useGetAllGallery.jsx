"use client";
import urlApi from "@/utils/api";
import { useEffect, useState } from "react";

const useGetAllGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGallery = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${urlApi}/gallery`);
        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.log("Error in GetAllGallery: ", error);
      } finally {
        setLoading(false);
      }
    };

    getGallery();
  }, []);

  return [gallery, loading];
};

export default useGetAllGallery;
