// Tells Astro what a "project" file looks like, so a typo in one of the
// files in src/content/work/ gives a clear error instead of a broken page.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/work' }),
  schema: ({ image }) => {
    // A picture always comes with a description (alt) for people who cannot see it.
    const picture = z.object({ src: image(), alt: z.string() });

    return z.object({
      order: z.number(), // 1 = first project on the site
      title: z.string(),
      tagline: z.string(), // one line under the title
      kind: z.string(), // honest label: "Graduation project", "Concept brand", ...
      discipline: z.string(),
      year: z.number(),
      services: z.array(z.string()).default([]), // what was done: "Branding", "Editorial design", ...

      cover: image(), // the picture used on the home page and the work list
      coverShape: z.enum(['wide', 'tall']).default('wide'), // its shape on the home page
      coverAlt: z.string(),
      hero: picture.optional(), // big picture at the top of the project page (default: the cover)

      intro: z.string(), // three sentences at most
      role: z.string().optional(),
      tools: z.string().optional(),
      live: z.string().url().optional(), // link to the finished thing, if it is online

      // The project page, top to bottom. Reorder these to art-direct the page.
      blocks: z
        .array(
          z.discriminatedUnion('type', [
            picture.extend({ type: z.literal('image') }), // one picture, full width
            z.object({ type: z.literal('pair'), images: z.array(picture).length(2) }), // two side by side
            z.object({
              type: z.literal('video'),
              src: z.string(), // path inside the public/ folder, e.g. /work/pkin/02.mp4
              poster: image(), // still picture shown before the video plays
              label: z.string(), // describes the video
            }),
            z.object({
              type: z.literal('banner'),
              label: z.string().optional(), // small word on the left, e.g. "Wayfinding"
              text: z.string(), // one or two short sentences
            }),
          ]),
        )
        .default([]),
    });
  },
});

export const collections = { work };
