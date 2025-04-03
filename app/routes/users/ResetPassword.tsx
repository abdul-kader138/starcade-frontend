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
    <div className="mx-4 my-8 py-4 bg-gray-900 text-white flex justify-center items-center">
      <Toaster position="top-right" />
      <form className="bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-lg text-center mb-2 pb-2 text-red-500 font-bold">
          {Lang.reset_password}
        </h2>
        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-3 rounded bg-gray-700 text-sm text-white mb-4 border border-gray-600 focus:border-red-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full p-3 rounded bg-gray-700 text-sm text-white mb-4 border border-gray-600 focus:border-red-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button
          type="button"
          disabled={loading}
          onClick={handleResetPassword}
          className="w-full bg-gradient-to-r from-red-500 to-orange-500 cursor-pointer flex justify-center items-center hover:bg-red-600 text-sm font-semibold py-2 rounded"
        >
          {loading ? (
            <FaSpinner className="animate-spin mr-2 text-xl" />
          ) : (
            Lang.reset_password
          )}
        </button>
      </form>
    </div>
  );
}
