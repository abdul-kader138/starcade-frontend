import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import type { Route } from "../+types/Home";
import Lang from "../../lang/lang";
import { Helper } from "../../utils/helper";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.login },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.login,
    },
  ];
}

export default function Login() {
  const { validateEmail, BASE_API } = new Helper();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const message = sessionStorage.getItem("success_message");
    if (message) {
      toast.success(sessionStorage.getItem("success_message"), {
        duration: 2000,
      });
      sessionStorage.removeItem("success_message");
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setError(Lang.invalid_fields);
      return false;
    }
    if (!validateEmail(email)) {
      setError(Lang.invalid_email);
      return false;
    }
    setLoading(true);
    try {
      const response = await fetch(`${BASE_API}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || Lang.invalid_email_password);
      sessionStorage.setItem("success_message", Lang.login_success);
      window.location.href = "/dashboard";
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center mx-4 my-8 py-4 bg-gray-900 rounded-lg">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/*Left Section (Welcome Message with button beside text) */}
        <div className="hidden md:flex w-full md:w-1/2 p-6 flex-col justify-center items-center bg-gray-700 text-white">
          <h2 className="text-lg font-light text-center">{Lang.welcome_to}</h2>
          <h1 className="text-4xl font-bold mt-2 text-center">{Lang.title}</h1>
          <p className="text-gray-300 mt-2 text-center font-light">
            {Lang.login_page_text}
          </p>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-full md:w-1/2 p-8 md:p-10 bg-gray-800">
          {/* Logo */}
          <div className="flex justify-center">
            <img src="/fxrumble.svg" alt="Starcade" className="h-12" />
          </div>

          <h2 className="text-xl text-center text-red-500 font-bold mt-4">
            {Lang.login}
          </h2>
          <Toaster position="top-right" reverseOrder={false} />
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
          {/* Input Fields */}
          <form onSubmit={handleSubmit} className="mt-2">
            <div className="mb-3 relative">
              {/*Email Input with Correct Icon */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pr-12 bg-gray-700 text-white text-sm rounded-lg outline-none border border-gray-600 focus:border-red-500"
              />
              {/* Email Icon (Envelope Icon) */}
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h16v16H4zM22 6l-10 7L2 6"
                />
              </svg>
            </div>

            <div className="mb-4 relative">
              {/* Password Input with Correct Eye Icon */}
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-12 bg-gray-700 text-sm text-white rounded-lg outline-none border border-gray-600 focus:border-red-500"
              />
              {/* Eye Icon for Password Visibility */}
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm9 0c-3 7-9 9-9 9s-6-2-9-9c3-7 9-9 9-9s6 2 9 9z"
                />
              </svg>
            </div>

            {/* Remember Me & Login Button */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  className="form-checkbox text-red-500 bg-gray-700 border-gray-500 rounded"
                />
                <span className="ml-2 text-sm">{Lang.remember_me}</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:bg-red-600 text-white py-3 cursor-pointer rounded-lg font-bold text-sm flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <FaSpinner className="animate-spin mr-2 text-xl" />
              ) : (
                "🔒 " + Lang.login
              )}
            </button>

            {/* Forgot Password & Sign Up */}
            <div className="text-center mt-4">
              <a
                href="/forgot-password"
                className="text-red-500 hover:underline text-sm"
              >
                {Lang.forgot_password + " "}?
              </a>
              <p className="text-gray-500 mt-2 text-sm">
                {Lang.no_account + " "}
                <a href="/registration" className="text-white hover:underline">
                  {Lang.sign_up_now}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
