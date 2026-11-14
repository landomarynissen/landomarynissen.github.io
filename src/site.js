// Facts about the site that several files need. Edit them here, once.
export const site = {
  name: 'Lando Marynissen',
  role: 'Graphic designer',
  description:
    'Portfolio of Lando Marynissen, a graphic designer from Belgium working on brand identities, editorial design and campaigns.',
  email: 'lando.marynissen@outlook.be',
  linkedin: 'https://www.linkedin.com/in/lando-marynissen-29369024b/',
  instagram: 'https://www.instagram.com/lando_marynissen/',
};

// Builds a link that also works if the site lives in a sub-folder on GitHub Pages.
export function link(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}
