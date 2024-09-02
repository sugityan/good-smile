"use client";
import React, { useState, FormEvent, Suspense } from "react";

import "../styles/contact.css";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Confirm = () => {
  const pathname = usePathname();
  const router = useRouter();
  // クエリパラメータからフォームデータを取得
  const name = useSearchParams().get("name");
  const email = useSearchParams().get("email");
  const phone = useSearchParams().get("phone");
  const inquiryType = useSearchParams().get("inquiryType");
  const inquiry = useSearchParams().get("inquiry");

  const handleBack = () => {
    router.back();
  };

  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // try {
    //   const response = await fetch("/api/contact", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json, text/plain",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log("here"); // レスポンスが成功した場合のみ "here" を出力
    //     setStatus("Email sent successfully");
    //   } else {
    //     // エラーレスポンスが JSON 形式でない場合も考慮
    //     try {
    //       const result = await response.json();
    //       setStatus(`Error: ${result.message}`);
    //     } catch (error) {
    //       console.error("Error parsing error response:", error);
    //       setStatus("An error occurred. Please try again later.");
    //     }
    //   }
    // } catch (error) {
    //   console.error("Error sending request:", error);
    //   setStatus("An error occurred. Please try again later.");
    // }
  };

  return (
    <div className={"contact-container"}>
      <div style={{ height: "7vw" }}></div>
      <section className={"contact-banner"}>
        <div className="contact-top flex flex-col justify-center items-center text-center">
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
      <section className={"contact-form"}>
        <h2>送信内容確認</h2>
        <p>以下の内容でよろしければ「送信する」ボタンを押して下さい。</p>

        <form onSubmit={handleSubmit}>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <div className={"contact-formGroup"}>
                <label htmlFor="name">
                  お名前 <p>お名前: {name}</p>
                </label>
              </div>
              <div className={"contact-formGroup"}>
                <label htmlFor="email">
                  メールアドレス <p>{email}</p>
                </label>
              </div>
              <div className={"contact-formGroup"}>
                <label htmlFor="phone">
                  電話番号 <p>{phone}</p>
                </label>
              </div>
              <div className={"contact-formGroup"}>
                <label htmlFor="inquiryType">
                  お問い合わせ種類
                  {inquiryType}
                </label>
              </div>
              <div className={"contact-formGroup"}>
                <label htmlFor="inquiry">
                  お問い合わせ内容 <p>{inquiry}</p>
                </label>
              </div>
            </div>
          </Suspense>
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            戻る
          </button>
          <button type="submit" className="contact-submitButton">
            <Link href="/">送信する</Link>
          </button>
        </form>
        {status && <p>{status}</p>}
      </section>
    </div>
  );
};

export default Confirm;
