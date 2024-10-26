"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export function CardWithForm({ scrollPosition = 1, newsData }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    // Handle scroll animation frame
    const scrollLoop = () => {
      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;

        // Scroll the content up by scrollPosition each frame
        scrollContainer.scrollTop += scrollPosition;

        // Reset to the top smoothly when reaching near the end
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          scrollContainer.scrollTop = 0; // Reset to create loop effect
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    // Start loop
    animationFrameId = requestAnimationFrame(scrollLoop);

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [scrollPosition]);

  return (
    <Card className="w-full md:w-9/12 bg-gray-100 shadow-lg border border-gray-200 rounded-lg mb-3">
      <CardContent
        className="max-h-[300px] overflow-y-auto scrollbar-hide px-4 py-2"
        ref={scrollRef}
      >
        {newsData && newsData.length > 0 ? (
          [...newsData, ...newsData].map((news, index) => (
            <div key={`${news.id}-${index}`} className="py-3 border-b border-gray-200">
              <span className="font-semibold">{news.id}:</span>{" "}
              <span className="font-semibold text-md pr-2">{news.title}</span>
              <span className="text-lg">{news.content}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No updates available</p>
        )}
      </CardContent>
    </Card>
  );
}
