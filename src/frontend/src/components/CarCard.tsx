import { CheckCircle, Fuel, Gauge } from "lucide-react";
import type { CarListing } from "../data/cars";

interface CarCardProps {
  car: CarListing;
  index?: number;
}

const fuelColors: Record<string, string> = {
  Petrol: "bg-blue-100 text-blue-700",
  Diesel: "bg-yellow-100 text-yellow-700",
  CNG: "bg-green-100 text-green-700",
};

export default function CarCard({ car, index = 0 }: CarCardProps) {
  return (
    <div
      data-ocid={`cars.item.${index + 1}`}
      className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="relative overflow-hidden aspect-[3/2]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${fuelColors[car.fuel]}`}
        >
          {car.fuel}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
          {car.name}
        </h3>
        <p
          className="text-xl font-bold mb-3"
          style={{ color: "oklch(0.45 0.195 25)" }}
        >
          {car.price}{" "}
          <span className="text-xs font-normal text-gray-400">onwards</span>
        </p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5" />
            {car.mileage}
          </span>
          <span className="flex items-center gap-1">
            <Fuel className="w-3.5 h-3.5" />
            {car.type}
          </span>
        </div>
        <ul className="space-y-1 mb-4">
          {car.features.map((f) => (
            <li
              key={f}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <CheckCircle
                className="w-3.5 h-3.5 shrink-0"
                style={{ color: "oklch(0.45 0.195 25)" }}
              />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="tel:+919700307460"
          data-ocid={`cars.enquire.button.${index + 1}`}
          className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: "oklch(0.45 0.195 25)" }}
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}
