'use client'

import Providers from '@/lib/Providers';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Teaching Torch',
  description: 'Build To Better',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  

  return (
    <Providers>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}
