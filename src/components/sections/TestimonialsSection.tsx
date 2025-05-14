import SectionTitle from '@/components/shared/SectionTitle';
import TestimonialCard from '@/components/cards/TestimonialCard';

const testimonials = [
  {
    quote: "AdVerse transformed our online presence. Their creative approach and dedication were outstanding. Highly recommended!",
    name: 'Jane Doe',
    role: 'CEO, Tech Solutions Inc.',
    avatarUrl: 'https://picsum.photos/seed/adversetestimonial1/100/100',
    avatarHint: 'woman portrait',
    avatarFallback: 'JD',
  },
  {
    quote: "The team at AdVerse is incredibly talented. They understood our vision perfectly and delivered results beyond our expectations.",
    name: 'John Smith',
    role: 'Marketing Director, Fashion Hub',
    avatarUrl: 'https://picsum.photos/seed/adversetestimonial2/100/100',
    avatarHint: 'man portrait',
    avatarFallback: 'JS',
  },
  {
    quote: "Working with AdVerse was a game-changer for our startup. Their strategic insights and execution helped us scale rapidly.",
    name: 'Alice Brown',
    role: 'Founder, EcoGoods Co.',
    avatarUrl: 'https://picsum.photos/seed/adversetestimonial3/100/100',
    avatarHint: 'person smiling',
    avatarFallback: 'AB',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="We believe in building strong relationships and delivering exceptional value. Here's what our clients think about us."
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
              avatarHint={testimonial.avatarHint}
              avatarFallback={testimonial.avatarFallback}
            />
          ))}
        </div>
      </div>
    </section>
  );
}