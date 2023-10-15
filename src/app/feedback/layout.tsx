import FooterPage from "@/components/Home/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Feedback',
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