import Image from 'next/image';
import React from 'react';

const AboutTable = () => {
  const members = [
    { name: "भारतेंद्र कुमार अग्रवाल ' राजू '", designation: 'संस्थापक राष्ट्रीय अध्यक्ष', photo: `/Images/main/भारतेंद्र कुमार अग्रवाल ' राजू '.jpg` }, // Ensure this path is correct
    { name: 'अतुल अग्रवाल', designation: 'संस्थापक सदस्य/राष्ट्रीय उपाध्यक्ष', photo: '/Images/main/अतुल अग्रवाल.jpg' },
    { name: 'सुधीर कुमार अग्रवाल', designation: 'संस्थापक सदस्य/राष्ट्रीय उपसचिव', photo: '/Images/main/सुधीर कुमार अग्रवाल.jpg' }, // Ensure this path is correct
    { name: 'C.A. नितिन अग्रवाल', designation: 'संस्थापक सदस्य/राष्ट्रीय आय व्यय निरीक्षक', photo: '/Images/main/C.A. नितिन अग्रवाल.jpg' }, // Ensure this path is correct
    { name: 'आनंद अग्रवाल', designation: 'संस्थापक सदस्य/राष्ट्रीय सचिव', photo: '/Images/main/आनंद अग्रवाल.jpg' }, // Ensure this path is correct
    { name: 'पुष्पेन्द्र कुमार गोयल', designation: 'संस्थापक सदस्य/राष्ट्रीय कोषाध्यक्ष', photo: '/Images/main/पुष्पेन्द्र कुमार गोयल.jpg' }, // Ensure this path is correct
    { name: 'जैनेन्द्र अग्रवाल', designation: 'सॉफ्टवेयर विकास टीम के प्रमुख', photo: '/Images/main/Jainendra Agrawal.jpg' }, // Ensure this path is correct
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Team Members</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Designation</th>
              <th className="py-2 px-4 border-b">Photo</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{member.name}</td>
                <td className="py-2 px-4 border-b">{member.designation}</td>
                <td className="py-2 px-4 border-b">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      className="w-16 h-16 object-cover rounded-full mx-auto"
                      width={64} // Ensure width is set for the Image component
                      height={64} // Ensure height is set for the Image component
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                      <span>No Image</span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AboutTable;
