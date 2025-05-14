import type { LucideIcon } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="items-center text-center p-6 bg-primary/5">
        <div className="p-4 bg-primary rounded-full text-primary-foreground inline-block mb-4">
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardDescription className="text-center text-muted-foreground">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}