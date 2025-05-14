"use client";

import { useForm, type SubmitHandler } from 'react-hook-form';
import SectionTitle from '@/components/shared/SectionTitle';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormInputs>();
  const { toast } = useToast();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll be in touch shortly.",
    });
    reset();
  };

  return (
    <section id="contact" className="w-full py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? We'd love to hear from you."
          centered
        />
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Reach out to us via phone, email, or visit our office. We're always ready to discuss your next big idea.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:hello@adverse.com" className="hover:text-primary transition-colors">hello@adverse.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Ad Lane, Creativity City, CA 90210</span>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-8 bg-secondary rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? 'border-destructive' : ''}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address</label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
                })}
                className={errors.email ? 'border-destructive' : ''}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? 'border-destructive' : ''}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <p className="text-sm text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}