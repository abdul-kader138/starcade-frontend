import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Lang from "~/lang/lang";
import { Helper } from "~/utils/helper";
import type { Route } from "../+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.ongoing_tournamenst },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.ongoing_tournamenst,
    },
  ];
}

export default function OnGoingTournaments() {
  const { mockTournaments, handleClickRedirect } = new Helper();
  const [tournaments, setTournaments]: any = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // authLoader();
    setTournaments(mockTournaments);
    const message = sessionStorage.getItem("success_message");
    if (message) {
      toast.success(message, { duration: 2000 });
      sessionStorage.removeItem("success_message");
    }
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white px-4 py-10 relative">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-[#334155] rounded-xl max-w-xl w-full p-6 relative shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h3 className="text-md font-bold text-center mb-6">
              {Lang.select_tournament}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div
                className="bg-black rounded-lg p-4 cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  handleClickRedirect("club-tournament");
                }}
              >
                <img
                  src="/images/club.png"
                  alt="Club"
                  className="w-full h-24 object-contain"
                />
              </div>
              <div
                className="bg-black rounded-lg p-4 cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  setShowModal(false);
                  toast.success("HEADS UP Tournament Selected");
                }}
              >
                <img
                  src="/images/heads_up.png"
                  alt="Heads Up"
                  className="w-full h-24 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {tournaments && (
        <div className="max-w-6xl mx-auto">
          <div className="text-md font-bold mb-6 flex text-white justify-center">
            {Lang.ongoing_tournamenst}
          </div>

          <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-700">
            <table className="min-w-full bg-[#1e293b] text-sm">
              <thead className="bg-[#111827] text-gray-300 uppercase text-left text-xs">
                <tr>
                  <th className="py-3 px-4">{Lang.tournament_name}</th>
                  <th className="py-3 px-4">{Lang.total_participants}</th>
                  <th className="py-3 px-4">{Lang.people_joined}</th>
                  <th className="py-3 px-4">{Lang.start_time}</th>
                  <th className="py-3 px-4">{Lang.status}</th>
                </tr>
              </thead>
              <tbody>
                {tournaments.map((t: any, idx: any) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-700 hover:bg-gray-800 transition text-xs"
                  >
                    <td className="py-3 px-4">{t.name}</td>
                    <td className="py-3 px-4">{t.players}</td>
                    <td className="py-3 px-4">{t.created_by}</td>
                    <td className="py-3 px-4">{t.created_at}</td>
                    <td className="py-3 px-4">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-3 py-1 rounded-md shadow-md">
                        {t.status === "expired" ? "Expired" : "Active"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Create Now Button */}
          <div className="flex justify-center mt-10">
            <button
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 cursor-pointer hover:to-blue-700 px-5 py-2 rounded-md text-white text-sm font-semibold shadow-md"
              onClick={() => setShowModal(true)}
            >
              {Lang.create_now}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
