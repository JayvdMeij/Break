/**
 * All copy and decorative geometry for the Thegrafx one-pager.
 * Text is taken verbatim from the source design (Thegrafx Site.dc.html).
 */

export const site = {
  name: 'Thegrafx',
  tagline: 'Break the grid. Not the rules.',
  description:
    'Thegrafx is a five-person graphic design studio in Chennai working on brand systems, editorial, packaging, type design, art direction and motion.',
  url: 'https://www.thegrafx.com',
  founded: 2014,
  locality: 'Chennai',
  address: '2nd Floor, Anna Nagar, Chennai',
  email: 'info@thegrafx.com',
  phone: '+91 97951 29102',
  phoneHref: '+919795129102',
  website: 'www.thegrafx.com',
  motto: 'GRID / ALIGNMENT / RHYTHM',
  kicker: 'GRAPHIC DESIGN STUDIO — CHENNAI, EST. 2014',
} as const;

export const navLinks = [
  { href: '#studio', label: 'STUDIO' },
  { href: '#work', label: 'WORK' },
  { href: '#process', label: 'PROCESS' },
] as const;

export const creed = ['GOOD DESIGN', 'BUILDS TRUST.', 'GREAT DESIGN', 'BUILDS LEGACY.'] as const;

/** Column ruler numbers under the hero header. Mirrors the poster's measure. */
export const rulerColumns = ['01', '02', '03', '04', '06', '07', '08', '09', '10', '11'] as const;

export const marqueeItems = [
  'BRAND SYSTEMS',
  'EDITORIAL',
  'PACKAGING',
  'TYPE DESIGN',
  'ART DIRECTION',
  'MOTION',
] as const;

export const stats = [
  { value: '12', label: 'YEARS' },
  { value: '140', label: 'PROJECTS' },
  { value: '09', label: 'COUNTRIES' },
] as const;

export const studioParagraphs = [
  'Thegrafx is a five-person studio working on identity, editorial and packaging. Every project starts with structure: a measured system of columns, weights and rhythm that decides how the work behaves before it decides how it looks.',
  'Once the structure holds, we break it on purpose. A headline that runs off the page, a shattered letterform, a colour that arrives too loud. Those moments only read as intent when everything around them is disciplined.',
] as const;

export const capabilities = [
  {
    number: '01',
    title: 'BRAND SYSTEMS',
    description: 'Naming, logotype, colour, type scale and the rules that keep it standing after we leave.',
    duration: '6–10 WKS',
  },
  {
    number: '02',
    title: 'EDITORIAL',
    description: 'Magazines, annual reports and books. Grids that survive 200 pages of real content.',
    duration: '4–12 WKS',
  },
  {
    number: '03',
    title: 'PACKAGING',
    description: 'Structure, print specification and shelf tests. Designed for the press, not the mockup.',
    duration: '5–8 WKS',
  },
  {
    number: '04',
    title: 'TYPE DESIGN',
    description: 'Custom display faces and logotype drawing, from single wordmarks to three-width families.',
    duration: '8–20 WKS',
  },
  {
    number: '05',
    title: 'ART DIRECTION',
    description: 'Campaign direction, photography briefs and on-set supervision.',
    duration: 'PER SHOOT',
  },
  {
    number: '06',
    title: 'MOTION',
    description: 'Identity in movement: logo behaviour, title sequences, social systems.',
    duration: '3–6 WKS',
  },
] as const;

export type WorkVariant = 'mills' | 'orbit' | 'format';

export const work: ReadonlyArray<{
  title: string;
  meta: string;
  variant: WorkVariant;
  alt: string;
}> = [
  {
    title: 'KALYAN MILLS',
    meta: 'IDENTITY / 2026',
    variant: 'mills',
    alt: 'Kalyan Mills identity: a halftone field cut by an orange disc and a hairline diagonal.',
  },
  {
    title: 'ORBIT COFFEE',
    meta: 'PACKAGING / 2025',
    variant: 'orbit',
    alt: 'Orbit Coffee packaging: concentric orange rings breaking out of a dark panel.',
  },
  {
    title: 'FORMAT QUARTERLY',
    meta: 'EDITORIAL / 2025',
    variant: 'format',
    alt: 'Format Quarterly spread: stacked column rules with a shattered block in the margin.',
  },
];

export const processSteps = [
  {
    step: 'STEP 01',
    title: 'MEASURE',
    description:
      'Two weeks of audit: existing assets, competitors, print and screen constraints. We write down what the system has to carry.',
  },
  {
    step: 'STEP 02',
    title: 'STRUCTURE',
    description:
      'Grid, type scale and colour logic, tested on the ugliest real content you have before anything gets styled.',
  },
  {
    step: 'STEP 03',
    title: 'BREAK',
    description:
      'Three directions that push the system to its limit. One gets chosen, one gets archived, one gets argued about.',
  },
  {
    step: 'STEP 04',
    title: 'HAND OVER',
    description:
      'Files, fonts, specimen and a guideline document your team can actually use. Two follow-up sessions included.',
  },
] as const;

export const testimonial = {
  before: '“THEY GAVE US A SYSTEM WE COULD RUN OURSELVES. TWO YEARS ON, ',
  accent: 'NOTHING HAS FALLEN APART.”',
  author: 'Ananya Rao',
  role: 'Brand Director, Kalyan Mills',
} as const;

