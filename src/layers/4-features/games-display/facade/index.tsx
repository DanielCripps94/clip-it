import { useGetGames } from "@/layers/5-entities/get-games";
import Image from "next/image";
import Link from "next/link";

export const GamesDisplay = () => {
  const { data: games, isLoading } = useGetGames();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!games) {
    return <div>No games found</div>;
  }
  return (
    <section className="text-center space-y-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8 max-w-[1040px] mx-auto">
          {games.map((category) => (
            <div className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
              <Link key={category.id} href={`/category/${category.id}`}>
                <Image
                  src={category.imageUrl || ""}
                  alt={`${category.name} cover`}
                  fill
                  loading={"lazy"}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="text-white text-center font-semibold text-sm sm:text-base">
                    {category.label}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
