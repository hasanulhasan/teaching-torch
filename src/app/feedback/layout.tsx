'use client'
import { auth } from "@/components/Auth/Firebase";
import FooterPage from "@/components/Home/Footer"
import { setLoading, setUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { Metadata } from "next"
import { useEffect } from "react";

const metadata: Metadata = {
  title: 'Feedback',
  description: 'Build To Better',
}

export default function OrderLayout( {children}: {  children: React.ReactNode }) {

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