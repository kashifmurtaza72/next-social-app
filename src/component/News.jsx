"use client";
import React, { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);
  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/us.json")
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url} className="py-2">
          <h2 className="text-lg font-semibold text-justify">
            {article.title}
          </h2>
          <p className="text-justify">{article.description}</p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold underline"
          >
            Read More
          </a>
        </div>
      ))}
    </div>
  );
}
