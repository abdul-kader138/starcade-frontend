import axios from "axios";

export class Helper {
  // API Base URL (from environment variables)
  BASE_API = `${import.meta.env.VITE_API_BASE_URL}`;
  BASE_WEBSOCKET = `${import.meta.env.VITE_WEBSOCKET_BASE_URL}`;

  // Axios instance with credentials enabled
  api = axios.create({
    baseURL: this.BASE_API,
    withCredentials: true,
  });

  validateEmail = (email: string) => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      return false;
    }
    return true;
  };

  validateTextLength = (field: string, size: number, type: string = "<") => {
    if (type === "<" && field.length < size) {
      return false;
    } else if (type === ">" && field.length > size) {
      return false;
    } else if (type === "=" && field.length === size) {
      return false;
    }
    return true;
  };

  truncateName = (name: string, maxLength: number = 10) => {
    return name.length > maxLength
      ? name.substring(0, maxLength) + "..."
      : name;
  };

  handleClickRedirect = (name: string) => {
    window.location.href = name;
  };

  /**
   * 🔹 Fetch the authenticated user's data
   */
  async fetchUser() {
    try {
      const response = await this.api.get(`${this.BASE_API}/auth/me`);
      return response.data;
    } catch (error) {
      console.info("Failed to fetch user:", error);
      return null;
    }
  }

  getYouTubeID = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  getValidURL = (videoUrl: string): any => {
    const match = videoUrl.match(
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be|vimeo\.com)\/.+$/
    );
    return match;
  };

  getCurrentYear = (): any => {
    const year = new Date().getFullYear();
    return year;
  };

  /**
   * Extract Vimeo Video ID from URL
   */
  getVimeoID = (url: string): string | null => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  // mock data for on going tournamnest page
  mockTournaments = [
    {
      name: "Club Tournament",
      players: 3,
      created_by: 1,
      created_at: "4/28/2022, 8:25:00 AM",
      status: "expired",
    },
    {
      name: "Club Tournament",
      players: 3,
      created_by: 1,
      created_at: "5/3/2022, 8:38:00 AM",
      status: "expired",
    },
    {
      name: "Club Tournament",
      players: 3,
      created_by: 1,
      created_at: "5/5/2022, 4:58:00 PM",
      status: "expired",
    },
    {
      name: "HeadsUp Tournament",
      players: 3,
      created_by: 1,
      created_at: "5/6/2022, 12:18:00 AM",
      status: "expired",
    },
  ];

  // mock data for game tournamnest and Rules page

  getTournaments() {
    return [
      {
        type: "Knockout Tournament",
        rules: [
          "1v1 elimination format",
          "Each round lasts 1 day",
          "Drawdown above 5% = disqualified",
          "Top 8 move to finals",
        ],
      },
      {
        type: "Demo Duel",
        rules: [
          "Use demo accounts only",
          "No real money risked",
          "Winners receive funded accounts",
          "Leverage capped at 1:50",
        ],
      },
      {
        type: "Speed Trading Challenge",
        rules: [
          "15-minute trading windows",
          "Most profit wins",
          "One entry per day",
          "No bots or automation allowed",
        ],
      },
      {
        type: "Live Trading Marathon",
        rules: [
          "48-hour non-stop live trading",
          "Max 20 trades per account",
          "Leaderboard updates hourly",
          "Must record trading sessions",
        ],
      },
      {
        type: "Scalping Showdown",
        rules: [
          "Focus on fast in-and-out trades",
          "Max 1-minute hold per trade",
          "Spread control required",
          "Ranked on consistency",
        ],
      },
      {
        type: "Crypto Clash",
        rules: [
          "Only crypto pairs allowed",
          "Trade on BTC, ETH, SOL, and ADA",
          "Max leverage 1:20",
          "Daily resets, best 3 days count",
        ],
      },
    ];
  }

  // mock data for game guide page

  howToPlayLink = "https://www.youtube.com/watch?v=8jFreGK27DA";

  ProTipsLink = "https://player.vimeo.com/video/76979871";

  getFAQ = [
    {
      q: "How can I earn rewards?",
      a: "Complete daily challenges & events.",
    },
    {
      q: "Can I play with friends?",
      a: "Yes, invite friends for multiplayer mode.",
    },
    {
      q: "Is there a ranking system?",
      a: "Yes, ranking is based on performance.",
    },
  ];

  getStepByStepGuide = [
    "🎯 Install the game & create an account",
    "🕹️ Complete the tutorial to understand controls",
    "🔥 Explore different game modes & strategies",
    "🏆 Join tournaments & challenge friends",
  ];

  gameProTips = [
    "🚀 Use power-ups strategically",
    "🎭 Watch pro players to learn advanced moves",
    "🛠️ Customize controls for better gameplay",
    "💡 Study opponent strategies to improve",
  ];
}
