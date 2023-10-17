import About from '@/components/Home/About'
import Banner from '@/components/Home/Banner'
import Courses from '@/components/Course/Courses'
import Faqs from '@/components/Home/Features'
import FooterPage from '@/components/Home/Footer'
import Nav from '@/components/Home/Nav'
import Newsletter from '@/components/Home/Newsletter'
import Reviews from '@/components/Home/Reviews'
import Counters from '@/components/Home/Counters'

export default function Home() {
  return (
    <div>
      <Nav/>
      <Banner/>
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
