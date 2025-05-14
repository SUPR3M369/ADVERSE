import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = false, className, ...props }: SectionTitleProps) {
  return (
    <div className={cn('mb-10 md:mb-12', centered ? 'text-center' : '', className)} {...props}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-lg text-muted-foreground sm:text-xl", centered ? 'mx-auto max-w-2xl' : '')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}