export const clients = [
  'KALYAN MILLS',
  'ORBIT COFFEE',
  'FORMAT QUARTERLY',
  'NORTHBANK',
  'STUDIO PALLAVI',
  'MERIDIAN PRESS',
  'HAUS & HOF',
  'TWELVE DEGREES',
] as const;

/* ------------------------------------------------------------------ *
 * Wordmark geometry — percentages relative to the BREAK inline box.
 * ------------------------------------------------------------------ */

/** Paper-coloured wedges that carve chunks out of the final K. */
export const cutShards = [
  { left: 95.6, top: 6.5, width: 4.4, height: 17, clip: '100% 0, 100% 100%, 0 6%' },
  { left: 95.2, top: 74, width: 4.8, height: 18, clip: '100% 0, 100% 100%, 0 100%' },
  { left: 95.6, top: 41, width: 4.4, height: 19, clip: '100% 10%, 100% 90%, 0 50%' },
  { left: 90.4, top: 24, width: 3.4, height: 13, clip: '100% 0, 60% 100%, 0 34%' },
  { left: 91.2, top: 64, width: 3.2, height: 14, clip: '0 0, 100% 22%, 46% 100%' },
  { left: 93.4, top: 14, width: 2.4, height: 8, clip: '0 20%, 100% 0, 70% 100%' },
  { left: 93, top: 84, width: 2.6, height: 8, clip: '0 0, 100% 30%, 56% 100%' },
] as const;

/** Hairline fractures running across the letterform. */
export const cracks = [
  { left: 84.5, top: 31, width: 9.5, height: 0.9, rotate: -33 },
  { left: 85, top: 60, width: 9, height: 0.9, rotate: 31 },
  { left: 93.2, top: 40, width: 4.4, height: 0.8, rotate: 76 },
  { left: 88.8, top: 19, width: 5.4, height: 0.7, rotate: 52 },
  { left: 89.4, top: 86, width: 5.8, height: 0.7, rotate: -44 },
  { left: 91.6, top: 47, width: 4, height: 0.6, rotate: -64 },
  { left: 87.2, top: 44, width: 3.4, height: 0.6, rotate: 18 },
] as const;

/** Ink shards flung off the K — these are the ones the pointer pushes around. */
export const flyingShards = [
  { left: 101, top: 14, width: 4.4, height: 13, clip: '0 10%, 66% 0, 100% 64%, 28% 100%', dur: 5.5, delay: 0 },
  { left: 102, top: 34, width: 4.8, height: 16, clip: '0 0, 76% 16%, 100% 84%, 22% 100%', dur: 6.5, delay: 0.3 },
  { left: 101, top: 59, width: 4, height: 18, clip: '0 6%, 82% 0, 100% 72%, 30% 100%', dur: 7, delay: 0.1 },
  { left: 107, top: 22, width: 3, height: 7.5, clip: '0 26%, 100% 0, 74% 100%', dur: 5, delay: 0.5 },
  { left: 108.5, top: 43, width: 3.6, height: 6.5, clip: '0 0, 100% 38%, 46% 100%, 8% 72%', dur: 6, delay: 0.2 },
  { left: 107, top: 70, width: 2.6, height: 7.5, clip: '0 12%, 100% 0, 64% 100%', dur: 5.8, delay: 0.7 },
  { left: 112, top: 38, width: 2.1, height: 4, clip: '0 30%, 100% 0, 70% 100%', dur: 4.6, delay: 0.4 },
  { left: 113, top: 16, width: 1.8, height: 3.4, clip: '0 0, 100% 46%, 42% 100%', dur: 5.2, delay: 0.9 },
  { left: 115, top: 52, width: 1.6, height: 3, clip: '0 22%, 100% 0, 62% 100%', dur: 6.2, delay: 0.6 },
  { left: 111.5, top: 59, width: 1.5, height: 2.7, clip: '0 0, 100% 52%, 36% 100%', dur: 4.8, delay: 0.2 },
  { left: 117, top: 26, width: 1.3, height: 2.4, clip: '0 34%, 100% 0, 68% 100%', dur: 5.4, delay: 1 },
  { left: 108, top: 86, width: 2, height: 3.4, clip: '0 20%, 100% 0, 58% 100%', dur: 6.8, delay: 0.3 },
  { left: 115, top: 76, width: 1.2, height: 2.4, clip: '0 0, 100% 48%, 34% 100%', dur: 5.1, delay: 0.8 },
  { left: 104, top: 8, width: 2.8, height: 7, clip: '0 22%, 78% 0, 100% 58%, 34% 100%', dur: 6.4, delay: 0.45 },
  { left: 105.5, top: 78, width: 3.2, height: 9, clip: '0 0, 84% 18%, 100% 78%, 26% 100%', dur: 7.2, delay: 0.15 },
  { left: 110.5, top: 30, width: 2.2, height: 5, clip: '0 18%, 100% 0, 72% 100%', dur: 5.6, delay: 0.65 },
  { left: 112.5, top: 63, width: 1.9, height: 4.2, clip: '0 0, 100% 36%, 44% 100%', dur: 6.1, delay: 0.35 },
  { left: 119, top: 46, width: 1.4, height: 2.8, clip: '0 26%, 100% 0, 64% 100%', dur: 4.9, delay: 0.55 },
] as const;
