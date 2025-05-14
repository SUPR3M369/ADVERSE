import SectionTitle from '@/components/shared/SectionTitle';
import PortfolioCard from '@/components/cards/PortfolioCard';

const portfolioItems = [
  {
    imageUrl: 'https://picsum.photos/seed/adverseportfolio1/600/400',
    imageHint: 'technology product',
    title: 'TechLaunch Campaign',
    category: 'Digital Marketing',
    description: 'A successful launch campaign for a new SaaS product, achieving 200% ROI in 3 months.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/adverseportfolio2/600/400',
    imageHint: 'fashion brand',
    title: 'Elegance Redefined',
    category: 'Branding',
    description: 'Complete brand overhaul for a luxury fashion label, resulting in increased market share.',
  },
  {
    imageUrl: 'https://picsum.photos/seed/adverseportfolio3/600/400',
    imageHint: 'food delivery',
    title: 'FastFeast App',
    category: 'Web & Mobile App',
    description: 'User-centric mobile app design for a food delivery startup, boosting user engagement.',
  },
   {
    imageUrl: 'https://picsum.photos/seed/adverseportfolio4/600/400',
    imageHint: 'eco friendly',
    title: 'GreenFuture Initiative',
    category: 'Creative Campaign',
    description: 'An award-winning awareness campaign promoting sustainable practices for an environmental NGO.',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Our Creative Portfolio"
          subtitle="Take a look at some of our most impactful and successful campaigns. We pride ourselves on delivering results."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <PortfolioCard
              key={item.title}
              imageUrl={item.imageUrl}
              imageHint={item.imageHint}
              title={item.title}
              category={item.category}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}