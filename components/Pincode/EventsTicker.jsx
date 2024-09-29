'use client';
import { useState, useEffect } from 'react';

const EventsTicker = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Events items
  const eventsItems = [
    'Event 1: Community Meetup on Saturday...',
    'Event 2: Charity Run next Sunday...',
    'Event 3: Tech Conference in December...',
    'Event 4: Music Festival coming soon...',
    'Event 5: Art Exhibition next month...',
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowPopup(true);
  };

  useEffect(() => {
    const ticker = document.getElementById('ticker');
    let offset = 0;
    const scrollEvents = () => {
      offset += 1; // Move one pixel up
      if (offset >= ticker.scrollHeight / 2) { // Reset offset when it reaches halfway
        offset = 0;
      }
      ticker.style.transform = `translateY(-${offset}px)`;
    };

    const interval = setInterval(scrollEvents, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-32 w-full overflow-hidden border-2 border-gray-300 bg-white">
      <div id="ticker" className="absolute top-0 w-full">
        {/* Repeat events list for seamless scrolling */}
        {[...eventsItems, ...eventsItems].map((event, index) => (
          <div
            key={index}
            className="cursor-pointer py-2 px-4 border-b border-gray-200 hover:bg-gray-100"
            onClick={() => handleEventClick(event)}
          >
            {event}
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Event Detail</h2>
            <p>{selectedEvent}</p>
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

export default EventsTicker;
