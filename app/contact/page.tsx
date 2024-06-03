"use client";
import React from "react";
import "../styles/contact.css";

const Contact = () => {
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
        <form>
          <div className={"contact-formGroup"}>
            <label htmlFor="name">
              お名前 <span className={"contact-required"}>必須</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="例：サンプル 太郎"
              required
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
            />
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="phone">電話番号</label>
            <input type="tel" id="phone" placeholder="例：03-0000-0000" />
          </div>
          <div className={"contact-formGroup"}>
            <label htmlFor="inquiryType">
              お問い合わせ種類 <span className={"contact-required"}>必須</span>
            </label>
            <select id="inquiryType" required>
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
            ></textarea>
          </div>
          <div className={"contact-formGroup"}>
            <label>
              <input type="checkbox" required />
              <span className={"contact-privacyPolicy"}>
                <a href="#">個人情報保護方針</a>
                をお読みになり、ご了承いただける場合は、下記にチェックをお願いします。
              </span>
            </label>
          </div>
          <button type="submit" className={"contact-submitButton"}>
            送信
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
