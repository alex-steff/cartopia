import { Fuel, Gauge, MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { redirect } from "next/navigation";
import { Skeleton } from "./ui/skeleton";

interface CardDisplayProps {
  listing: {
    id: number;
    title: string;
    price: number;
    mileage: number;
    location?: string;
    fuelType: string;
    year: number;
    image?: string;
    condition: string;
  };
}

export function CardDisplay({ listing }: CardDisplayProps) {
  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg">
      <CardContent
        className="flex flex-col p-0"
        onClick={() => redirect(`/listing/${listing.id}`)}
      >
        {listing.image ? (
          <Image
            src={listing.image}
            alt={listing.title}
            width={500}
            height={192}
            className="h-48 w-full rounded-xl object-cover"
          />
        ) : (
          <Skeleton className="h-48 w-full rounded-xl" />
        )}

        <div className="p-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl">{listing.title}</h1>
            <Button variant="outline" className="rounded-xl">
              {listing.condition}
            </Button>
          </div>
          <h1 className="text-xl font-bold">${listing.price}</h1>

          <Separator className="my-3" />

          <div className="grid grid-cols-2 gap-2 pb-2">
            <div className="flex flex-row items-center gap-2">
              <Gauge size={18} />
              <p className="text-sm">{listing.mileage}km</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <MapPin size={18} />
              <p className="text-sm">{listing.location}</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Fuel size={18} />
              <p className="text-sm">{listing.fuelType}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}