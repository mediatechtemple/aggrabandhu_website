'use client'
import React, { useState } from 'react';
import data from '@/utils/member';

export default function DonationList() {
  // State for filters
  const [filters, setFilters] = useState({
    name: '',
    code: '',
    startDate: '',
    endDate: '',
  });

  // Handler for filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filtered data based on state
  const filteredData = data.filter((row) => {
    const matchesName = row.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesCode = row.code.toLowerCase().includes(filters.code.toLowerCase());
    const matchesDate = (!filters.startDate || new Date(row.dateOfRegistration) >= new Date(filters.startDate)) &&
                        (!filters.endDate || new Date(row.dateOfRegistration) <= new Date(filters.endDate));

    return matchesName && matchesCode && matchesDate;
  });

  return (
    <div className="p-5">
      <header className="mb-5">
        <h1 className="text-2xl font-bold mb-4 bg-green-400 text-white text-center">Member List</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-green-400">Filter</h2>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              placeholder="Filter by Name"
              value={filters.name}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:w-1/3"
            />
            <input
              type="text"
              name="code"
              placeholder="Filter by Code"
              value={filters.code}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:w-1/3"
            />
            <input
              type="date"
              name="startDate"
              placeholder="Start Date"
              value={filters.startDate}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:w-1/3"
            />
            <input
              type="date"
              name="endDate"
              placeholder="End Date"
              value={filters.endDate}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:w-1/3"
            />
          </div>
        </div>
      </header>

      <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
  <thead>
    <tr>
      <th className="px-6 py-3 bg-green-400 text-white border border-gray-300 text-center">State</th>
      <th className="px-6 py-3  bg-green-400 text-white border border-gray-300 text-center">District</th>
      <th className="px-6 py-3  bg-green-400 text-white border border-gray-300 text-center">Pincode</th>
      <th className="px-6 py-3  bg-green-400 text-white border border-gray-300 text-center">Name</th>
      <th className="px-6 py-3  bg-green-400 text-white border border-gray-300 text-center">Code</th>
      <th className="px-6 py-3  bg-green-400 text-white border border-gray-300 text-center">Date of Registration</th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((row, index) => (
      <tr key={index}>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.state}</td>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.district}</td>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.pincode}</td>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.name}</td>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.code}</td>
        <td className="px-6 py-4 border border-gray-300 text-center">{row.dateOfRegistration}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
}
