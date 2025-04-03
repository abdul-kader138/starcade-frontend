import { useEffect, useState } from "react";
import { Helper } from "~/utils/helper";
import Lang from "../lang/lang";
import type { Route } from "./+types/Home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: Lang.title + " - " + Lang.school },
    { name: "description", content: Lang.welcome_fx + " - " + Lang.school },
  ];
}

export default function School() {
  const { BASE_API } = new Helper();
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // Fetch articles from API
    fetch(`${BASE_API}/articles`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Failed to fetch articles:", error));
  }, []);

  return (
    <>
      {/* Article List Section */}
      <div className="py-5 px-6">
        <h5 className="text-lg font-bold text-center text-white">
          {Lang.latest_articles}
        </h5>

        {/* Article Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                {/* Article Image */}
                <div className="relative">
                  <img
                    src={
                      article?.photo?.original
                        ? `${article?.photo?.original}`
                        : "/images/default-article.png"
                    }
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {new Date(article.created_at).toLocaleDateString()}
                  </span>
                </div>

                {/* Article Content */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href={`/article/${article.id}`}
                      className="text-red-400 hover:text-red-300 text-sm font-semibold"
                    >
                      {Lang.read_more} →
                    </a>

                    {/* Video Icon */}
                    {article.video_url && (
                      <a
                        href={article.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-gray-100 text-sm flex items-center"
                      >
                        🎥 {Lang.watch_video}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-3">
              {Lang.no_articles_found}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section */}
    </>
  );
}
