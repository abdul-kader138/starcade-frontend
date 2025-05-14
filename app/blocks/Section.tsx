import Lang from "~/lang/lang";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type SectionProps = {
  sections: {
    id: string | number;
    title: string;
    image: string;
    date: string;
    description: string;
  }[];
};

export default function GameSection({ sections }: SectionProps) {
  return (
    <section className="text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((game: any) => (
          <div
            key={game.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="relative w-full h-52 sm:h-52 lg:h-56">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-opacity-10 p-1 rounded-full">
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="py-4 space-y-2">
              <p className="text-md text-gray-300">{game.date}</p>
              <h2 className="text-3xl font-bold">{game.title}</h2>
              <p className="text-md text-gray-400 leading-snug">
                {game.description}
              </p>
              <button className="mt-3 px-4 py-1.5 border rounded-full border-white text-white text-sm hover:bg-white hover:text-black transition">
                {Lang.open}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
