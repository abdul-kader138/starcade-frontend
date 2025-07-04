import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaSpinner,
  FaSteam,
} from "react-icons/fa";
import type { Route } from "../+types/Home";
import Lang from "../../lang/lang";
import { Helper } from "../../utils/helper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.registration },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.registration,
    },
  ];
}

export default function Register() {
  const { BASE_API, validateTextLength, validateEmail, handleClickRedirect } =
    new Helper();
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!firstName || !lastName || !email || !password) {
      setError(Lang.invalid_fields);
      return false;
    }
    if (!validateTextLength(firstName, 2) || !validateTextLength(lastName, 2)) {
      setError(Lang.first_last_name_size_validation);
      return false;
    }
    if (!validateEmail(email)) {
      setError(Lang.invalid_email);
      return false;
    }
    if (!validateTextLength(password, 6)) {
      setError(Lang.invalid_password);
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e: any) => {
    if (!validateForm()) return;
    setLoading(true);

    try {
      const response = await fetch(`${BASE_API}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || Lang.registration_failed_mesage);
      sessionStorage.setItem("success_message", Lang.account_create_mesage);
      handleClickRedirect("/login");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#000f26] flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-3xl">
        {/* Increase max-w-3xl to max-w-4xl and padding */}
        <div className="text-center mb-6">
          <img
            src="/images/logos/starcade-logo.png"
            alt="Logo"
            className="mx-auto h-9 w-auto"
          />
          <h5 className="text-lg font-bold text-white mt-6">{Lang.login}</h5>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </div>
        <Toaster position="top-right" reverseOrder={false} />
        <form>
          {/* First Name */}
          <div className="mb-3">
            <input
              type="text"
              placeholder={Lang.first_name}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-full outline-none border border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <input
              type="text"
              placeholder={Lang.last_name}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-full outline-none border border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              type="email"
              placeholder={Lang.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-full outline-none border border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              placeholder={Lang.password}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-full outline-none border border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 text-sm bg-[#113861] hover:bg-[#3b4e64] text-white font-semibold rounded-full cursor-pointer mb-3 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin text-xl" />
            ) : (
              Lang.sign_up_image
            )}
          </button>
        </form>
        <div className="flex justify-center gap-2 mb-4">
          <a href={`${BASE_API}/auth/facebook`} title="Login with GitHub">
            <FaFacebook
              title="Google"
              className="text-gray-300 text-xl m-1 cursor-pointer hover:scale-110 transition"
            />
          </a>
          <a href={`${BASE_API}/auth/steam`} title="Login with GitHub">
            <FaSteam
              title="Steam"
              className="text-gray-300 text-xl m-1 cursor-pointer hover:scale-110 transition"
            />
          </a>
          <a href={`${BASE_API}/auth/google`} title="Login with GitHub">
            <FaGoogle
              title="Google"
              className="text-gray-300 text-xl m-1 cursor-pointer hover:scale-110 transition"
            />
          </a>
          <a href={`${BASE_API}/auth/github`} title="Login with GitHub">
            <FaGithub className="text-gray-300 text-xl m-1 cursor-pointer hover:scale-110 transition" />
          </a>
        </div>

        {/* Already have an account? */}
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm">
            {Lang.already_account + " "}
            <a href="/login" className="text-blue-400 hover:underline">
              {Lang.login}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
