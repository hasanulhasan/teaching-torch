import Providers from "@/lib/Providers"
import { Footer } from "antd/es/layout/layout"
import Nav from '@/components/Home/Nav'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Order',
  description: 'Build To Better',
}

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
    <Nav/>
      {children}
    <Footer/>
    </Providers>
  )
}