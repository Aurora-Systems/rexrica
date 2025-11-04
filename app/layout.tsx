import type React from "react"
import type { Metadata } from "next"
import { Inter, EB_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const ebGaramond = EB_Garamond({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Rexrica - Diversified Business Excellence",
  description:
    "Leading diversified conglomerate operating across mining, construction, agriculture, finance, insurance, logistics, property, manufacturing, and international trade.",
  generator: "aurorasystems.co.zw",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} `}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
