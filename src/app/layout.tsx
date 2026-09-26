import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import {
  Caveat,
  Poppins,
  Special_Gothic_Condensed_One,
} from "next/font/google";
import TransitionOverlay from "@/components/ui/TransitionOverlay";
import DotBackground from "@/components/DotBackground";

const caveatFont = Caveat({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat",
});

const specialGothicCondensedFont = Special_Gothic_Condensed_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-specialGothicCondensed",
});

const poppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white h-screen flex flex-col font-poppins overflow-hidden text-black ${specialGothicCondensedFont.variable} ${caveatFont.variable} ${poppinsFont.variable}`}
      >
        <TransitionOverlay />

        <DotBackground />

        <Navbar />

        {children}
      </body>
    </html>
  );
}
