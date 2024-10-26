"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SingleImage from "./SingleImage";
import useGetAllGallery from "@/context/useGetAllGallery";
import { Loading } from "@/Loading";

const GalleryComponent = () => {
  const router = useRouter();

  const [gallery, loading] = useGetAllGallery();
  // const filteredGallery = gallery.filter(
  //   (image) => ![1, 2, 3].includes(image.id)
  // );
  const displayedImages = gallery.slice(0, 3);

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="font-bold text-2xl text-green-700 text-center mb-8 tracking-wide">
        GALLERY
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedImages.map((image) => (
            <SingleImage
              key={image.id}
              imageUrl={image.url}
              description={image.description}
            />
          ))}
        </div>
      )}
      <div className="text-center mt-8">
        <Button
          onClick={() => router.push("gallery")}
          className="font-semibold rounded-full px-6 py-2 text-white bg-orange-600 border border-green-500"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

export default GalleryComponent;
