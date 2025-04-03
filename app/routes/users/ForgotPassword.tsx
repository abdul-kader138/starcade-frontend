import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import type { Route } from "../+types/Home";
import Lang from "../../lang/lang";
import { Helper } from "../../utils/helper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.forgot_password },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.forgot_password,
    },
  ];
}

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { validateEmail, BASE_API } = new Helper();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError(Lang.invalid_fields);
      return false;
    }
    if (!validateEmail(email)) {
      setError(Lang.invalid_email);
      return false;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}/auth/forgot-password`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      toast.success(Lang.reset_link);
      setEmail("");
      setError("");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-4 my-8 py-4 text-white flex justify-center items-center">
      <Toaster position="top-right" />
      <form className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-lg text-center mb-2 pb-2 text-red-500 font-bold">
          {Lang.forgot_password}
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 rounded bg-gray-700 text-xs text-white mb-4 border border-gray-600 focus:border-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="button"
          disabled={loading}
          onClick={handleForgotPassword}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer flex justify-center items-center hover:bg-red-600 text-sm font-semibold py-2 rounded"
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2 text-xl" />
          ) : (
            Lang.send_link
          )}
        </button>
      </form>
    </div>
  );
}
