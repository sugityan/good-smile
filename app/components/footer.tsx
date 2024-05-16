import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        <img src="/nav-logo.jpg" alt="会社ロゴ" className="mb-4" />
        <h2 className="text-xl font-bold">株式会社GoodSmile</h2>
        <p>〒132-0035 東京都江戸川区平井5-23-13 ハイツ桑岡405</p>
        <p>電話番号: 03-6826-2229</p>
        <p>代表者名: 横山 将</p>
        <p>資本金: 100万円</p>
        <p>設立年月日: 2023年11月7日</p>
        <p>事業内容: 軽貨物運送業</p>
        <p>保有資格: 貨物軽自動車運送</p>
      </div>
    </footer>
  );
};

export default Footer;
