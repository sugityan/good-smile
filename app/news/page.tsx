"use client";
import React, { useState, useEffect } from "react";
import "../styles/MainContent.css";

const MainContent = () => {
  return (
    <main className={"maincontents-mainContent"}>
      <section className={"maincontents-newsHeader"}>
        <h2>新着情報</h2>
        <div className={"maincontents-newsBanner"}>
          <img src="/path/to/banner.jpg" alt="News Banner" />
        </div>
      </section>
      <section className={"maincontents-newsContent"}>
        <article className={"maincontents-article"}>
          <h3>2024.02.16 ホームページを公開しました</h3>
          <p>
            この度、公式ホームページを公開いたしました。今後は本ホームページにおいて、各種情報を発信して参ります。
          </p>
          <p>
            よろしくお願い申し上げます。ぜひホームページのブックマークをお願いいたします。
          </p>
          <p>カテゴリー: お知らせ</p>
        </article>
        <aside className={"maincontents-sidebar"}>
          <div className={"maincontents-search"}>
            <label htmlFor="search">記事検索</label>
            <input type="text" id="search" />
          </div>
          <div className={"maincontents-recentArticles"}>
            <h4>最新記事</h4>
            <ul>
              <li>
                <a href="#">ホームページを公開しました</a>
              </li>
            </ul>
          </div>
          <div className={"maincontents-categories"}>
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
          <div className={"maincontents-archive"}>
            <h4>アーカイブ</h4>
            <ul>
              <li>
                <a href="#">2024年02月 (1)</a>
              </li>
            </ul>
          </div>
          <div className={"maincontents-rss"}>
            <h4>RSSフィード</h4>
            <a href="#">RSS 2.0</a>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default MainContent;
