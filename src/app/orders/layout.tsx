/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import FooterPage from "@/components/Home/Footer"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Metadata } from "next"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Loading from "../loading"
import { setLoading, setUser } from "@/redux/features/userSlice"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/components/Auth/Firebase"

const metadata: Metadata = {
  title: 'Order',
  description: 'Build To Better',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {
  // const router = useRouter();
  // const {user} = useAppSelector(state=> state.user)
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  // useEffect(()=> {
  //   if(!user?.email){
  //     router.push('/login')
  //   }
  //   setIsLoading(true)
  // }, [router, isLoading])
  // if(!isLoading){
  //   return <Loading/>
  // }

  const dispatch = useAppDispatch();
  
    useEffect(()=> {
      dispatch(setLoading(true))
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email));
          dispatch(setLoading(false))
        } else {
          dispatch(setLoading(false))
        }
      });
    },[dispatch])

  return (
    <div>
        {children}
        <FooterPage/>
    </div>
  )
}