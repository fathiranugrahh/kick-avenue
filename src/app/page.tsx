import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import TrendingSection from '@/components/TrendingSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <TrendingSection />
    </div>
  );
}
