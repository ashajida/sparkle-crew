import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "./images/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white font-medium`}>
        <Header />
        {children}
        <footer className="py-[80px] bg-black">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
              <img src="./images/logo.png" alt="logo" className="max-w-[191px] hidden lg:block" />
              <nav className="flex flex-col lg:flex-row gap-6 text-white">
                <div className="flex flex-col">
                  <h3 className="font-semibold mb-3">Services</h3>
                  <Link className="font-normal mb-2 hover:underline" href='/domestic'>Domestic</Link>
                  <Link className="font-normal hover:underline" href='/commercial'>Commercial</Link>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold mb-3">Navigation</h3>
                  <Link className="font-normal mb-2 hover:underline" href='/about-us'>About Us</Link>
                  <Link className="font-normal hover:underline" href='/contact'>Contact</Link>
                </div>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
