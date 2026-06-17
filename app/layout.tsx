import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ratel",
  description: "日本に適正な金融教育の機会をつくり各家庭でお金の教育を受けれる社会を実現する",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
