import { Josefin_Sans, Montserrat } from "next/font/google";
import './globals.css'
import styles from "./style";
import Nav from "./lib/comps/nav";

const josefin_Sans = Josefin_Sans({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-josefin",
});

const mont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "VWJ",
  description: "Multimedia Designer & Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

        <body
          className={`${josefin_Sans.variable} ${mont.variable} ${styles.padding} mx-auto max-w-stretch overflow-x-hidden`}
      >
        <Nav/>
         {children}
        </body>

    </html>
  );
}
