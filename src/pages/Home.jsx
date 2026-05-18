import HeroSection from '../components/home/HeroSection'
import DailyHoroscope from '../components/home/DailyHoroscope'
import ZodiacCards from '../components/home/ZodiacCards'
import AboutAstrologer from '../components/home/AboutAstrologer'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StatsCounter from '../components/home/StatsCounter'
import FeaturedServices from '../components/home/FeaturedServices'
import Testimonials from '../components/home/Testimonials'
import AppointmentSection from '../components/home/AppointmentSection'
import GemstoneSection from '../components/home/GemstoneSection'
import BlogSection from '../components/home/BlogSection'
import VideoSection from '../components/home/VideoSection'
import Newsletter from '../components/home/Newsletter'
import FAQSection from '../components/home/FAQSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DailyHoroscope />
      <ZodiacCards />
      <AboutAstrologer />
      <WhyChooseUs />
      <StatsCounter />
      <FeaturedServices />
      <GemstoneSection />
      <AppointmentSection />
      <Testimonials />
      <BlogSection />
      <VideoSection />
      <Newsletter />
      <FAQSection />
    </div>
  )
}
