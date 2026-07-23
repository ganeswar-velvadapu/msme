import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import NavHeading from "../../components/navHeading/navHeading";

const inter = localFont({
  src: "../../../public/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

export const metadata = {
  title: "Depeartment of Materials Science and Metallurgy",
  description: "Depeartment of Materials Science and Metallurgy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="shortcut icon" href="/icons/favicon.png" />
      </head>
      <body className="antialiased">
        <NavHeading />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}