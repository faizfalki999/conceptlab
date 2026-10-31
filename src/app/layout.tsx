import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#F3F1EC",
  colorScheme: "only light",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://conceptlab.solutions"),
  title: {
    default:
      "ConceptLab Solutions | Custom Software Development & Legacy Modernization",
    template: "%s | ConceptLab Solutions",
  },
  description:
    "Custom .NET development, legacy software modernization, API integration, ERP solutions, and SQL Server optimization by ConceptLab Solutions.",
  keywords: [
    "legacy software modernization",
    "custom .NET development",
    "API integration",
    "enterprise integration",
    "ERP solutions",
    "SQL Server optimization",
    "intelligent automation",
    "AI automation",
    "fractional senior engineer",
  ],
  authors: [{ name: "ConceptLab Solutions" }],
  creator: "ConceptLab Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://conceptlab.solutions",
    title:
      "ConceptLab Solutions | Custom Software Development & Legacy Modernization",
    description:
      "Build New. Modernize Existing. Automate Smarter. Software engineering, legacy modernization, enterprise integration and intelligent automation.",
    siteName: "ConceptLab Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ConceptLab Solutions | Custom Software Development & Legacy Modernization",
    description:
      "Build New. Modernize Existing. Automate Smarter. Software engineering, legacy modernization, enterprise integration and intelligent automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "supported-color-schemes": "light",
    "darkreader-lock": "true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F3F1EC] text-[#161C2D] font-sans antialiased flex flex-col selection:bg-[#0070F3] selection:text-white">
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
