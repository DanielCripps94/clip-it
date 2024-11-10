import { z } from "zod";

export const gameSchema = z.object({
  id: z.string(),
  name: z.string(),
  label: z.string(),
  imageUrl: z.string().optional(),
});

export const gamesSchema = z.array(gameSchema);

export type Game = z.infer<typeof gameSchema>;

export const getGames = async () => {
  try {
    const response = await fetch("/api/games", {
      method: "GET",
    });
    if (response.ok) {
      const data = await response.json();
      return gamesSchema.parse(data);
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    console.error("Error fetching games:", error);
    throw new Error("Failed to fetch games");
  }
};
