"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import urlApi from "@/utils/api";

const AddGallery = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!image || !description) {
      setMessage("Please add an image and a description.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("description", description);

    try {
      const response = await fetch(
        "https://backend.aggrabandhuss.org/api/gallery",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setMessage("Image uploaded successfully!");
        setIsSuccess(true);
        setImage(null);
        setDescription("");
      } else {
        setMessage("Failed to upload the image.");
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage("Error occurred while uploading.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-10 mt-30">
      <h2 className="text-2xl font-extrabold text-green-600 mb-6 text-center">
        Add to Gallery
      </h2>

      <form onSubmit={handelSubmit} className="space-y-6">
        <div className="flex flex-col items-center">
          <Label className="block mb-2 text-sm font-medium text-gray-700">
            Upload Image
          </Label>
          <Input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium text-gray-700">
            Description
          </Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
            placeholder="Enter description"
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 focus:ring focus:ring-green-500 focus:outline-none ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Uploading..." : "Upload Image"}
          </Button>
        </div>

        {message && (
          <p
            className={`text-center text-sm mt-4 ${
              isSuccess ? "text-blue-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddGallery;
