import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import type { Route } from "../+types/Home";
import Lang from "../../lang/lang";
import { Helper } from "../../utils/helper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.reset_password },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.reset_password,
    },
  ];
}

export default function ResetPassword() {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { validateTextLength, BASE_API } = new Helper();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError(Lang.invalid_fields);
      return false;
    }
    if (!validateTextLength(password, 6)) {
      setError(Lang.invalid_password);
      return false;
    }
    if (password !== confirmPassword) {
      setError(Lang.password_not_matched);
      return false;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}/auth/reset-password`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword: password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      sessionStorage.setItem("success_message", Lang.password_update_success);
      navigate("/login");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#000f26] flex items-center justify-center p-4">
      <Toaster position="top-right" />
      <form className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-3xl">
        <div className="text-center mb-6">
          <img
            src="/images/logos/starcade-logo.png"
            alt="Logo"
            className="mx-auto h-9 w-auto"
          />
          <h5 className="text-md font-bold text-white my-6">
            {Lang.reset_password}
          </h5>
        </div>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <input
          type="password"
          placeholder={Lang.new_password}
          className="w-full p-3 rounded bg-gray-700 text-sm mb-4 focus:border-blue-500 text-white border border-gray-600 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={Lang.confirm_password}
          className="w-full p-3 rounded bg-gray-700 text-sm mb-4 focus:border-blue-500 text-white border border-gray-600 outline-none"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="button"
          disabled={loading}
          onClick={handleResetPassword}
          className="w-full py-3 text-sm bg-[#113861] hover:bg-[#3b4e64] text-white font-semibold rounded cursor-pointer mb-3 flex items-center justify-center"
        >
          {loading ? (
            <FaSpinner className="animate-spin text-xl" />
          ) : (
            Lang.continue
          )}
        </button>
      </form>
    </div>
  );
}
