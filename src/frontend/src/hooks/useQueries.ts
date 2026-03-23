import { useQuery } from "@tanstack/react-query";
import type { Car } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllCars() {
  const { actor, isFetching } = useActor();
  return useQuery<Car[]>({
    queryKey: ["cars"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCars();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetCarById(id: bigint) {
  const { actor, isFetching } = useActor();
  return useQuery<Car>({
    queryKey: ["car", id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error("No actor");
      return actor.getCarById(id);
    },
    enabled: !!actor && !isFetching,
  });
}
