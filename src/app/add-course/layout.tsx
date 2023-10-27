'use client'
import FooterPage from "@/components/Home/Footer"
import { Metadata } from "next"
import Nav from '@/components/Home/Nav'

const metadata: Metadata = {
  title: 'Add Course',
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