import HeroSection from '@/components/HeroSection'
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyUs from '@/components/WhyUs';
import TestimonialCards from '@/components/TestimonialCards';
import FeaturedWebinar from '@/components/FeaturedWebinar'
import Instructors from '@/components/Instructors';

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyUs />
      <TestimonialCards />
      <FeaturedWebinar />
      <Instructors />
    </div>
  );
}
