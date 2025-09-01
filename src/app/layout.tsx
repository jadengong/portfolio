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
  title: "Jaden Ong - Aspiring Developer",
  description: "Aspiring developer passionate about creating functional, scalable, and user-centered experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Python",  "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Docker", "Backend Development", "Web Development", "JavaScript", "Database Design", "API Development"],
  authors: [{ name: "Jaden Ong" }],
  creator: "Jaden Ong",
  openGraph: {
    title: "Jaden Ong - Aspiring Developer",
    description: "Aspiring developer passionate about creating functional, scalable, and user-centered experiences.",
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
