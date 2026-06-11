import type { Metadata } from "next";
import { Barlow_Condensed, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  title: "Onze — O onze ideal.",
  description:
    "Marcas brasileiras encontram atletas com dado, contrato e pagamento garantido. A infraestrutura comercial entre marcas e atletas brasileiros.",
  openGraph: {
    title: "Onze — O onze ideal.",
    description:
      "Marcas brasileiras encontram atletas com dado, contrato e pagamento garantido.",
    type: "website",
    locale: "pt_BR",
    siteName: "Onze",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onze — O onze ideal.",
    description:
      "A infraestrutura comercial entre marcas e atletas brasileiros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn("antialiased", barlowCondensed.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
