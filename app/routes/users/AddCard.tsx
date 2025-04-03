import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { authLoader } from "~/hooks/useAuthUser";
import Lang from "~/lang/lang";
import type { Route } from "../+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.add_card },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.add_card },
  ];
}

export default function AddCard() {
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    authLoader();
    const message = sessionStorage.getItem("success_message");
    if (message) {
      toast.success(message, { duration: 2000 });
      sessionStorage.removeItem("success_message");
    }
  }, []);

  const handleChange = (e: any) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const validateCard = () => {
    const numberRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvcRegex = /^\d{3,4}$/;

    if (!numberRegex.test(card.number.replace(/\s/g, ""))) {
      setError(Lang.card_minimum_digit);
      return false;
    }

    if (!expiryRegex.test(card.expiry)) {
      setError(Lang.card_expiry_date);
      return false;
    }

    if (!cvcRegex.test(card.cvc)) {
      setError(Lang.card_cvc_minimum_digit);
      return false;
    }

    if (!card.name.trim()) {
      setError(Lang.card_name_error);
      return false;
    }
    return true;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!validateCard()) return;
    // simulate success
    toast.success("Card Added Successfully!");
    setError("");
    setCard({ number: "", expiry: "", cvc: "", name: "" });
  };

  return (
    <div className="bg-[#0f172a] flex items-center py-15 justify-center px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-[#1e293b] text-white rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h3 className="text-lg font-bold text-center text-red-500 mb-6">
          {Lang.add_card}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            name="number"
            placeholder="1234 1234 1234 1234"
            value={card.number}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md outline-none placeholder-gray-400 text-sm"
            required
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="expiry"
              placeholder="MM / YY"
              value={card.expiry}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md outline-none placeholder-gray-400 text-sm"
              required
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={card.cvc}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 bg-[#0f172a] border border-gray-600 rounded-md outline-none placeholder-gray-400 text-sm"
              required
            />
          </div>
          <input
            type="text"
            name="name"
            placeholder="Add Card Name"
            value={card.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-md outline-none placeholder-gray-400 text-sm"
            required
          />
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 text-sm cursor-pointer rounded-md bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold transition"
          >
            {Lang.add_card}
          </button>
        </form>
      </div>
    </div>
  );
}
