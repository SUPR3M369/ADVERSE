import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl: string;
  avatarHint: string;
  avatarFallback: string;
}

export default function TestimonialCard({ quote, name, role, avatarUrl, avatarHint, avatarFallback }: TestimonialCardProps) {
  return (
    <Card className="bg-background shadow-lg rounded-lg p-6 md:p-8 h-full flex flex-col justify-between">
      <blockquote className="text-lg text-foreground mb-6 border-l-4 border-primary pl-4 italic">
        "{quote}"
      </blockquote>
      <div className="flex items-center">
        <Avatar className="h-12 w-12 mr-4">
          <AvatarImage src={avatarUrl} alt={name} data-ai-hint={avatarHint} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
}