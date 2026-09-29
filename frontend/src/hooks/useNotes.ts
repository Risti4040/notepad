import { useQuery } from "@tanstack/react-query";
import { getUserNotes } from "../lib/api";

export const useUserNotes = () => {
  const result = useQuery({ queryKey: ["Notes"], queryFn: getUserNotes });
  return result;
};
