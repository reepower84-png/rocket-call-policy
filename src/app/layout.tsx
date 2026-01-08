import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "로켓콜 - 정책자금 | 중소기업 소상공인 정부지원자금 전문 상담",
  description: "담보력이 부족한 중소기업, 소상공인을 위한 정부 정책자금 지원! 확정 고객만 연결해드립니다. 무료 상담 신청하세요.",
  keywords: "정책자금, 정부지원금, 중소기업지원, 소상공인지원, 창업자금, 운영자금, 시설자금",
  openGraph: {
    title: "로켓콜 - 정책자금 | 중소기업 소상공인 정부지원자금 전문",
    description: "담보력이 부족한 중소기업, 소상공인을 위한 정부 정책자금 지원! 확정 고객만 연결해드립니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
