"use client";
import SingleImage from "@/components/galery/SingleImage";
import useGetAllGallery from "@/context/useGetAllGallery";
import { Loading } from "@/Loading";

const GalleryPage = () => {
  const [gallery, loading] = useGetAllGallery();

  const filteredGallery = gallery.filter(
    (image) => ![1, 2, 3].includes(image.id)
  );
  return (
    <div className="p-8 bg-gray-50 mt-20">
      <h2 className="font-bold text-2xl text-green-700 text-center mb-8 tracking-wide">
        GALLERY
      </h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredGallery.map((image) => (
            <SingleImage
              key={image.id}
              imageUrl={image.url}
              description={image.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
