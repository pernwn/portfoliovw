
import "./globals.css";
import styles from "./style";
import Nav from "./lib/comps/nav";
import { Josefin_Sans } from 'next/font/google';
import { Montserrat } from 'next/font/google';


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
        className={`${josefin_Sans.variable} ${mont.variable} mx-auto max-w-stretch overflow-x-hidden`}
      >
        <Nav />
        <main className={`${styles.padding}`}>
          <section className={`pt-[22%] md:pt-[4%] lg:pt-[4%] xl:pt-[8%] overflow-x-hidden`}>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
