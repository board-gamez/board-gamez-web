import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import { CartProvider } from "@/lib/context/cart-context";
import { AuthSessionProvider } from "@/lib/context/auth-context";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vazirmatn.className} bg-light-gray`} dir="rtl">
        <CartProvider>
          <AuthSessionProvider>
            <Topbar />

            <header className="bg-white sticky top-0 shadow-sm">
              <Navbar />
            </header>

            <main className="container mx-auto px-3">{children}</main>

            <Footer />
          </AuthSessionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
