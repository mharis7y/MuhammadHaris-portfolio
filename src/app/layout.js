import { Montserrat, Open_Sans, Raleway, Nunito, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-ui",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-hero",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-footer",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Haris | React Native Developer",
  description:
    "Portfolio of Muhammad Haris, React Native Developer specializing in cross-platform mobile apps with Expo, Firebase, Zustand, and offline-first architectures.",
  keywords: [
    "Muhammad Haris",
    "React Native Developer",
    "Mobile Developer",
    "Expo",
    "Firebase",
    "Zustand",
    "HushTalk",
    "Zen Mart Pro",
    "GymBook",
  ],
  authors: [{ name: "Muhammad Haris", url: "https://github.com/mharis7y" }],
  icons: {
    icon: "/images/logo-white.svg",
    shortcut: "/images/logo-white.svg",
    apple: "/images/logo-white.svg",
  },
  openGraph: {
    title: "Muhammad Haris | React Native Developer",
    description:
      "Portfolio of Muhammad Haris, React Native Developer specializing in cross-platform mobile apps.",
    url: "https://github.com/mharis7y",
    siteName: "Muhammad Haris Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${openSans.variable} ${raleway.variable} ${nunito.variable} ${roboto.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="bg-black text-black antialiased selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
