import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import GlobalContextProvider from "@/app/stateManager/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AGC",
  description: "A company that deals on electrical works, building/construction and as property sales",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalContextProvider>
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </GlobalContextProvider>
    </html>
  );
}
