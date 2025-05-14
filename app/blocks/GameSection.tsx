import { Helper } from "~/utils/helper";
import Lang from "~/lang/lang";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function GameSection() {
  const { gameSections } = new Helper();

  return (
    <section className="ml-14 mr-9 px-10 py-3 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {gameSections.map((game) => (
          <div
            key={game.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-200"
          >
            <div className="relative w-full h-full sm:h-52 lg:h-56">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2  bg-opacity-10 p-1 rounded-full">
                <ArrowTopRightOnSquareIcon className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="p-4 space-y-2">
              <p className="text-sm text-gray-300">{game.date}</p>
              <h3 className="text-lg font-bold">{game.title}</h3>
              <p className="text-sm text-gray-400 leading-snug">
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
