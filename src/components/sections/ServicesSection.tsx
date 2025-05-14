import SectionTitle from '@/components/shared/SectionTitle';
import ServiceCard from '@/components/cards/ServiceCard';
import { Megaphone, Palette, Globe, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Comprehensive digital strategies including SEO, SEM, social media, and content marketing to elevate your online presence.',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Crafting unique brand identities, logos, and visual assets that tell your story and resonate with your audience.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites and applications that offer seamless user experiences.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Campaigns',
    description: 'Developing innovative and memorable advertising campaigns across various media to capture attention and drive engagement.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a wide range of advertising solutions tailored to your business needs. Discover how we can help you grow."
          centered
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}