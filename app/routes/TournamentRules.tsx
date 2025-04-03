import { useEffect, useState } from "react";
import { FaSpinner, FaTrophy } from "react-icons/fa";
import Lang from "~/lang/lang";
import { Helper } from "~/utils/helper";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.tournaments_rules },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.tournaments_rules,
    },
  ];
}

export default function TournamentRules() {
  const [tournaments, setTournaments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { getTournaments } = new Helper();

  useEffect(() => {
    try {
      setLoading(true);
      setTournaments(getTournaments());
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <FaSpinner className="animate-spin mr-2 text-xl" />
      </div>
    );
  }

  if (error || !tournaments.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h3 className="text-lg font-bold text-red-500">{Lang.no_data_found}</h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h3 className="text-lg md:text-lg font-extrabold text-center my-6 bg-white text-transparent bg-clip-text">
          ⚔️ {Lang.tournament_types}
        </h3>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="relative bg-[#1E293B] border border-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              {/* Floating Icon */}
              <div className="absolute -top-6 -right-6 bg-blue-500 p-4 rounded-full shadow-lg z-10">
                <FaTrophy className="text-white text-md" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-md font-bold text-blue-300 mb-3">
                  {tournament.type}
                </h3>
                <ul className="list-disc pl-5 text-slate-300 text-sm space-y-1">
                  {tournament.rules.map((rule: string, idx: number) => (
                    <li key={idx}>{rule}</li>
                  ))}
                </ul>

                {/* Optional Tag */}
                <div className="mt-4 inline-block px-3 py-1 text-xs text-white border border-blue-500 rounded-full bg-blue-500/10">
                  {tournament.type.includes("Live")
                    ? Lang.live_event
                    : Lang.game_mode}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
