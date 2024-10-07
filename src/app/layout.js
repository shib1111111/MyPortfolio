import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio Website",
  description: "Made by Shib Kumars Saraf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
