'use server';

/**
 * @fileOverview Generates advertising slogans based on keywords and target audience.
 *
 * - generateSlogan - A function that generates advertising slogans.
 * - GenerateSloganInput - The input type for the generateSlogan function.
 * - GenerateSloganOutput - The return type for the generateSlogan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSloganInputSchema = z.object({
  keywords: z
    .string()
    .describe('Keywords related to the product or service.'),
  targetAudience: z.string().describe('The target audience for the advertising campaign.'),
});
export type GenerateSloganInput = z.infer<typeof GenerateSloganInputSchema>;

const GenerateSloganOutputSchema = z.object({
  slogan: z.string().describe('The generated advertising slogan.'),
});
export type GenerateSloganOutput = z.infer<typeof GenerateSloganOutputSchema>;

export async function generateSlogan(input: GenerateSloganInput): Promise<GenerateSloganOutput> {
  return generateSloganFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSloganPrompt',
  input: {schema: GenerateSloganInputSchema},
  output: {schema: GenerateSloganOutputSchema},
  prompt: `You are a creative advertising copywriter. Generate an advertising slogan based on the following keywords and target audience.

Keywords: {{{keywords}}}
Target Audience: {{{targetAudience}}}

Slogan:`,
});

const generateSloganFlow = ai.defineFlow(
  {
    name: 'generateSloganFlow',
    inputSchema: GenerateSloganInputSchema,
    outputSchema: GenerateSloganOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
