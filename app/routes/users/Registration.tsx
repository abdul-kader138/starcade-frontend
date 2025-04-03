import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="mx-auto h-16 w-20" />
          <h5 className="text-lg font-bold text-white mt-2">{Lang.sign_up}</h5>
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
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-lg outline-none border border-gray-600 focus:border-blue-500"
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
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-lg outline-none border border-gray-600 focus:border-blue-500"
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
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-lg outline-none border border-gray-600 focus:border-blue-500"
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
              className="w-full p-3 bg-gray-700 text-white text-sm rounded-lg outline-none border border-gray-600 focus:border-blue-500"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full py-3 text-sm bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded cursor-pointer mb-3 flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner className="animate-spin text-xl" />
            ) : (
              Lang.sign_up_image
            )}
          </button>
          
        </form>
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
