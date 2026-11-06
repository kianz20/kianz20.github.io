import carspy from './assets/shots/carspy.webp';
import carfinder from './assets/shots/carfinder.webp';
import autoenvy from './assets/shots/autoenvy.webp';
import ecpl from './assets/shots/ecpl.webp';
import rangi from './assets/shots/rangi.webp';
import rankr from './assets/shots/rankr.webp';
import guessr from './assets/shots/guessr.webp';
import gs3 from './assets/shots/gs3.webp';
import yahoo from './assets/shots/yahoo.webp';

export type Folder = 'SITES' | 'GAMES' | 'CODE';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectFile {
  id: string;
  file: string;
  folder: Folder;
  name: string;
  blurb: string;
  /** Commits made by Kian. Null when the repo's history doesn't reflect the work. */
  commits: number | null;
  date: string;
  spokenDate: string;
  text: string[];
  status: string;
  source: string;
  stack: string;
  links: ProjectLink[];
  /** Shared-project credit, always visible in the preview. */
  credit?: string;
  /** focus is the CSS object-position used when the preview crops the shot. */
  shot?: { src: string; alt: string; focus?: string };
  code?: string;
  pullRequests?: { number: number; title: string }[];
}

const SHARESIES_REPO = 'https://github.com/jontymorris/Sharesies-API';

export const FOLDERS: Folder[] = ['SITES', 'GAMES', 'CODE'];

