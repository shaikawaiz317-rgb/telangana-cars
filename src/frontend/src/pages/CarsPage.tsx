import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { motion } from "motion/react";
import { useMemo, useState } from "react";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

type Brand = "All" | "Maruti" | "Hyundai" | "Tata" | "Kia" | "Honda";
type CarType = "All" | "Hatchback" | "Sedan" | "SUV";
type Fuel = "All" | "Petrol" | "Diesel" | "CNG";

export default function CarsPage() {
  const [brand, setBrand] = useState<Brand>("All");
  const [carType, setCarType] = useState<CarType>("All");
  const [fuel, setFuel] = useState<Fuel>("All");

  const filtered = useMemo(() => {
    return cars.filter((c) => {
      if (brand !== "All" && c.brand !== brand) return false;
      if (carType !== "All" && c.type !== carType) return false;
      if (fuel !== "All" && c.fuel !== fuel) return false;
      return true;
    });
  }, [brand, carType, fuel]);

  return (
    <main className="pt-20 min-h-screen bg-background">
      <section
        className="py-14 text-white text-center"
        style={{ backgroundColor: "oklch(0.08 0.006 265)" }}
        data-ocid="cars.section"
      >
        <h1 className="text-3xl lg:text-5xl font-bold uppercase tracking-tight">
          Our Cars
        </h1>
        <p className="text-gray-400 mt-2">
          Find your perfect car — new & certified pre-owned
        </p>
      </section>

      <section className="py-8 sticky top-16 lg:top-20 z-30 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500">
              <Search className="w-4 h-4" />
              <span className="text-sm font-medium">Filter:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Select value={brand} onValueChange={(v) => setBrand(v as Brand)}>
                <SelectTrigger className="w-36" data-ocid="cars.brand.select">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Brands</SelectItem>
                  <SelectItem value="Maruti">Maruti</SelectItem>
                  <SelectItem value="Hyundai">Hyundai</SelectItem>
                  <SelectItem value="Tata">Tata</SelectItem>
                  <SelectItem value="Kia">Kia</SelectItem>
                  <SelectItem value="Honda">Honda</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={carType}
                onValueChange={(v) => setCarType(v as CarType)}
              >
                <SelectTrigger className="w-36" data-ocid="cars.type.select">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Types</SelectItem>
                  <SelectItem value="Hatchback">Hatchback</SelectItem>
                  <SelectItem value="Sedan">Sedan</SelectItem>
                  <SelectItem value="SUV">SUV</SelectItem>
                </SelectContent>
              </Select>

              <Select value={fuel} onValueChange={(v) => setFuel(v as Fuel)}>
                <SelectTrigger className="w-36" data-ocid="cars.fuel.select">
                  <SelectValue placeholder="Fuel" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Fuels</SelectItem>
                  <SelectItem value="Petrol">Petrol</SelectItem>
                  <SelectItem value="Diesel">Diesel</SelectItem>
                  <SelectItem value="CNG">CNG</SelectItem>
                </SelectContent>
              </Select>

              {(brand !== "All" || carType !== "All" || fuel !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setBrand("All");
                    setCarType("All");
                    setFuel("All");
                  }}
                  data-ocid="cars.reset.button"
                  className="text-sm px-4 py-2 rounded-lg border border-border text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors"
                >
                  Clear
                </button>
              )}
            </div>
            <span className="text-xs text-gray-400 ml-auto">
              {filtered.length} cars found
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div
              className="text-center py-20 text-gray-400"
              data-ocid="cars.empty_state"
            >
              <p className="text-lg font-medium">No cars match your filter.</p>
              <p className="text-sm mt-1">Try adjusting the filters above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((car, i) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                >
                  <CarCard car={car} index={i} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
