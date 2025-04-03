import { useState } from "react";
import { FaCalendarAlt, FaPen } from "react-icons/fa";
import Lang from "~/lang/lang";
import { Helper } from "~/utils/helper";
import type { Route } from "../+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.club_tournament },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.club_tournament,
    },
  ];
}

export default function ClubTournamentForm() {
  const [fees, setFees] = useState("");
  const [duration, setDuration] = useState("");
  const [participants, setParticipants] = useState("");
  const [datetime, setDatetime] = useState("");
  const [market, setMarket] = useState("");
  const [type, setType] = useState("");
  const { handleClickRedirect } = new Helper();

  return (
    <div className="bg-[#0f172a] text-white flex items-center justify-center px-4 py-8 ">
      <div className="bg-[#1e293b] w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h3 className="text-center text-md mb-6">Heads Up Tournament</h3>

        <div className="space-y-4">
          {/* Tournament Fees */}
          <div className="relative">
            <input
              type="text"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              placeholder="Tournament Fees"
              className="w-full p-3 rounded-md text-sm bg-[#0f172a] text-white pr-10"
            />
            <FaPen className="absolute right-3 top-3.5 text-gray-400" />
          </div>

          {/* Duration */}
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-3 rounded-md bg-[#0f172a] text-sm text-white"
          >
            <option disabled value="">
              Select Tournament Duration
            </option>
            <option>30 minutes</option>
            <option>1 hour</option>
            <option>2 hours</option>
          </select>

          {/* Participants */}
          <select
            value={participants}
            onChange={(e) => setParticipants(e.target.value)}
            className="w-full p-3 rounded-md text-sm bg-[#0f172a] text-white"
          >
            <option disabled value="">
              Select Tournament Participants
            </option>
            <option>2</option>
            <option>4</option>
            <option>8</option>
          </select>

          {/* Date & Time */}
          <div className="relative">
            <input
              type="datetime-local"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
              className="w-full p-3 rounded-md bg-[#0f172a] text-sm text-white pr-10"
            />
            <FaCalendarAlt className="absolute right-3 top-3.5 text-gray-400" />
          </div>

          {/* Tradeable Market */}
          <select
            value={market}
            onChange={(e) => setMarket(e.target.value)}
            className="w-full p-3 rounded-md bg-[#0f172a] text-sm text-white"
          >
            <option disabled value="">
              Tradeable Market
            </option>
            <option>Forex</option>
            <option>Crypto</option>
            <option>Stocks</option>
          </select>

          {/* Tournament Type */}
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-3 rounded-md bg-[#0f172a] text-sm text-white"
          >
            <option disabled value="">
              Select Tournament Type
            </option>
            <option>Club</option>
            <option>Heads Up</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex">
          <button
            onClick={() => handleClickRedirect("invite-user")}
            className="cursor-pointer bg-gradient-to-r w-full text-sm from-blue-500 to-blue-600 hover:to-blue-700 px-5 py-2 rounded-md text-white font-semibold shadow-md"
          >
            Invite
          </button>
        </div>
        <div className="mt-6 flex">
          <button
            onClick={() => handleClickRedirect("on-going-tournaments")}
            className="bg-gradient-to-r w-full text-sm from-red-500 to-orange-500 hover:to-orange-600 cursor-pointer px-5 py-2 rounded-md text-white font-semibold shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
