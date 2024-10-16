import Image from "next/image";
import gallery1 from "../../public/images/gallery1.png";
import gallery2 from "../../public/images/gallery2.png";
import { Button } from "../ui/button";

const Gallery = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h2 className="font-bold text-2xl text-green-700 text-center mb-8 tracking-wide">
        GALLERY
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group">
          <Image
            src={gallery1}
            alt="gallery1"
            className="w-10/12 md:w-10/12 h-auto mx-auto rounded-md shadow-md transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        <div className="group">
          <Image
            src={gallery2}
            alt="gallery2"
            className="w-10/12 md:w-10/12 h-auto mx-auto rounded-md shadow-md transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="text-center mt-8">
        <Button className="font-semibold rounded-full px-6 py-2 text-white bg-orange-600 border border-green-500">
          View More
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
