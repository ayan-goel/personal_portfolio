import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollAnimations from "./scroll-animations";

export const metadata = {
  title: "Ayan Goel | Software Engineer",
  description: "Software Engineering Portfolio for Ayan Goel",
  icons: {
    icon: '/images/a_logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body
        className={`${GeistSans.className} antialiased min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-50 text-secondary-600`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8 animate-fade-in">
          {children}
        </main>
        <footer className="border-t border-gray-200 py-8 md:py-12 mt-16 animate-fade-in animate-delay-300">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-sm text-gray-500">
                © 2026 | Designed & Built by Ayan Goel | All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
        <ScrollAnimations />
      </body>
    </html>
  );
}
