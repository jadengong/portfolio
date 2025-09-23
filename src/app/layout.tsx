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
  title: "Jaden Ong - Software Developer & Computer Science Student",
  description: "Computer Science student at SDSU with experience in full-stack development, autonomous systems research, and modern web technologies. Passionate about creating functional, scalable, and user-centered experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Python", "Express.js", "PostgreSQL", "Docker", "Backend Development", "Web Development", "JavaScript", "API Development", "Computer Science", "SDSU", "Autonomous Systems", "ROS 2"],
  authors: [{ name: "Jaden Ong", url: "https://github.com/jadengong" }],
  creator: "Jaden Ong",
  publisher: "Jaden Ong",
  robots: "index, follow",
  openGraph: {
    title: "Jaden Ong - Software Developer & Computer Science Student",
    description: "Computer Science student at SDSU with experience in full-stack development, autonomous systems research, and modern web technologies.",
    type: "website",
    url: "https://jadenong.dev",
    siteName: "Jaden Ong Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Jaden Ong - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaden Ong - Software Developer & Computer Science Student",
    description: "Computer Science student at SDSU with experience in full-stack development and autonomous systems research.",
    images: ["/profile.jpg"],
  },
  alternates: {
    canonical: "https://jadenong.dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jaden Ong",
    "jobTitle": "Software Developer & Computer Science Student",
    "description": "Computer Science student at SDSU with experience in full-stack development, autonomous systems research, and modern web technologies.",
    "url": "https://jadenong.dev",
    "image": "https://jadenong.dev/profile.jpg",
    "sameAs": [
      "https://github.com/jadengong",
      "https://linkedin.com/in/jadengong"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "San Diego State University"
    },
    "knowsAbout": [
      "React", "Next.js", "TypeScript", "Node.js", "Python", "Express.js", 
      "PostgreSQL", "Docker", "JavaScript", "Web Development", "API Development",
      "Autonomous Systems", "ROS 2", "Computer Science"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "email": "ong.jadengabriel@gmail.com"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-geist-sans`}
      >
        {children}
      </body>
    </html>
  );
}
