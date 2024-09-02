"use client";
import React, { useState, ChangeEvent, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import "../styles/contact.css";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "仕事を依頼したい",
    inquiry: "",
  });
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // URLSearchParams を使用してクエリパラメータを作成
    const searchParams = new URLSearchParams(formData as any);
    <Suspense>router.push(`/confirm?${searchParams.toString()}`);</Suspense>;

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
      <section className={"contact-contactInfo"}>
        <h2>お電話でのお問い合わせ</h2>
        <p>TEL: 03-6826-2229</p>
        <p>受付時間: 9:00〜17:00（土日・祝日休み）</p>
      </section>
      <section className={"contact-formSection"}>
        <h2>フォームでのお問い合わせ</h2>
        <div className={"contact-buttons"}>
          <button className={"contact-button"}>企業の方はこちら</button>
          <button className={"contact-button"}>個人の方はこちら</button>
        </div>
      </section>
      <section className={"contact-form"}>
        <h2>企業の方向けフォーム</h2>
        <p>
          下記は、メールでのお問い合わせフォームとなっております。
          <br />
          <br />
          なお、メールフォームでご連絡いただいてから返信まで、数日かかる場合もございます。
          <br />
          <br />
          お急ぎの方は、お電話でのご連絡をお願いいたします。
          <br />
          <br />
          お問い合わせの際は
          <Link href="/policy" className="text-blue-500 underline">
            個人情報保護方針
          </Link>
          をお読みになり、同意のうえご記入ください。
        </p>
        <form onSubmit={handleSubmit}>
          <div className={"contact-formGroup"}>
            <label htmlFor="name">
              お名前 <span className={"contact-required"}>必須</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="例：サンプル 太郎"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="email">
              メールアドレス <span className={"contact-required"}>必須</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="例：sample@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="phone">電話番号</label>
            <input
              type="tel"
              id="phone"
              placeholder="例：03-0000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="inquiryType">
              お問い合わせ種類 <span className={"contact-required"}>必須</span>
            </label>
            <select
              id="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
            >
              <option value="仕事を依頼したい">仕事を依頼したい</option>
              <option value="仕事を受けたい">仕事を受けたい</option>
              <option value="その他">その他</option>
            </select>
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="inquiry">
              お問い合わせ内容 <span className={"contact-required"}>必須</span>
            </label>
            <textarea
              id="inquiry"
              placeholder="お問い合わせ内容をご入力ください。"
              required
              value={formData.inquiry}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className={"contact-formGroup"}>
            <label>
              <span className={"contact-privacyPolicy"}>
                <Link href="/policy" className="text-blue-500 underline">
                  個人情報保護方針
                </Link>
                をお読みになり、ご了承いただける場合は、下記にチェックをお願いします。
              </span>
              <input type="checkbox" required />
            </label>
          </div>
          <button type="submit" className={"contact-submitButton"}>
            入力内容を確認する
          </button>
        </form>
        {status && <p>{status}</p>}
      </section>
      <div className="bg-[#fffbf4]">
        <section className={"contact-form"}>
          <h2>個人の方向けフォーム</h2>
          <p>
            下記は、メールでのお問い合わせフォームとなっております。
            <br />
            <br />
            なお、メールフォームでご連絡いただいてから返信まで、数日かかる場合もございます。
            <br />
            <br />
            お急ぎの方は、お電話でのご連絡をお願いいたします。
            <br />
            <br />
            お問い合わせの際は
            <Link href="/policy" className="text-blue-500 underline">
              個人情報保護方針
            </Link>
            をお読みになり、同意のうえご記入ください。
          </p>
          <form onSubmit={handleSubmit}>
            <div className={"contact-formGroup"}>
              <label htmlFor="name">
                お名前 <span className={"contact-required"}>必須</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="例：サンプル 太郎"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={"contact-formGroup"}>
              <label htmlFor="email">
                メールアドレス <span className={"contact-required"}>必須</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="例：sample@example.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className={"contact-formGroup"}>
              <label htmlFor="phone">電話番号</label>
              <input
                type="tel"
                id="phone"
                placeholder="例：03-0000-0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={"contact-formGroup"}>
              <label htmlFor="inquiryType">
                お問い合わせ種類{" "}
                <span className={"contact-required"}>必須</span>
              </label>
              <select
                id="inquiryType"
                required
                value={formData.inquiryType}
                onChange={handleChange}
              >
                <option value="仕事を依頼したい">仕事を依頼したい</option>
                <option value="仕事を受けたい">仕事を受けたい</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <div className={"contact-formGroup"}>
              <label htmlFor="inquiry">
                お問い合わせ内容{" "}
                <span className={"contact-required"}>必須</span>
              </label>
              <textarea
                id="inquiry"
                placeholder="お問い合わせ内容をご入力ください。"
                required
                value={formData.inquiry}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={"contact-formGroup"}>
              <label>
                <span className={"contact-privacyPolicy"}>
                  <Link href="/policy" className="text-blue-500 underline">
                    個人情報保護方針
                  </Link>
                  をお読みになり、ご了承いただける場合は、下記にチェックをお願いします。
                </span>
                <input type="checkbox" required />
              </label>
            </div>
            <button type="submit" className={"contact-submitButton"}>
              入力内容を確認する
            </button>
          </form>
          {status && <p>{status}</p>}
        </section>
      </div>
    </div>
  );
};

export default Contact;
