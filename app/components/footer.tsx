import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className={"footer"}>
      <div className={"footer-container"}>
        <div className={"footer-logoSection"}>
          <img src="/nav-logo.jpg" alt="会社ロゴ" className={"footer-logo"} />
          <p className={"footer-companyName"}>株式会社GoodSmile</p>
        </div>
        <div className={"footer-infoSection"}>
          <p>〒132-0035 東京都江戸川区平井5-23-13 ハイツ案岡405</p>
          <p>TEL: 03-6826-2229</p>
          <p>受付時間: 9:00〜17:00（土日・祝日休み）</p>
        </div>
      </div>
      <div className={"footer-bottomBar"}>
        <p>Copyright©2024 株式会社GoodSmile. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
