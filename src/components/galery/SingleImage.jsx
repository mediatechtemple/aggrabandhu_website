import Image from "next/image";

const SingleImage = ({ imageUrl, description }) => {
  return (
    <div className="group">
      <Image
        src={`https://backend.aggrabandhuss.org${imageUrl}`}
        alt={description}
        width={300}
        height={250}
        className=" mx-auto rounded-md shadow-md transform transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

export default SingleImage;
