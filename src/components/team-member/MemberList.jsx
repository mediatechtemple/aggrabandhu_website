import Image from "next/image";

const MemberList = ({ name, designation, image }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative p-1 rounded-full shadow-2xl">
        <Image
          src={`https://backend.aggrabandhuss.org${image}`}
          alt="Profile Picture"
          className="rounded-full w-36 h-36"
          width={144}
          height={144}
        />
      </div>
      <h1 className="font-bold text-green-700 text-lg text-center mt-6">
        {name}
      </h1>
      <p className="font-semibold text-green-700 mt-0">{designation}</p>
    </div>
  );
};

export default MemberList;
