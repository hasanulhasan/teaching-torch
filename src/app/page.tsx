import About from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Courses from '@/components/Course/Courses'
import Faqs from '@/components/Home/Faqs'
import FooterPage from '@/components/Home/Footer'
import Nav from '@/components/Home/Nav'
import Newsletter from '@/components/Home/Newsletter'
import PopularCategory from '@/components/Home/PopularCategory'
import Reviews from '@/components/Home/Reviews'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
      <PopularCategory/>
      <Courses/>
      <About/>
      <Reviews/>
      <Faqs/>
      <Newsletter/>
      <FooterPage/>
    </div>
  )
}
