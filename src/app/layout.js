import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ScrollAnimations from "./scroll-animations";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-source-code-pro",
});

export const metadata = {
  title: "Ayan Goel | Software Engineer",
  description: "Software Engineering Portfolio for Ayan Goel",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${sourceCodePro.variable} font-sans antialiased min-h-screen flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-950 dark:to-secondary-900 text-secondary-600 dark:text-gray-200`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8 animate-fade-in">
          {children}
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 py-8 md:py-12 mt-16 animate-fade-in animate-delay-300">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                © {new Date().getFullYear()} | Designed & Built by Ayan Goel | All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
        <ScrollAnimations />
      </body>
    </html>
  );
}
