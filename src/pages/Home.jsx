import HeroSection from '../components/home/HeroSection'
import DailyHoroscope from '../components/home/DailyHoroscope'
import ZodiacCards from '../components/home/ZodiacCards'
import WhyChooseUs from '../components/home/WhyChooseUs'
import StatsCounter from '../components/home/StatsCounter'
import Testimonials from '../components/home/Testimonials'
import FeaturedServices from '../components/home/FeaturedServices'
import VideoSection from '../components/home/VideoSection'
import Newsletter from '../components/home/Newsletter'
import FAQSection from '../components/home/FAQSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DailyHoroscope />
      <ZodiacCards />
      <WhyChooseUs />
      <StatsCounter />
      <FeaturedServices />
      <Testimonials />
      <VideoSection />
      <Newsletter />
      <FAQSection />
    </div>
  )
}
