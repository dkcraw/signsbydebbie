import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Signs by Debbie | Custom Signage Solutions",
  description:
    "Professional custom signs for your business. From storefront signage to vehicle wraps, Signs by Debbie delivers quality craftsmanship in every project. Call (936) 867-4399 for a free quote.",
  keywords: "custom signs, business signage, vehicle wraps, storefront signs, banners, Texas signage",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
