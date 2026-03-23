import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import type { Car } from "../backend.d";
import { useGetAllCars } from "../hooks/useQueries";

const IMAGE_MAP: Record<string, string> = {
  "Ferrari SF90": "/assets/generated/car-ferrari.dim_800x500.jpg",
  "Lamborghini Aventador SVJ":
    "/assets/generated/car-lamborghini.dim_800x500.jpg",
  "McLaren 720S": "/assets/generated/car-mclaren.dim_800x500.jpg",
  "Porsche 911 GT3 RS": "/assets/generated/car-porsche.dim_800x500.jpg",
  "Bugatti Chiron": "/assets/generated/car-bugatti.dim_800x500.jpg",
  "Koenigsegg Regera": "/assets/generated/car-koenigsegg.dim_800x500.jpg",
};

function getCarImage(car: Car): string {
  for (const [key, val] of Object.entries(IMAGE_MAP)) {
    if (car.name.includes(key.split(" ")[0]) || car.name === key) return val;
  }
  return car.imageUrl || "/assets/generated/car-ferrari.dim_800x500.jpg";
}

const FALLBACK_CARS: Car[] = [
  {
    id: 1n,
    name: "Ferrari SF90 Stradale",
    brand: "Ferrari",
    engine: "V8 Hybrid",
    horsepower: 986n,
    topSpeed: 211n,
    zeroToSixty: "2.5s",
    description:
      "Ferrari's most powerful road car ever built, combining a twin-turbo V8 with three electric motors for breathtaking hybrid performance.",
    imageUrl: "",
  },
  {
    id: 2n,
    name: "Lamborghini Aventador SVJ",
    brand: "Lamborghini",
    engine: "V12",
    horsepower: 759n,
    topSpeed: 217n,
    zeroToSixty: "2.8s",
    description:
      "The naturally aspirated Aventador SVJ — the fastest Lamborghini road car ever created, with active aerodynamics that generate extreme downforce.",
    imageUrl: "",
  },
  {
    id: 3n,
    name: "McLaren 720S",
    brand: "McLaren",
    engine: "V8 Twin-Turbo",
    horsepower: 710n,
    topSpeed: 212n,
    zeroToSixty: "2.9s",
    description:
      "Breathtaking aerodynamic efficiency combined with a powerful twin-turbocharged V8 — the McLaren 720S is pure engineering artistry.",
    imageUrl: "",
  },
  {
    id: 4n,
    name: "Porsche 911 GT3 RS",
    brand: "Porsche",
    engine: "Flat-6",
    horsepower: 525n,
    topSpeed: 184n,
    zeroToSixty: "3.2s",
    description:
      "Track-bred aerodynamics and a naturally aspirated flat-six engine deliver an exhilarating high-revving driving experience unlike any other.",
    imageUrl: "",
  },
  {
    id: 5n,
    name: "Bugatti Chiron",
    brand: "Bugatti",
    engine: "W16 Quad-Turbo",
    horsepower: 1479n,
    topSpeed: 261n,
    zeroToSixty: "2.4s",
    description:
      "The most powerful, fastest, and most luxurious production car ever built. The Bugatti Chiron is the pinnacle of automotive perfection.",
    imageUrl: "",
  },
  {
    id: 6n,
    name: "Koenigsegg Regera",
    brand: "Koenigsegg",
    engine: "V8 Hybrid",
    horsepower: 1500n,
    topSpeed: 255n,
    zeroToSixty: "2.8s",
    description:
      "A revolutionary gearbox-free hybrid hypercar capable of 0-249 mph in 20 seconds — the Regera redefines what a road car can be.",
    imageUrl: "",
  },
];

const SKELETON_KEYS = ["sk-1", "sk-2", "sk-3", "sk-4", "sk-5", "sk-6"];

function CarCard({ car, index }: { car: Car; index: number }) {
  const image = getCarImage(car);
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1B2831 0%, #151F26 100%)",
        borderRadius: "8px",
        border: "1px solid rgba(34,50,61,0.8)",
      }}
      data-ocid={`collection.item.${index + 1}`}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: "62.5%" }}
      >
        <img
          src={image}
          alt={car.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(21,31,38,0.8) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-3 right-3 text-[10px] font-bold tracking-[0.15em] px-2.5 py-1"
          style={{
            background: "linear-gradient(135deg, #1E63FF, #0F4FD6)",
            borderRadius: "3px",
            color: "#fff",
          }}
        >
          {car.brand.toUpperCase()}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-display font-bold text-white text-base tracking-tight">
          {car.name}
        </h3>
        <p
          className="text-[11px] font-semibold tracking-[0.12em] uppercase"
          style={{ color: "rgba(169,180,189,0.7)" }}
        >
          {car.engine} &nbsp;·&nbsp; {car.horsepower.toString()} HP
          &nbsp;·&nbsp; {car.topSpeed.toString()} MPH
        </p>
        <p
          className="text-xs leading-relaxed flex-1"
          style={{ color: "rgba(169,180,189,0.65)" }}
        >
          {car.description.length > 100
            ? `${car.description.slice(0, 100)}…`
            : car.description}
        </p>
        <button
          type="button"
          className="mt-1 self-start text-[11px] font-bold tracking-[0.15em] px-5 py-2.5 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            border: "1px solid rgba(30,99,255,0.5)",
            borderRadius: "3px",
            color: "#5d8fff",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(30,99,255,0.15)";
            e.currentTarget.style.borderColor = "rgba(30,99,255,0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(30,99,255,0.5)";
          }}
          data-ocid={`collection.item.${index + 1}`}
        >
          VIEW DETAILS
        </button>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  const { data: cars, isLoading } = useGetAllCars();
  const displayCars = (cars && cars.length > 0 ? cars : FALLBACK_CARS).slice(
    0,
    6,
  );

  return (
    <section
      id="collection"
      className="py-24"
      style={{ background: "#0B1217" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p
            className="text-[10px] font-semibold tracking-[0.35em] mb-4"
            style={{ color: "rgba(93,143,255,0.9)" }}
          >
            HANDPICKED HYPERCARS
          </p>
          <h2
            className="font-display font-bold uppercase text-white mb-4"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              letterSpacing: "0.05em",
            }}
          >
            OUR EXCLUSIVE COLLECTION
          </h2>
          <div
            className="mx-auto mt-4"
            style={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(90deg, #1E63FF, #0F4FD6)",
            }}
          />
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SKELETON_KEYS.map((k) => (
              <div
                key={k}
                className="rounded-lg overflow-hidden"
                data-ocid="collection.loading_state"
              >
                <Skeleton className="h-52 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-3 w-full" />
                  <Skeleton className="h-8 w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {displayCars.map((car, i) => (
              <CarCard key={car.id.toString()} car={car} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
