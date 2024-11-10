import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api";

export const useGetGames = () => {
  const query = useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });
  return query;
};
