"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export function CardWithForm({ scrollPosition }) {
  const scrollRef = useRef(null);
  useEffect(() => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const scrollContent = () => {
        if (scrollTop + clientHeight >= scrollHeight) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ top: 1, behavior: "smooth" });
        }
      };
      const interval = setInterval(scrollContent, 50);
      return () => clearInterval(interval);
    }
  }, []);
  return (
    <Card className="w-9/12 bg-white border-none mb-3">
      <CardContent
        className="max-h-[300px] overflow-y-auto scrollbar-hide"
        ref={scrollRef}
      >
        <div>
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 4: New technology trends... News 5: Health tips for
          better living... News 1: Breaking news headline... News 2: Latest
          update on the market... News 3: Sports event highlights... News 2:
          Latest update on the market... News 3: Sports event highlights... News
          4: New technology trends... News 5: Health tips for better living...
          News 1: Breaking news headline... News 2: Latest update on the
          market... News 3: Sports event highlights... News 2: Latest update on
          the market... News 3: Sports event highlights... News 4: New
          technology trends... News 5: Health tips for better living... News 1:
          Breaking news headline... News 2: Latest update on the market... News
          3: Sports event highlights... News 2: Latest update on the market...
          News 3: Sports event highlights... News 4: New technology trends...
          News 5: Health tips for better living... News 1: Breaking news
          headline... News 2: Latest update on the market... News 3: Sports
          event highlights... News 2: Latest update on the market... News 3:
          Sports event highlights... News 4: New technology trends... News 5:
          Health tips for better living... News 1: Breaking news headline...
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 2: Latest update on the market... News 3: Sports
          event highlights... News 4: New technology trends... News 5: Health
          tips for better living... News 1: Breaking news headline... News 2:
          Latest update on the market... News 3: Sports event highlights... News
          2: Latest update on the market... News 3: Sports event highlights...
          News 4: New technology trends... News 5: Health tips for better
          living... News 1: Breaking news headline... News 2: Latest update on
          the market... News 3: Sports event highlights... News 2: Latest update
          on the market... News 3: Sports event highlights... News 4: New
          technology trends... News 5: Health tips for better living... News 1:
          Breaking news headline... News 2: Latest update on the market... News
          3: Sports event highlights... News 2: Latest update on the market...
          News 3: Sports event highlights... News 4: New technology trends...
          News 5: Health tips for better living... News 1: Breaking news
          headline... News 2: Latest update on the market... News 3: Sports
          event highlights... News 2: Latest update on the market... News 3:
          Sports event highlights... News 4: New technology trends... News 5:
          Health tips for better living... News 1: Breaking news headline...
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 2: Latest update on the market... News 3: Sports
          event highlights... News 4: New technology trends... News 5: Health
          tips for better living... News 1: Breaking news headline... News 2:
          Latest update on the market... News 3: Sports event highlights... News
          2: Latest update on the market... News 3: Sports event highlights...
          News 4: New technology trends... News 5: Health tips for better
          living... News 1: Breaking news headline... News 2: Latest update on
          the market... News 3: Sports event highlights... News 2: Latest update
          on the market... News 3: Sports event highlights... News 4: New
          technology trends... News 5: Health tips for better living... News 1:
          Breaking news headline... News 2: Latest update on the market... News
          3: Sports event highlights... News 2: Latest update on the market...
          News 3: Sports event highlights... News 4: New technology trends...
          News 5: Health tips for better living... News 1: Breaking news
          headline... News 2: Latest update on the market... News 3: Sports
          event highlights... News 2: Latest update on the market... News 3:
          Sports event highlights... News 4: New technology trends... News 5:
          Health tips for better living... News 1: Breaking news headline...
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 2: Latest update on the market... News 3: Sports
          event highlights... News 4: New technology trends... News 5: Health
          tips for better living... News 1: Breaking news headline... News 2:
          Latest update on the market... News 3: Sports event highlights... News
          2: Latest update on the market... News 3: Sports event highlights...
          News 4: New technology trends... News 5: Health tips for better
          living... News 1: Breaking news headline... News 2: Latest update on
          the market... News 3: Sports event highlights... News 2: Latest update
          on the market... News 3: Sports event highlights... News 4: New
          technology trends... News 5: Health tips for better living... News 1:
          Breaking news headline... News 2: Latest update on the market... News
          3: Sports event highlights... News 2: Latest update on the market...
          News 3: Sports event highlights... News 4: New technology trends...
          News 5: Health tips for better living... News 1: Breaking news
          headline... News 2: Latest update on the market... News 3: Sports
          event highlights... News 2: Latest update on the market... News 3:
          Sports event highlights... News 4: New technology trends... News 5:
          Health tips for better living... News 1: Breaking news headline...
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 2: Latest update on the market... News 3: Sports
          event highlights... News 4: New technology trends... News 5: Health
          tips for better living... News 1: Breaking news headline... News 2:
          Latest update on the market... News 3: Sports event highlights... News
          2: Latest update on the market... News 3: Sports event highlights...
          News 4: New technology trends... News 5: Health tips for better
          living... News 1: Breaking news headline... News 2: Latest update on
          the market... News 3: Sports event highlights... News 2: Latest update
          on the market... News 3: Sports event highlights... News 4: New
          technology trends... News 5: Health tips for better living... News 1:
          Breaking news headline... News 2: Latest update on the market... News
          3: Sports event highlights... News 2: Latest update on the market...
          News 3: Sports event highlights... News 4: New technology trends...
          News 5: Health tips for better living... News 1: Breaking news
          headline... News 2: Latest update on the market... News 3: Sports
          event highlights...
        </div>
      </CardContent>
    </Card>
  );
}
