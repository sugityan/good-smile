import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, inquiryType, inquiry } = formData;

    // 1. 環境変数の確認
    if (!process.env.GMAILUSER || !process.env.GMAILPASSWORD) {
      console.error("Gmail credentials not set in environment variables.");
      return new Response(
        JSON.stringify({ message: "Internal server error" }),
        { status: 500 }
      );
    }

    // 2. Transporterの作成 (SMTP設定) - Gmailの場合
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // または465(SSL)
      secure: false, // 587の場合はfalse, 465の場合はtrue
      auth: {
        user: process.env.GMAILUSER,
        pass: process.env.GMAILPASSWORD,
      },
    });

    // 3. メールオプションの設定
    const mailOptions = {
      from: email,
      to: email,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Inquiry Type: ${inquiryType}
        Inquiry: ${inquiry}
      `,
    };

    // 4. メール送信
    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully"); // 成功メッセージをコンソールに出力

    // 5. 成功レスポンス
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    // 6. エラーハンドリング
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

// export default async (req, res) => {
//   console.log("aa");
//   if (req.method === "POST") {
//     const { name, email, phone, inquiryType, inquiry } = req.body;

//     if (!process.env.GMAILUSER || !process.env.GMAILPASSWORD) {
//       console.error("Gmail credentials not set in environment variables.");
//       res.status(500).json({ message: "Internal server error" });
//       return;
//     }

//     // Create a transporter object using the default SMTP transport
//     const transporter = nodemailer.createTransport({
//       host: "smtp.example.com", // Replace with your SMTP server
//       port: 587,
//       auth: {
//         user: process.env.GMAILUSER,
//         pass: process.env.GMAILPASSWORD,
//       },
//     });

//     // Email options
//     const mailOptions = {
//       from: email, // Sender address
//       to: "baketu427@gmail.com", // List of receivers
//       subject: "New Contact Form Submission", // Subject line
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Inquiry Type: ${inquiryType}
//         Inquiry: ${inquiry}
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error("Error sending email:", error); // エラーメッセージをコンソールに出力
//       res.status(500).json({ message: "Error sending email" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} not allowed`);
//   }
// };
