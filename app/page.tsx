"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableRow } from "@tremor/react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    // コンポーネントがマウントされたときにウィンドウの幅を設定し、
    // ウィンドウのサイズが変更されたときに更新するリスナーを追加します
    handleResize();
    window.addEventListener("resize", handleResize);

    // コンポーネントがアンマウントされたときにリスナーをクリーンアップします
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="homepage-top flex flex-col justify-center items-center">
        <img className="w-1/5 " src="/nav-logo-first.png" alt="Image" />
        <div className="pt-10" />
        <p className=" text-white text-center">
          あなたの満足がここにある
          <br />
          笑顔を運ぶ、運送会社
        </p>
      </div>
      <div></div>

      <div className="home-greeting">
        <div className="text-center text-2xl sm:text-1xl xl:text-xl ">
          <div className="pt-10"></div>
          <h2 className="text-3xl font-bold">代表挨拶</h2>
          <span
            style={{
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "2em",
            }}
          ></span>
          <div className="pt-10"></div>
          <p>
            創業以来、私は「全てはお客様へのお役立ちの為に」「スタッフは家族」という信念を掲げてきました。
            <br />
            もちろんそれは今でも変わりませんが、これからの時代は広い視野を持ち、時代の変化に合わせて、多様化するお客様のニーズへ最適なサービスを提供できる会社を目指します。
            <br />
            また働き方の多様化に伴い、従業員の働きやすい環境作りに取り組んでいます。
            <br />
            お客様・従業員など、弊社に関わるすべての方々の明日の笑顔の為に、これからも全力で走り続けますので何卒よろしくお願いいたします。
            <br />
          </p>
        </div>
      </div>
      <div className="mt-10" />
      <div className="home-advantage">
        <div className="mt-10" />
        <div>
          <h2 className="text-3xl font-bold">当社の強み</h2>
          <span
            style={{
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "2em",
            }}
          ></span>
        </div>
        <div className="mt-10" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/features01.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col" style={{ width: 480 }}>
              <h3>豊富な配送案件で貴方の働きたいをサポート</h3>
              <p>
                弊社では様々な配送案件を取り揃えております。
                <br />
                がっつり稼ぎたい方・自分のペースで働きたい方・空いた隙間時間で働きたい方。
                <br />
                皆様が理想とする働き方を徹底的にサポートいたします。
                <br />
              </p>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/features01.jpg" /> : <div />}
        </div>
        <div className="mt-10" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/features02.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col" style={{ width: 480 }}>
              <h3>入会金や加盟金などの費用負担はありません</h3>
              <p>
                配送を開始する方への入会金や加盟金などの費用負担は一切ありません。
                <br />
                もちろん、指定の配送備品を購入する必要もないので、低リスクでお仕事を始めることができます。
                <br />
                弊社には社会労務士が在籍しており、社会保険や厚生年金等のサポートが可能です。
                <br />
                また、保険の代理店でもあるため、ワンストップで保険の相談ができます。
                <br />
                その他にも、ドライバー様に対し様々なサポートをいたします。
                <br />
              </p>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/features02.jpg" /> : <div />}
        </div>
        <div className="mt-10" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/features03.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col" style={{ width: 480 }}>
              <h3>業界未経験でも問題ありません</h3>
              <p>
                運送業未経験でも全く問題ありません！
                <br />
                弊社在籍のドライバーのおよそ半数が未経験者からスタートしております。
                <br />
                車の運転ができ、やる気があれば、多くの未経験者が3～6ヶ月でプロドライバーに成長していきます。
                <br />
                また、弊社には昇進制度があります。
                <br />
                リーダードライバー、教育担当ドライバーへキャリアアップして報酬を上げましょう！
                <br />
                社員登用の実績もあります。
                <br />
              </p>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/features03.jpg" /> : <div />}
        </div>
        <div className="mt-10" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/features04.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col" style={{ width: 480 }}>
              <h3>企業様と一緒にチャレンジしてその先の「笑顔」を</h3>
              <p>
                軽貨物運送会社は、今まで「運ぶ事」しか行ってきませんでした。
                <br />
                しかし私達は、ただ「運ぶ事」のみから脱却し、プラスαの「付加価値」をご提案する事で、企業様の物流へより貢献し、更に新たな市場を創る事ができると考えています。
                <br />
                弊社は配送プラスαの提案力が強みです。
                <br />
                運送のプロの観点から、既存のお取引先企業様の物流コストの削減や、配送の更なる効率化を図り、運送だけでなく＋αの業務負担軽減など、企業様に合わせて最適な提案をしてきた確かな経験と実績があります。
                <br />
                企業様の物流や、その先の目標へ向かって常に一緒にチャレンジして行き、相互で成長し、笑いあえるような物流企業を目指しています。
                <br />
                昨今の日本では環境問題・高齢化社会・物価上昇など苦しい状況が続いていますが、苦しい時代の今だからこそ「笑顔」が一番必要なのだと弊社は考えております。
                <br />
              </p>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/features04.jpg" /> : <div />}
        </div>
      </div>
      <div className="mt-10" />
      <div className="home-news">
        <div className="title">
          <h2 className="text-3xl font-bold">新着情報</h2>
          <span
            style={{
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "2em",
            }}
          ></span>
        </div>
        <div className="news-links"></div>
        <div className="mt-10" />
        <div className="news-button">
          <button className="btn" style={{ backgroundColor: "#F99607" }}>
            一覧はこちら
          </button>
        </div>
      </div>
      <div className="mt-10" />
      <div className="home-company">
        <div className="title">
          <h2 className="text-3xl font-bold text-center">会社概要</h2>
          <span
            style={{
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "2em",
            }}
          ></span>
        </div>
        <div className="flex justify-center items-center">
          <div className="contents">
            <div className="company-info">
              <div className="flex justify-center items-center">
                <Table className="table">
                  <TableBody>
                    <TableRow>
                      <TableCell className="table-cell">社名</TableCell>
                      <TableCell className="table-cell">
                        株式会社GoodSmile
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">所在地</TableCell>
                      <TableCell className="table-cell">
                        〒132-0035 東京都江戸川区平井5-23-13 ハイツ桑岡405
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">電話番号</TableCell>
                      <TableCell className="table-cell">03-6826-2229</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">代表者名</TableCell>
                      <TableCell className="table-cell">横山 将</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">資本金</TableCell>
                      <TableCell className="table-cell">100万円</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">設立年月日</TableCell>
                      <TableCell className="table-cell">
                        2023年11月7日
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">事業内容</TableCell>
                      <TableCell className="table-cell">軽貨物運送業</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="table-cell">保有資格</TableCell>
                      <TableCell className="table-cell">
                        貨物軽自動車運送
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
