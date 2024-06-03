"use client";
import React, { useState, useEffect } from "react";
import "../styles/news.css";

const MainContent = () => {
  return (
    <main className={"news-mainContent"}>
      <div style={{ height: "7vw" }}></div>
      <section className={"news-newsHeader"}>
        <div className="news-top flex flex-col justify-center items-center text-center">
          <div
            className="py-4"
            style={{
              backgroundColor: "#FFFFFFCC",
              width: "60%",
              maxWidth: "500px",
            }}
          >
            <h2>事業内容</h2>
            <p>Business</p>
          </div>
        </div>
      </section>
      <section className={"news-newsContent"}>
        <article className={"news-article"}>
          <h3>2024.02.16 ホームページを公開しました</h3>
          <p>
            この度、公式ホームページを公開いたしました。今後は本ホームページにおいて、各種情報を発信して参ります。
          </p>
          <p>
            よろしくお願い申し上げます。ぜひホームページのブックマークをお願いいたします。
          </p>
          <p>カテゴリー: お知らせ</p>
        </article>
        <aside className={"news-sidebar"}>
          <div className={"news-search"}>
            <label htmlFor="search">記事検索</label>
            <input type="text" id="search" />
          </div>
          <div className={"news-recentArticles"}>
            <h4>最新記事</h4>
            <ul>
              <li>
                <a href="#">ホームページを公開しました</a>
              </li>
            </ul>
          </div>
          <div className={"news-categories"}>
            <h4>カテゴリー</h4>
            <ul>
              <li>
                <a href="#">お知らせ (1)</a>
              </li>
              <li>
                <a href="#">その他 (0)</a>
              </li>
            </ul>
          </div>
          <div className={"news-archive"}>
            <h4>アーカイブ</h4>
            <ul>
              <li>
                <a href="#">2024年02月 (1)</a>
              </li>
            </ul>
          </div>
          <div className={"news-rss"}>
            <h4>RSSフィード</h4>
            <a href="#">RSS 2.0</a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default MainContent;
