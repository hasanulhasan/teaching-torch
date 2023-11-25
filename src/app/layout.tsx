'use client'

import Providers from '@/lib/Providers';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";
import { setLoading, setUser } from "@/redux/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/components/Auth/Firebase";

const metadata: Metadata = {
  title: 'Teaching Torch',
  description: 'Build To Better',
}

export default function RootLayout({ children}: { children: React.ReactNode }) {

  // const dispatch = useAppDispatch();
  //   useEffect(()=> {
  //     dispatch(setLoading(true))
  //     onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         dispatch(setUser(user.email));
  //         dispatch(setLoading(false))
  //       } else {
  //         dispatch(setLoading(false))
  //       }
  //     });
  //   },[dispatch])

  return (
    <Providers>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </Providers>
  )
}
