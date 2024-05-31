"use client";
import React, { useState, useEffect } from "react";

const ContentsPage: React.FC = () => {
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
    <div>
      <div style={{ height: "7vw" }}></div>
      <div className="contents-top flex flex-col justify-center items-center text-center">
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
      <div className="top-contents">
        <div className="mt-10" />
        <div className="text-center text-2xl sm:text-1xl xl:text-xl ">
          <h2 className="font-bold">お仕事事例</h2>
          <span
            style={{
              borderBottom: "2px solid orange",
              display: "inline-block",
              width: "2em",
            }}
          ></span>
        </div>
        <div className="mt-20" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/contents-top-top.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col">
              <h3>お弁当配送</h3>
              <br />
              <p>
                個人の働き方に合わせた半日案件など！
                <br />
                初心者でも安心。特殊なスキル、経験は必要ありません！
                <br />
                <br />
                シフトは毎週提出で自分の時間を確保できます。
                <br />
                都内中心部の飲食店などでお弁当をピックアップして、企業様へ納品します。
                <br />
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #DFDFDF",
                    padding: "13.5px 20px",
                    marginTop: "20px",
                    borderRadius: "5px",

                    width: "300px",
                  }}
                >
                  <p>件数：4～6件</p>
                  <p>集荷1～3件＋納品3～5件</p>
                  <p>時間帯：8:00～13:00</p>
                </div>
              </div>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/contents-top-top.jpg" /> : <div />}
        </div>
        <div className="mt-20" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/content-top-middle.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col">
              <h3>ネット受注商品の宅配サービス</h3>
              <br />
              <p>
                ネットで注文された商品を個人のご自宅にお届けする仕事です。
                <br />
                <br />
                店舗で荷物を積み、2時間で4件～6件の配送をしていただきます。
                配達エリアを分担しますので、無理なく配送できる環境となっております。
                <br />
                <br />
                特殊なスキル、経験は必要ありません！
                携帯電話のナビを見て目的地までいければ大丈夫。
                お客様はリピーターが多いので、業務をこなしていくうちに土地勘も身につきます。
                <br />
                <br />
                充実の研修制度あり。
                <br />
                稼げるまで先輩ドライバーがサポートいたします。
                <br />
                安定した高収入が目指せます！
                <br />
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #DFDFDF",
                    padding: "13.5px 20px",
                    marginTop: "20px",
                    borderRadius: "5px",

                    width: "300px",
                  }}
                >
                  <p>時間帯：9:30～20:00</p>
                  <p>業務日：週5日稼働（シフト制）</p>
                </div>
              </div>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/content-top-middle.jpg" /> : <div />}
        </div>
        <div className="mt-20" />
        <div
          className={windowWidth >= 1025 ? "flex" : "flex flex-col"}
          style={{ justifyContent: "center" }}
        >
          {windowWidth >= 1025 ? (
            <img
              src="/content-top-bottom.jpg"
              className="mr-10"
              style={{ maxWidth: "432px", maxHeight: "324px" }}
            />
          ) : (
            <div />
          )}
          <div className="contents">
            <div className="flex flex-col">
              <h3>企業配送・ルート配送</h3>
              <br />
              <p>
                企業様へ納品 毎日決まった企業様への配達です。
                納品先の変動が少ないので慣れれば早めに終業できます！
                運送業界では珍しい土日祝休みによりお休みが決まっているので先々の予定が立てやすいです！
                <br />
                <br />
                納品先事例（病院、薬局、飲食店、アミューズメント施設など）が配送先になります。
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    border: "1px solid #DFDFDF",
                    padding: "13.5px 20px",
                    marginTop: "20px",
                    borderRadius: "5px",
                    width: "300px",
                  }}
                >
                  <p>時間帯：8:00～17:00</p>
                  <p>・完全週休2日制（土曜・日曜・祝日）</p>
                  <p>・年末年始休暇</p>
                  <p>・GW休暇</p>
                </div>
              </div>
            </div>
          </div>
          {windowWidth < 1025 ? <img src="/content-top-bottom.jpg" /> : <div />}
        </div>
      </div>
    </div>
  );
};

export default ContentsPage;
