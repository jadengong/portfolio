import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jaden Gong - Full-Stack Developer",
  description: "Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "Jaden Gong" }],
  creator: "Jaden Gong",
  openGraph: {
    title: "Jaden Gong - Full-Stack Developer",
    description: "Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-geist-sans`}
      >
        {children}
      </body>
    </html>
  );
}
