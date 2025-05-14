import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface PortfolioCardProps {
  imageUrl: string;
  imageHint: string;
  title: string;
  category: string;
  description: string;
}

export default function PortfolioCard({ imageUrl, imageHint, title, category, description }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group rounded-lg flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-video overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            data-ai-hint={imageHint}
            width={600}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-primary font-semibold mb-1">{category}</p>
        <CardTitle className="text-xl font-bold mb-2 text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 flex-grow">{description}</CardDescription>
        <Button variant="link" className="p-0 h-auto self-start text-accent hover:text-accent/90">
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}