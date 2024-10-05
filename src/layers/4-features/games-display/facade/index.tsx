const featuredGames = [
  "Valorant",
  "League of Legends",
  "Apex Legends",
  "Call of Duty",
  "Fortnite",
  "CS:GO",
];

export const GamesDisplay = () => {
  return (
    <section className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Featured Games</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {featuredGames.map((game) => (
          <span
            key={game}
            className="bg-gray-700 px-4 py-2 rounded-full text-sm"
          >
            {game}
          </span>
        ))}
      </div>
    </section>
  );
};
