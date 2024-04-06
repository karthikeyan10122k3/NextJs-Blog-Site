import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/bootstrapClient";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Bloggers" ,
    template: "Bloggers || %s "
  },
  description: "Created for Bloggers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
