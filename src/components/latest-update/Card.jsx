import * as React from "react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";


export function CardWithForm() {
  return (
    <Card className="w-[350px] bg-white border-none">
      <CardContent>
        <div>
          News 2: Latest update on the market... News 3: Sports event
          highlights... News 4: New technology trends... News 5: Health tips for
          better living... News 1: Breaking news headline... News 2: Latest
          update on the market... News 3: Sports event highlights...
        </div>
      </CardContent>
    </Card>
  );
}
