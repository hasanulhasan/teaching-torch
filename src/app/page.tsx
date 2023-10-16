'use client'
import About from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Courses from '@/components/Course/Courses'
import Faqs from '@/components/Home/Features'
import FooterPage from '@/components/Home/Footer'
import Nav from '@/components/Home/Nav'
import Newsletter from '@/components/Home/Newsletter'
import PopularCategory from '@/components/Home/PopularCategory'
import Reviews from '@/components/Home/Reviews'
import Counters from '@/components/Home/Counters'
import { useAppDispatch } from '@/redux/hooks'
import { useEffect } from 'react'
import { setLoading, setUser } from '@/redux/features/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/components/Auth/Firebase'

export default function Home() {
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
      <Nav/>
      <Banner/>
      {/* <PopularCategory/> */}
      <Courses/>
      <About/>
      <Reviews/>
      <Faqs/>
      <Newsletter/>
      <Counters/>
      <FooterPage/>
    </div>
  )
}
