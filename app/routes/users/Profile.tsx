import { useEffect, useState } from "react";
import { FaEdit, FaSpinner } from "react-icons/fa";
import type { Route } from "../+types/Home";
import { authLoader } from "../../hooks/useAuthUser";
import Lang from "../../lang/lang";
import { useUser } from "../../provider/userContext";
import { Helper } from "../../utils/helper";
import { io } from "socket.io-client";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.profile },
    {
      name: "description",
      content: Lang.welcome_fx + " - " + Lang.profile,
    },
  ];
}

export default function Profile() {
  const { user } = useUser();
  const { BASE_API, handleClickRedirect,BASE_WEBSOCKET } = new Helper();
  const [profileImage, setProfileImage] = useState("images/male.png");
  const [walletBalance, setWalletBalance] = useState(100); 

  useEffect(() => {
    authLoader();
  
    if (user?.photo_id) {
      setProfileImage(
        `${BASE_API}/photos/${user.photo_id}/small` || "images/male.png"
      );
    }
  }, [user]);
  
  useEffect(() => {
    if (!user) return;
    const socket = io(BASE_WEBSOCKET);
    const handleWalletUpdate = (data:any) => {
      if (data.userId === user.id) {
        setWalletBalance(data.balance);
      }
    };
    socket.on("walletUpdated", handleWalletUpdate);
  
    return () => {
      socket.off("walletUpdated", handleWalletUpdate);
      socket.disconnect();
    };
  }, [user?.id]);
  

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <FaSpinner className="animate-spin text-gray-300 text-4xl" />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white">
      {/* Profile Header */}
      <div
        className="relative w-full text-left p-6 md:p-6 z-10"
        style={{
          clipPath:
            "polygon(0% 20%, 10% 15%, 20% 10%, 30% 5%, 40% 0%, 50% 2%, 60% 5%, 70% 10%, 80% 15%, 90% 20%, 100% 25%, 100% 100%, 0% 100%)",
          background: "linear-gradient(#283445,#1d2838, #263142, #233759)",
          boxShadow: "0px 12px 30px rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Left - User Info */}
          <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 text-center md:text-left">
            <img
              src={profileImage}
              alt="User Avatar"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-gray-600 object-cover shadow-2xl"
            />
            <div className="mt-3 md:mt-0">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-300 flex items-center justify-center md:justify-start">
                <span className="mr-2 text-sm">✉</span>
                {user.email}
              </p>
            </div>
          </div>

          {/* Right - Edit Button */}
          <button
            onClick={() => handleClickRedirect("/edit-profile")}
            className="bg-gradient-to-r from-red-500 to-orange-500 px-2 py-1 text-sm rounded-md flex cursor-pointer items-center shadow-md hover:bg-red-600 transition transform hover:scale-110"
          >
            <FaEdit className="mr-1" /> {Lang.edit}
          </button>
        </div>

        {/* About Me Section (Inside Header) */}
        <div className="max-w-4xl mx-auto px-6 mt-1">
          <div className="p-2 md:p-2">
            <h3 className="text-red-500 text-md font-bold">{Lang.about_me}</h3>
            <p className="text-white text-xs">{user.about_me}</p>
          </div>
        </div>
      </div>

      {/* Main Content - Tournaments & Wallet */}
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Playing Tournament Section (Left) */}
        <div className="md:col-span-2">
          <h3 className="text-red-500 text-md font-bold py-2">
            {Lang.playing_tournament}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              (item) => (
                <div
                  key={item}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-lg hover:bg-gray-600 transition transform hover:scale-110 shadow-lg overflow-hidden"
                >
                  <div className="relative w-full h-full flex cursor-pointer items-center justify-center">
                    <img
                      src="/images/banner_fxrumble.jpg"
                      alt="game"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Wallet Section (Right) */}
        <div className="bg-gray-800 p-6 md:p-8 rounded-md mt-4 md:mt-1 mx-1 shadow-xl h-52 hover:shadow-2xl transition transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h3 className="text-red-500 text-md font-bold">{Lang.walet}</h3>
          </div>
          <p className="text-xs text-white">{Lang.balance}</p>
          <h2 className="text-xl font-bold">FX {walletBalance}</h2>

          {/* Buttons */}
          <div className="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 px-1.5 py-1 text-sm rounded-md shadow-md hover:bg-red-600 transition transform hover:scale-110">
              {Lang.withdrwal}
            </button>
            <button
              onClick={() => handleClickRedirect("/add-card")}
              className="bg-gray-700 px-1.5 text-sm py-1 cursor-pointer rounded-md shadow-md hover:bg-gray-600 transition transform hover:scale-110"
            >
              {Lang.add_more}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
