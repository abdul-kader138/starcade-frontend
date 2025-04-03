import { useState } from "react";
import { FaEnvelope, FaMinus, FaPlus } from "react-icons/fa";
import { Helper } from "~/utils/helper";

export default function ClubTournamentInvite() {
  const [emails, setEmails] = useState<string[]>([""]);
  const { handleClickRedirect } = new Helper();

  const handleAddEmail = () => {
    setEmails([...emails, ""]);
  };

  const handleRemoveEmail = (index: number) => {
    if (emails.length === 1) return;
    const newEmails = [...emails];
    newEmails.splice(index, 1);
    setEmails(newEmails);
  };

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSubmit = () => {
    console.log("Inviting:", emails);
    // TODO: Send to backend or handle the invitation logic
  };

  return (
    <div className="bg-[#0f172a]  text-white flex items-center justify-center px-4 py-8">
      <div className="bg-[#1e293b] w-full max-w-md p-6 rounded-2xl shadow-xl">
        <h3 className="text-center text-MD font-semibold mb-6">
          Create Club Tournament
        </h3>

        <div className="space-y-4">
          {emails.map((email, index) => (
            <div key={index} className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                placeholder="Email"
                className="w-full p-3 rounded-md bg-[#0f172a] text-sm text-white pr-10"
              />
              <FaEnvelope className="absolute right-10 text-gray-400" />
              {emails.length > 1 ? (
                <button
                  className="ml-2 text-red-400 hover:text-red-600"
                  onClick={() => handleRemoveEmail(index)}
                >
                  <FaMinus />
                </button>
              ) : null}
              {index === emails.length - 1 && (
                <button
                  className="ml-2 text-green-400 hover:text-green-600"
                  onClick={handleAddEmail}
                >
                  <FaPlus />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:to-blue-700 w-full px-3 py-2 rounded-md text-white font-semibold text-sm shadow-md"
          >
            Create Tournament
          </button>
        </div>

        <div className="mt-4 flex">
          <button
            onClick={() => handleClickRedirect("on-going-tournaments")}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:to-orange-600 w-full px-3 py-2 rounded-md text-white font-semibold text-sm shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
