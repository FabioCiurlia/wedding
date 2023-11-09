import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrea e Roberta - 16 Dicembre Sposi',
  description: 'Tutte le informazioni sul nostro matrimonio',
  viewport: 'user-scalable=no, width=device-width, initial-scale=1.0',
  appleWebApp: true
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