export const FILES: ProjectFile[] = [
  {
    id: 'carspy',
    file: 'CARSPY.COM',
    folder: 'SITES',
    name: 'CarSpy',
    blurb: 'Car search',
    commits: 275,
    date: '05-11-26',
    spokenDate: '5 November 2026',
    text: [
      'Every NZ car dealer in one search, ranked by what a car really costs to own.',
      'That means finance, fuel, servicing, insurance, repairs and rego, not just the sticker price. It crawls dealer stock nationwide, tracks price drops, and emails you when a saved search finds something new.',
    ],
    status: 'Live',
    source: 'Private',
    stack: 'Next.js, TypeScript, Postgres',
    links: [{ label: 'Visit carspy.co.nz', href: 'https://www.carspy.co.nz' }],
    shot: {
      src: carspy,
      alt: 'CarSpy home page with the headline "The real cost of your next car" above a search bar and body type filters.',
    },
  },
  {
    id: 'carfinder',
    file: 'CARFIND.EXE',
    folder: 'SITES',
    name: 'Car Finder',
    blurb: 'Market alerts',
    commits: null,
    date: '05-11-26',
    spokenDate: '5 November 2026',
    text: [
      'A Windows app that searches Trade Me and Facebook Marketplace together and alerts you to new listings.',
      'It runs from a tray icon and estimates each car\'s resale value so good prices stand out. Shared copies update themselves, and a release that won\'t start rolls itself back.',
    ],
    status: 'Available to download',
    source: 'Private',
    stack: 'Python, C#',
    links: [{ label: 'Download', href: 'https://github.com/kianz20/car-finder-releases/releases' }],
    shot: {
      src: carfinder,
      alt: 'Car Finder search form with fields for models, price, year, kilometres, sort order and region.',
    },
  },
  {
    id: 'autoenvy',
    file: 'AUTOENVY.HTM',
    folder: 'SITES',
    name: 'AutoEnvy',
    blurb: 'Supercar hire',
    commits: 8,
    date: '29-10-26',
    spokenDate: '29 October 2026',
    text: [
      'A fast static rebuild of the site for AUTO ENVY, an Auckland supercar hire company.',
      'It moves the site off Wix to plain HTML, CSS and JavaScript with no build step. A single Lambda handles the booking, newsletter and partner forms.',
    ],
    status: 'Not live yet',
    source: 'Private',
    stack: 'HTML, CSS, JavaScript, AWS Lambda',
    links: [],
    shot: {
      src: autoenvy,
      alt: 'AutoEnvy home page with a large wordmark above a dark section and a photo of a V8 engine.',
    },
  },
  {
    id: 'ecpl',
    file: 'ECPL.HTM',
    folder: 'SITES',
    name: 'ECPL',
    blurb: 'Dev finance',
    commits: 5,
    date: '02-11-26',
    spokenDate: '2 November 2026',
    text: [
      'A site for ECPL, a New Zealand business that lends to property developers.',
      'It gives developers enough to judge whether ECPL suits their project, then gets them in touch.',
    ],
    status: 'Not live yet',
    source: 'Private',
    stack: 'Next.js, TypeScript',
    links: [],
    shot: {
      src: ecpl,
      alt: 'ECPL home page with the headline "Development finance, decided quickly" over an aerial photo of a coastline.',
    },
  },
  {
    id: 'rangi',
    file: 'RANGI.HTM',
    folder: 'SITES',
    name: 'Rangi Construction',
    blurb: 'Builder',
    commits: 13,
    date: '06-05-25',
    spokenDate: '6 May 2025',
    text: ['A site for Rangi Construction, a New Zealand repair and maintenance company.', 'It covers residential and commercial work, and how to get in touch.'],
    status: 'Live',
    source: 'Private',
    stack: 'HTML, CSS, JavaScript',
    links: [{ label: 'Visit rangiconstruction.nz', href: 'https://www.rangiconstruction.nz' }],
    shot: {
      src: rangi,
      alt: 'Rangi Construction home page with the company logo, a contact button, and repair, improve and maintain service cards.',
    },
  },
  {
    id: 'rankr',
    file: 'RANKR.EXE',
    folder: 'GAMES',
    name: 'PangoRankr',
    blurb: 'Party game',
    commits: 11,
    date: '28-08-26',
    spokenDate: '28 August 2026',
    text: [
      'A five-minute party game where everyone drags four items into order on their phone.',
      'Each round asks one question on the big screen: fastest, priciest, most sugar.',
      'Scoring uses Kendall tau, so you get partial credit for a nearly right order, but you can\'t guess your way up the leaderboard.',
    ],
    status: 'No public link yet',
    source: 'Public',
    stack: 'React, Node, Socket.IO',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/kianz20/pango-garage' }],
    shot: {
      src: rankr,
      alt: 'PangoRankr big screen showing round one, "Heaviest at the top", with four cars to put in order.',
    },
  },
  {
    id: 'guessr',
    file: 'GUESSR.EXE',
    folder: 'GAMES',
    name: 'PangoGuessr',
    blurb: 'Geo party game',
    commits: 16,
    date: '29-10-26',
    spokenDate: '29 October 2026',
    text: [
      'A location guessing game for a room full of phones. Closest pin wins.',
      'Everyone joins with a code or QR code, sees the same Street View spot, and plays over five rounds.',
    ],
    credit: 'Shared project: 16 of 31 commits are mine',
    status: 'No public link yet',
    source: 'Public',
    stack: 'React, TypeScript, Express, WebSockets',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/kianz20/PangoGuessr' }],
    shot: {
      src: guessr,
      focus: '50% 70%',
      alt: 'PangoGuessr round results showing a world map with a guess in Africa, the answer at Cape Town, and the distance between them.',
    },
  },
  {
    id: 'yahoo',
    file: 'YAHOOEN.JS',
    folder: 'CODE',
    name: 'Yahoo Auctions',
    blurb: 'Japan auctions',
    commits: null,
    date: '06-11-26',
    spokenDate: '6 November 2026',
    text: [
      'My own unofficial way to browse Yahoo! Auctions Japan in English, with prices in NZD.',
      'Search in English and it translates your words to Japanese, showing the query so you can check it. Listings are translated by Chrome\'s on-device translator, and the whole thing runs on your own computer with no packages to install. It\'s for browsing only: to bid, you still use Yahoo or a proxy service.',
    ],
    status: 'Runs locally',
    source: 'Public',
    stack: 'JavaScript, Node, Chrome Translator API',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/kianz20/yahoo-auctions-en' }],
    shot: {
      src: yahoo,
      alt: 'Search results for "toyota supra" with listing titles in English, prices in NZD and yen, bid counts and time remaining.',
    },
  },
  {
    id: 'gs3',
    file: 'GS3.EXE',
    folder: 'CODE',
    name: 'GS3',
    blurb: 'Voice chat',
    commits: 20,
    date: '02-11-26',
    spokenDate: '2 November 2026',
    text: [
      'A Matrix chat client where voice rooms sit beside text as equals.',
      'End-to-end encryption is handled in the app, and a bot bridges voice rooms with Discord. I wrote most of the code, including the voice work and the Discord bridge.',
    ],
    credit: 'Team project: 20 of 44 commits are mine',
    status: 'In development',
    source: 'Public',
    stack: 'Rust, Dioxus, LiveKit',
    links: [{ label: 'Source on Forgejo', href: 'https://forge.elsie.cafe/E91/GS3' }],
    shot: {
      src: gs3,
      alt: 'GS3 voice room in a dark blueprint style, showing empty call slots and a join button.',
    },
  },
  {
    id: 'carjam',
    file: 'CARJAM.PY',
    folder: 'CODE',
    name: 'CarJam API',
    blurb: 'Python library',
    commits: 18,
    date: '28-09-24',
    spokenDate: '28 September 2024',
    text: ['My own unofficial Python library for CarJam, the NZ vehicle lookup site.', 'Give it a plate and get back model details, fuel use, images and odometer history. Install it with pip install carjam.'],
    status: 'Published on PyPI',
    source: 'Private',
    stack: 'Python',
    links: [{ label: 'View on PyPI', href: 'https://pypi.org/project/carjam/' }],
    code: `import carjam
client = carjam.Client()
client.model_details('fkk351')
{ "make": "TOYOTA", "model": "OPA",
  "engine": "1AZFSE", ... }`,
  },
  {
    id: 'sharesies',
    file: 'SHARESIE.PY',
    folder: 'CODE',
    name: 'Sharesies API',
    blurb: '5 merged PRs',
    commits: 12,
    date: '22-09-24',
    spokenDate: '22 September 2024',
    text: ['My contributions to an open source Python API for Sharesies NZ.', 'Sharesies is a New Zealand investing platform. My pull requests added auto invest, the weekly top 10 and wallet methods, plus some fixes.'],
    status: 'All five merged',
    source: 'Public',
    stack: 'Python',
    links: [{ label: 'Source on GitHub', href: SHARESIES_REPO }],
    pullRequests: [
      { number: 23, title: 'Added new wallet methods' },
      { number: 22, title: 'Added ability to get weekly top 10' },
      { number: 21, title: 'Fixed typos in "response" variables' },
      { number: 20, title: 'Add ability to create and update auto invests' },
      { number: 19, title: 'Fix get_companies' },
    ],
  },
];

export const pullRequestUrl = (n: number) => `${SHARESIES_REPO}/pull/${n}`;

export const GITHUB = 'https://github.com/kianz20';
export const LINKEDIN = 'https://www.linkedin.com/in/kian-jazayeri-976614220/';

export const SKILLS = 'Java, Python, JavaScript, TypeScript, React, Rust, C#, SQL, PHP, MATLAB, GDScript';
