import "./globals.css";
// import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Flexify",
  description: "developing project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>

        {children}

        <Footer />
      </body>
    </html>
  );
}
