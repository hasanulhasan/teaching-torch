import FooterPage from "@/components/Home/Footer"
import Providers from "@/lib/Providers"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Order',
  description: 'Build To Better',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
        {children}
        <FooterPage/>
    </div>
  )
}