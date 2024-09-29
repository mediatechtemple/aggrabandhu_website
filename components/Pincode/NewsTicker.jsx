'use client'
import { useState, useEffect } from 'react';

const NewsTicker = () => {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const newsItems = [
    'News 1: Breaking news headline...',
    'News 2: Latest update on the market...',
    'News 3: Sports event highlights...',
    'News 4: New technology trends...',
    'News 5: Health tips for better living...',
  ];

  const handleNewsClick = (news) => {
    setSelectedNews(news);
    setShowPopup(true);
  };

  useEffect(() => {
    const ticker = document.getElementById('ticker');
    let offset = 0;
    const scrollNews = () => {
      offset += 1;
      if (offset >= ticker.scrollHeight) {
        offset = 0;
      }
      ticker.style.transform = `translateY(-${offset}px)`;
    };

    const interval = setInterval(scrollNews, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 w-full overflow-hidden border-2 border-gray-300 bg-white">
      <div id="ticker" className="absolute top-0 w-full">
        {newsItems.map((news, index) => (
          <div
            key={index}
            className="cursor-pointer py-2 px-4 border-b border-gray-200 hover:bg-gray-100"
            onClick={() => handleNewsClick(news)}
          >
            {news}
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">News Detail</h2>
            <p>{selectedNews}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsTicker;
