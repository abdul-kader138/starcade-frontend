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
        <div className="text-center mb-6">
          <img
            src="/images/logos/starcade-logo.png"
            alt="Logo"
            className="mx-auto h-9 w-auto"
          />
          <h5 className="text-md font-bold text-white my-6">
            {Lang.forgot_password}
          </h5>
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <input
          type="email"
          placeholder={Lang.enter_email}
          className="w-full mb-3 p-3 bg-gray-700 rounded text-sm focus:border-blue-500 text-white border border-gray-600 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={handleForgotPassword}
          className="w-full py-3 text-sm bg-[#113861] hover:bg-[#3b4e64] text-white font-semibold rounded cursor-pointer mb-3 flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            Lang.continue
          )}
        </button>

        <div className="text-center my-6">
          <a href="/login" className="text-blue-400 hover:underline text-sm">
            {Lang.cancle}
          </a>
        </div>
      </form>
    </div>
  );
}
