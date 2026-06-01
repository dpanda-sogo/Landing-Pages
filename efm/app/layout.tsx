import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enterprise Feedback Management System | Sogolytics",
  description:
    "Unify CX and EX feedback in one enterprise platform. NPS, VoC, sentiment analysis, and real-time dashboards — HIPAA & GDPR compliant. Request a demo.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.sogolytics.com/enterprise-feedback-management/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={epilogue.className}>
      <body>{children}</body>
    </html>
  );
}
