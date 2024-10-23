import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soul vision",
  description:
    "A future-focused animation studio bridging the gap between CGI and live action.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <ThemeProvider
        // attribute="class"
        // defaultTheme="light"
        // enableSystem
        // disableTransitionOnChange
        >
          <div className="fixed z-50 w-full">
            <Navbar />
          </div>
          <Toaster />
          <div className="h-screen">

          {children}
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
