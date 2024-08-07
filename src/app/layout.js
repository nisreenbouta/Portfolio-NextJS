import { Inter, VT323, Arsenal } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
// const arsenal = Arsenal({ weight: "400", subsets: ["latin"] });
const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Nisreen Bouta | Full-Stack Developer",
  description: "Software Engineer with expertise in .NET Core, Vue JS v2, NextJS, and React Native. Proven ability to design, develop, and implement end-to-end solutions across web, mobile, and database platforms, ensuring optimal performance and user experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth`}>
      <body className={`${vt323.className}`} >
       {/* <div className={`${vt323.className} sticky`}> */}
         <Header />
       {/* </div> */}
        <div className={vt323.className}>
          <Analytics/>
          {children}
        </div>
      </body>
    </html>
  );
}
