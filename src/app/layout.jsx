import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./responsive.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desenvolvedor - Arthur Rocha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
