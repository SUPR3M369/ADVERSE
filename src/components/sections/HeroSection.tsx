import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                AdVerse: Amplify Your Brand
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl lg:text-lg xl:text-xl">
                We craft compelling advertising strategies that captivate audiences and drive results. Let's build your success story together.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">Our Work</Link>
              </Button>
            </div>
          </div>
          <Image
            src="https://picsum.photos/seed/adversehero/600/600"
            alt="Modern advertising campaign visual"
            data-ai-hint="abstract digital"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            priority
          />
        </div>
      </div>
    </section>
  );
}