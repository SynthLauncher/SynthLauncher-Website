import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "SynthLauncher",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {/* Navbar */}
          <div className="flex justify-between items-center py-1 pr-3 absolute z-10 w-full">
              <Image 
                src="/r_logo_label.svg"
                width={250}
                height={250}
                alt="logo and label"
              />

            <div className="sm:flex gap-3 hidden">
              <Image 
                  src="/github.svg"
                  width={35}
                  height={35}
                  alt="Github icon"
                />
              <Image 
                src="/discord.svg"
                width={35}
                height={35}
                alt="Discord icon"
              />
              <Image 
                src="/insta.svg"
                width={35}
                height={35}
                alt="Insta icon"
              />
            </div> 
          </div>

        {children}
      </body>
    </html>
  );
}
