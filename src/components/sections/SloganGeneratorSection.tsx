"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import SectionTitle from '@/components/shared/SectionTitle';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { generateSlogan, type GenerateSloganInput } from '@/ai/flows/generate-slogan';
import { Loader2, Wand2 } from 'lucide-react';

export default function SloganGeneratorSection() {
  const [generatedSlogan, setGeneratedSlogan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, formState: { errors } } = useForm<GenerateSloganInput>();

  const onSubmit: SubmitHandler<GenerateSloganInput> = async (data) => {
    setIsLoading(true);
    setGeneratedSlogan(null);
    try {
      const result = await generateSlogan(data);
      setGeneratedSlogan(result.slogan);
      toast({
        title: "Slogan Generated!",
        description: "Your creative slogan is ready.",
      });
    } catch (error) {
      console.error("Slogan generation failed:", error);
      toast({
        title: "Error",
        description: "Failed to generate slogan. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="slogan-ai" className="w-full py-16 md:py-20 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-3xl px-4 md:px-6">
        <SectionTitle
          title="AI Slogan Generator"
          subtitle="Unleash creativity with our AI-powered tool. Generate catchy advertising slogans in seconds!"
          centered
        />
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl">
              <Wand2 className="mr-2 h-6 w-6 text-primary" />
              Create Your Slogan
            </CardTitle>
            <CardDescription className="text-center">
              Enter keywords and your target audience to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="keywords" className="block text-sm font-medium text-foreground mb-1">
                  Keywords
                </label>
                <Input
                  id="keywords"
                  placeholder="e.g., eco-friendly, innovative, coffee"
                  {...register('keywords', { required: 'Keywords are required' })}
                  className={errors.keywords ? 'border-destructive' : ''}
                  aria-invalid={errors.keywords ? "true" : "false"}
                />
                {errors.keywords && <p className="text-sm text-destructive mt-1">{errors.keywords.message}</p>}
              </div>
              <div>
                <label htmlFor="targetAudience" className="block text-sm font-medium text-foreground mb-1">
                  Target Audience
                </label>
                <Input
                  id="targetAudience"
                  placeholder="e.g., millennials, small businesses, athletes"
                  {...register('targetAudience', { required: 'Target audience is required' })}
                  className={errors.targetAudience ? 'border-destructive' : ''}
                  aria-invalid={errors.targetAudience ? "true" : "false"}
                />
                {errors.targetAudience && <p className="text-sm text-destructive mt-1">{errors.targetAudience.message}</p>}
              </div>
              <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Slogan'
                )}
              </Button>
            </form>
            {generatedSlogan && (
              <div className="mt-8 p-6 bg-primary/5 rounded-lg">
                <h3 className="text-lg font-semibold text-primary mb-2 text-center">Your AI-Generated Slogan:</h3>
                <p className="text-2xl font-bold text-foreground text-center italic">"{generatedSlogan}"</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}