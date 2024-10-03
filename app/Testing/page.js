'use client'
import React, { useState } from 'react';

const PdfModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open PDF
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <button
              onClick={closeModal}
              className="bg-red-500 text-white px-2 py-1 rounded float-right"
            >
              Close
            </button>
            <iframe
              src="/rules_regulation/Rule & Regulation.pdf"
              width="100%"
              height="500px"
              className="border-2 border-gray-300"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default PdfModal;
