import FooterPage from "@/components/Home/Footer"
import { Metadata } from "next"
import Nav from '@/components/Home/Nav'

export const metadata: Metadata = {
  title: 'Courses',
  description: 'Build To Better',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  return (
    <div>
        <Nav/>
        {children}
        <FooterPage/>
    </div>
  )
}