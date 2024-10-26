// "use client";
// import { Card, CardContent } from "@/components/ui/card";
// import React from "react";
// import { FaArrowLeft, FaRupeeSign } from "react-icons/fa";
// import { MdAccountBalance, MdOutlineCopyAll } from "react-icons/md";
// import { LuPictureInPicture2 } from "react-icons/lu";
// import { FaWallet } from "react-icons/fa6";
// import { BsImages } from "react-icons/bs";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";

// const page = () => {
//   const copyToClipboard = (text) => {
//     navigator.clipboard
//       .writeText(text)
//       .then(() => {
//         toast.success("Copied to clipboard!");
//       })
//       .catch(() => {
//         toast.error("Failed to copy!");
//       });
//   };
//   return (
//     <div className="mt-20 px-4 md:px-8 py-5">
//       {/* Header Section */}
//       <div className="flex justify-start items-center gap-3 md:gap-4">
//         <FaArrowLeft className="text-xl md:text-2xl cursor-pointer" />
//         <h1 className="font-bold text-xl md:text-2xl">Make Payment</h1>
//       </div>
//       <p className="mt-2 text-sm md:text-base">
//         Please make a donation to the given details
//       </p>

//       {/* Bank Account Details Card */}
//       <Card className="shadow-lg w-full md:w-8/12 lg:w-6/12 border-none mt-4 mx-auto">
//         <CardContent className="p-4">
//           <div className="flex justify-between items-center font-bold">
//             <MdAccountBalance className="text-4xl md:text-6xl text-gray-600" />
//             <div className="text-sm md:text-base space-y-1">
//               <p>Bank Account Number: 123456789</p>
//               <p>Banking Name: Ram Raja</p>
//               <p>Bank Name: Raman Rajan</p>
//               <p>IFSC Code: ABCDE</p>
//             </div>
//             <MdOutlineCopyAll
//               onClick={() =>
//                 copyToClipboard(
//                   "Bank Account Number: 123456789\nBanking Name: Ram Raja\nBank Name: Raman Rajan\nIFSC Code: ABCDE"
//                 )
//               }
//               className="text-3xl md:text-4xl text-gray-600 cursor-pointer"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* UPI Details Card */}
//       <Card className="shadow-lg w-full md:w-8/12 lg:w-6/12 border-none mt-4 mx-auto">
//         <CardContent className="p-4">
//           <div className="flex justify-between items-center font-bold">
//             <LuPictureInPicture2 className="text-4xl md:text-6xl text-gray-600" />
//             <div className="text-sm md:text-base space-y-1">
//               <p>UPI ID: 123456789</p>
//               <p>Name: Ram Raja</p>
//             </div>
//             <MdOutlineCopyAll
//               onClick={() =>
//                 copyToClipboard("UPI ID: 123456789\nName: Ram Raja")
//               }
//               className="text-3xl md:text-4xl text-gray-600 cursor-pointer"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       {/* Payment Details Section */}
//       <div className="flex items-center justify-center mt-6 gap-2">
//         <FaWallet className="text-xl text-gray-600" />
//         <p className="font-bold text-base">Payment Details</p>
//       </div>
//       <p className="mt-1 text-sm md:text-base text-center">
//         After making a donation, please provide us with the transaction details.
//       </p>

//       {/* Form Section */}
//       <form className="mt-4 space-y-4 flex flex-col items-center">
//         {/* Donation Amount Input */}
//         <div className="relative w-full md:w-6/12">
//           <FaRupeeSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
//           <Input
//             type="number"
//             placeholder="Donation Amount"
//             className="pl-10"
//           />
//         </div>

//         {/* Transaction ID Input */}
//         <div className="relative w-full md:w-6/12">
//           <FaWallet className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
//           <Input type="text" placeholder="Transaction ID" className="pl-10" />
//         </div>

//         {/* Upload Screenshot Section */}
//         <div className="flex flex-row justify-evenly items-center gap-4 mt-4 w-full md:w-6/12">
//           <BsImages className="text-5xl font-extrabold text-gray-600" />
//           <div className="text-sm md:text-base text-center">
//             <p>Select payment screenshot</p>

//             <Input id="picture" type="file" />
//           </div>
//         </div>
//         <Button className="bg-orange-600 text-white text-xl font-semibold rounded-lg w-1/2">
//           Submit Details
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default page;




import AddGallery from '@/components/add-Gallery/AddGallery'
import ShowGallery from '@/components/add-Gallery/ShowGallery'
import AddMemberList from '@/components/add-memberList/AddMemberList'
import ShowMemberList from '@/components/add-memberList/ShowMemberList'
import React from 'react'

const PaymentPage = () => {
  return (
    // <div><AddMemberList /><ShowMemberList /></div>
    <div><AddGallery /> <ShowGallery /></div>
  )
}

export default PaymentPage