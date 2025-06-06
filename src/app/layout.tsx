import Topbar from "@/components/topbar/Topbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Leftbar from "@/components/leftbar/Leftbar";
import SleepingCat from "@/components/sleepingCat/SleepingCat";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Sudhakar's Portfolio`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <div
          style={{
            position: "fixed",
            left: "-80px",
            // zIndex: 1,
            bottom: "0px",
          }}
        >
          <SleepingCat />
        </div>

        <div className="mainLayout">
          <Topbar />
          <div className="mainLayoutChild">
            <Leftbar />
            <div className="mainLayoutContentWrap">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
