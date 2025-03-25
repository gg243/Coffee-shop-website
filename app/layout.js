import { Jost, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Shop App",
  description: "Coffe Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>{children}</body>
    </html>
  );
}
