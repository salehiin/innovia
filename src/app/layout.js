import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import { ToastContainer } from 'react-toastify';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Innovia",
    template: "%s | Innovia"
  },
  description: "Startup and Business Solution",
  icons: {
    icon: "/l5.png", // Correct path to the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="innoviaTheme">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>

      </body>
    </html>
  );
}
