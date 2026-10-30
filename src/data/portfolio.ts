export interface Experience {
  role: string
  company: string
  location: string
  period: string
  summary?: string
  highlights?: string[]
  stack?: string[]
}

export interface Project {
  id: string
  title: string
  year: string
  category: string
  description: string
  tech: string[]
  image: string
  imageAlt: string
  video?: string
  liveUrl: string
  screenLabel?: string
  screens?: { label: string; image: string; alt: string }[]
  workflow?: {
    title: string
    steps: { actor: string; title: string; detail: string }[]
    outcome: string
  }
  evidence: {
    challenge: string
    ownership: string
    systems: string[]
    delivery: string
  }
}

export interface SkillGroup {
  title: string
  skills: string[]
}

export interface SocialLink {
  label: string
  href: string
  display: string
}

export const profile = {
  name: 'Marc Angelo Mendoza',
  role: 'Full Stack Web Developer',
  location: 'Tanza, Cavite',
  education: 'BS Information Technology',
  graduated: '2025',
  email: 'mendoza.marcangelo28@gmail.com',
  github: 'https://github.com/Necko0204',
  portfolio: 'https://portfolio-marc-mendoza.onrender.com',
}

export const experiences: Experience[] = [
  {
    role: 'Full Stack Web Developer — Freelance',
    company: 'Direct Client',
    location: 'Indonesia',
    period: 'June 2026 — Present',
    highlights: [
      'Developed and maintained a responsive full-stack order and task management platform.',
      'Created dedicated Customer, Admin, and Super Admin portals.',
      'Implemented authentication, product management, orders, balances, top-ups, withdrawals, commissions, notifications, and database security.',
      'Improved mobile responsiveness, bilingual support, workflows, and deployment.',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Firebase', 'GitHub'],
  },
  {
    role: 'Customer Service Specialist',
    company: 'Remote',
    location: 'Malaysia',
    period: 'May 2026 — July 2026',
    summary: 'Worked with booking changes, refunds, deposits, maintenance requests, special requests, and guest concerns while coordinating with front office, housekeeping, maintenance, and finance teams.',
  },
  {
    role: 'Executive Virtual Assistant',
    company: 'Tochigami, LLC',
    location: 'Honolulu, USA',
    period: 'June 2025 — June 2026',
    summary: 'Supported customer coordination and daily business operations while contributing to website and technical projects using PHP, ReactJS, and other development tools.',
  },
  {
    role: 'Social Media & Community Manager — Freelance',
    company: 'Direct Client',
    location: 'UK',
    period: 'March 2026 — June 2026',
    summary: 'Managed social media communities and improved engagement and visibility through community interaction and platform-focused growth strategies.',
  },
  {
    role: 'Appointment Setter — Contract',
    company: 'Direct Client',
    location: 'USA',
    period: 'January 2026 — March 2026',
    summary: 'Generated and qualified leads through cold outreach using GoHighLevel while managing follow-ups and workflows through ClickUp.',
  },
]

export const projects: Project[] = [
  {
    id: 'skilltest-indonesia',
    title: 'SkillTest Indonesia',
    year: '2026',
    category: 'Platform',
    description: 'A live business platform built and maintained across frontend, Firebase services, deployment, and technical handover.',
    tech: ['React', 'Firebase', 'Production'],
    image: '/projects/skilltest.png',
    imageAlt: 'SkillTest Indonesia customer dashboard preview',
    liveUrl: 'https://trainingtestindonesia.com/',
    screens: [
      { label: 'Member workspace', image: '/projects/skilltest.png', alt: 'Tokopedia-branded member workspace with balance and account actions' },
      { label: 'Admin operations', image: '/dashboards/skilltest-admin.png', alt: 'SkillTest Indonesia admin dashboard with registration and transaction analytics' },
    ],
    workflow: {
      title: 'Multi-role task and account operations',
      steps: [
        { actor: 'CUSTOMER', title: 'Submit and manage work', detail: 'Access tasks, orders, account activity, and balance actions in the member portal.' },
        { actor: 'ADMIN', title: 'Process daily operations', detail: 'Review registrations, manage tasks and orders, and handle top-ups and withdrawals.' },
        { actor: 'SUPER ADMIN', title: 'Oversee the platform', detail: 'Manage administrator access, catalog settings, and system-wide activity.' },
      ],
      outcome: 'One platform connecting member activity with administrator operations.',
    },
    evidence: {
      challenge: 'Run order, task, balance, and commission workflows securely across multiple user roles.',
      ownership: 'Sole full-stack developer, end to end, for a direct client: built the customer, admin, and super admin portals; implemented Firebase services, authentication, order and finance workflows, responsive bilingual UX, deployment, and technical handover.',
      systems: ['Customer portal', 'Admin portal', 'Super Admin portal', 'Orders & tasks', 'Balances & notifications'],
      delivery: 'Live production platform',
    },
  },
  {
    id: 'mitra-test',
    title: 'Mitra Test Indonesia',
    year: '2026',
    category: 'System',
    description: 'A production authentication and task-management entry point for an Indonesian client system, delivered for real operational use.',
    tech: ['Authentication', 'Client Work', 'Production'],
    image: '/projects/mitratest.png',
    imageAlt: 'Mitra Test Indonesia task dashboard preview',
    liveUrl: 'https://mitrakerjaindonesia.com/',
    screenLabel: 'Task dashboard',
    workflow: {
      title: 'Secure access to operational tasks',
      steps: [
        { actor: 'TEAM MEMBER', title: 'Sign in', detail: 'Reach the system through a protected authentication flow.' },
        { actor: 'TASK BOARD', title: 'Review assigned work', detail: 'Open the dashboard entry point and find the current task queue.' },
        { actor: 'WORKFLOW', title: 'Continue the task', detail: 'Move into the operational task flow with the right account access.' },
      ],
      outcome: 'A clear, secure entry point for day-to-day client operations.',
    },
    evidence: {
      challenge: 'Provide a secure entry point and practical task workflow for day-to-day client operations.',
      ownership: 'Client production system: implemented the protected authentication flow, responsive task dashboard entry, and operational task workflow, then delivered the deployed system.',
      systems: ['Protected authentication', 'Task dashboard', 'Operational access'],
      delivery: 'Live production system',
    },
  },
  {
    id: 'way-more',
    title: 'Way More — Car Selling Marketplace',
    year: '2026',
    category: 'Marketplace',
    description: 'A two-sided car selling experience that connects vehicle owners with trusted local dealers competing to make offers.',
    tech: ['Automotive', 'Dealer Marketplace', 'Offer Workflow'],
    image: '/projects/waymore.png',
    imageAlt: 'Way More car selling marketplace homepage',
    liveUrl: 'https://waymoremockup.vercel.app/',
    screenLabel: 'Seller landing screen',
    workflow: {
      title: 'A competitive route to sell a car',
      steps: [
        { actor: 'SELLER', title: 'Share vehicle details', detail: 'Start a guided intake with the information dealers need to respond.' },
        { actor: 'DEALERS', title: 'Submit offers', detail: 'Local dealers review the listing and compete to make an offer.' },
        { actor: 'SELLER', title: 'Compare and choose', detail: 'Review the offers and select the preferred next step.' },
      ],
      outcome: 'One seller journey connecting vehicle intake to dealer offers.',
    },
    evidence: {
      challenge: 'Make it easier for people to sell a car by bringing verified dealer offers into one clear process.',
      ownership: 'Built the consumer and dealer interfaces, including seller intake, dealer registration, competitive offers, and offer selection.',
      systems: ['Seller onboarding', 'Dealer registration', 'Competitive offers', 'Customer & dealer portals'],
      delivery: 'Live Vercel marketplace experience',
    },
  },
  {
    id: 'nova-supply',
    title: 'Nova Supply — E-commerce Storefront',
    year: '2026',
    category: 'E-commerce',
    description: 'A polished retail storefront with curated collections, product discovery, customer accounts, wishlists, and a shopping bag.',
    tech: ['E-commerce', 'Storefront', 'Product Catalog'],
    image: '/projects/nova-storefront.png',
    imageAlt: 'Nova Supply e-commerce storefront homepage',
    liveUrl: 'https://nova-ecommerce-storefront-salf-ochre.vercel.app/',
    screenLabel: 'Storefront landing screen',
    workflow: {
      title: 'From product discovery to shopping bag',
      steps: [
        { actor: 'DISCOVER', title: 'Browse a collection', detail: 'Explore curated categories and product ranges.' },
        { actor: 'EVALUATE', title: 'Open a product', detail: 'Review product details before deciding what to save or buy.' },
        { actor: 'SAVE OR SHOP', title: 'Wishlist or add to bag', detail: 'Keep a product for later or add it to the shopping bag.' },
      ],
      outcome: 'A connected retail journey from browsing through purchase intent.',
    },
    evidence: {
      challenge: 'Create a premium shopping experience that makes everyday products and collections easy to explore.',
      ownership: 'Built the storefront UI and shopping journey: collection browsing, product detail pages, customer account screens, wishlists, and shopping bag.',
      systems: ['Curated storefront', 'Collection browsing', 'Product pages', 'Wishlist & shopping bag'],
      delivery: 'Live Vercel e-commerce storefront',
    },
  },
  {
    id: 'upforit',
    title: 'Upforit — UK Fitness Directory',
    year: '2026',
    category: 'Directory',
    description: 'A UK-wide fitness event discovery platform for athletes exploring HYROX, running, OCR, CrossFit, and endurance events.',
    tech: ['UK Fitness', 'Event Discovery', 'Directory'],
    image: '/projects/upforit.png',
    imageAlt: 'Upforit UK fitness event discovery homepage',
    liveUrl: 'https://upforit-re-audit.vercel.app/',
    screenLabel: 'Event discovery screen',
    workflow: {
      title: 'Find an event and build a race season',
      steps: [
        { actor: 'ATHLETE', title: 'Choose a sport and area', detail: 'Start with an event type, location, or training goal.' },
        { actor: 'DIRECTORY', title: 'Compare UK events', detail: 'Explore race dates across HYROX, running, OCR, CrossFit, and endurance.' },
        { actor: 'SEASON PLAN', title: 'Save the next challenge', detail: 'Keep events together and turn a search into a training plan.' },
      ],
      outcome: 'A path from event discovery to a personal season plan.',
    },
    evidence: {
      challenge: 'Help athletes find a real event to train toward across sports, locations, and dates.',
      ownership: 'Built the UK fitness directory experience, covering event discovery, sport navigation, club browsing, and athlete season planning.',
      systems: ['UK event discovery', 'Sport categories', 'Athlete season planning', 'Club directory'],
      delivery: 'Live UK fitness directory',
    },
  },
  {
    id: 'king-abang',
    title: 'King Abang Gadget Repair',
    year: '2026',
    category: 'Client',
    description: 'A polished service and reservation site that makes device repair feel dependable, transparent, and easy to book.',
    tech: ['TypeScript', 'Booking', 'Responsive'],
    image: '/projects/kingstore.png',
    imageAlt: 'King Abang Gadget Repair landing page preview',
    liveUrl: 'https://kingstore-kry3.onrender.com/',
    evidence: {
      challenge: 'Help customers understand repair services and reach a reservation flow with confidence.',
      ownership: 'Client website: designed and built the responsive TypeScript interface, repair service pages, and reservation journey.',
      systems: ['Service catalogue', 'Reservation journey', 'Mobile-first interface'],
      delivery: 'Live client-facing website',
    },
  },
  {
    id: 'holy-spirit-school',
    title: 'Holy Spirit School of Imus',
    year: '2026',
    category: 'Education',
    description: 'A school-facing web experience and ERP-style project developed with PHP, MySQL, Bootstrap, and team leadership.',
    tech: ['PHP', 'MySQL', 'Team Lead'],
    image: '/projects/hshr.png',
    imageAlt: 'Holy Spirit School of Imus landing page preview',
    liveUrl: 'https://hshr.onrender.com/landing_page',
    evidence: {
      challenge: 'Bring school information and ERP-style workflows into an accessible web experience.',
      ownership: 'Team project: served as team lead and contributed PHP and MySQL development, Bootstrap interface work, and responsive school pages while coordinating delivery.',
      systems: ['School-facing website', 'ERP-style workflows', 'Responsive pages'],
      delivery: 'Live deployed school project',
    },
  },
  {
    id: 'peak-recruitment',
    title: 'Peak Recruitment Services',
    year: '2026',
    category: 'Recruitment',
    description: 'A UK construction recruitment website connecting contractors with card-checked plant operators and site labour across civils, quarry, infrastructure, and utilities.',
    tech: ['Construction', 'Recruitment', 'Job Listings'],
    image: '/projects/peak-recruitment.png',
    imageAlt: 'Peak Recruitment Services homepage with a dark blue hero and site labour navigation',
    video: '/projects/peak-recruitment.webm',
    liveUrl: 'https://peakwb2.vercel.app/',
    screenLabel: 'Recruitment homepage',
    evidence: {
      challenge: 'Help contractors request qualified site labour while giving workers clear routes to roles and registration.',
      ownership: 'Built the responsive public website with sector and service pages, compliance information, labour request paths, job listings, and worker entry points.',
      systems: ['Sector pages', 'Labour requests', 'Compliance information', 'Job listings', 'Worker registration'],
      delivery: 'Live UK recruitment website',
    },
  },
  {
    id: 'manos-youtube-info',
    title: 'Manos Corp — YouTube Video Info',
    year: '2026',
    category: 'Utility',
    description: 'A focused web utility that retrieves public YouTube video information from a pasted video URL.',
    tech: ['YouTube Metadata', 'URL Lookup', 'Web Utility'],
    image: '/projects/manos-youtube-info.png',
    imageAlt: 'Manos Corp YouTube video information lookup form',
    liveUrl: 'https://manos-trial-test1-lilac.vercel.app/',
    evidence: {
      challenge: 'Make public video information quick to retrieve from a YouTube link.',
      ownership: 'Built the focused lookup interface: YouTube URL input, submission flow, and public video metadata results.',
      systems: ['YouTube URL input', 'Metadata lookup', 'Focused utility interface'],
      delivery: 'Live Vercel utility',
    },
  },
  {
    id: 'daily-grind',
    title: 'Daily Grind Athletics',
    year: '2026',
    category: 'One-Pager',
    description: 'An assertive fitness landing page exploring premium art direction, editorial rhythm, and high-energy conversion design.',
    tech: ['Art Direction', 'Motion', 'Landing Page'],
    image: '/projects/fitness.png',
    imageAlt: 'Daily Grind Athletics landing page preview',
    liveUrl: 'https://one-pager-portfolio-fitness.vercel.app/',
    evidence: {
      challenge: 'Translate the energy of a fitness brand into a focused one-page conversion experience.',
      ownership: 'Created the fitness brand art direction and built the responsive landing page, motion details, content sections, and conversion path.',
      systems: ['Editorial landing page', 'Motion language', 'Conversion sections'],
      delivery: 'Live design exploration',
    },
  },
  {
    id: 'coaching-hub',
    title: 'Necko’s Coaching Hub',
    year: '2026',
    category: 'Web App',
    description: 'A conversion-focused coaching experience turning a competitive gaming background into a clear, bookable service.',
    tech: ['React', 'UI/UX', 'Conversion'],
    image: '/projects/valorant.png',
    imageAlt: 'Necko’s Coaching Hub landing page preview',
    liveUrl: 'https://valo-coaching-necko.onrender.com/',
    evidence: {
      challenge: 'Make a competitive coaching offer immediately understandable, credible, and easy to book.',
      ownership: 'Framed the coaching offer and built the responsive React experience, service presentation, and booking journey.',
      systems: ['Service positioning', 'Booking journey', 'Responsive landing page'],
      delivery: 'Live web application',
    },
  },
  {
    id: 'systems-portfolio',
    title: 'Full-Stack Systems Portfolio',
    year: '2026',
    category: 'Portfolio',
    description: 'A proof-led portfolio connecting interface craft, systems thinking, deployment, documentation, and operations work.',
    tech: ['React', 'TypeScript', 'Systems'],
    image: '/projects/portfolio.png',
    imageAlt: 'Full-stack systems portfolio home page preview',
    liveUrl: 'https://portfolio-marc-mendoza.onrender.com/',
    evidence: {
      challenge: 'Turn a broad CV and mixed project history into a concise, proof-led developer narrative.',
      ownership: 'Personal project: planned the information architecture, designed the visual system, built the responsive React site and motion, and handled deployment.',
      systems: ['Portfolio data model', 'Project index', 'Responsive navigation', 'Theme system'],
      delivery: 'Live portfolio · continuously maintained',
    },
  },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Responsive Web Design'] },
  { title: 'Backend / Data', skills: ['PHP', 'SQL', 'Firebase', 'PostgreSQL', 'Supabase'] },
  { title: 'Programming', skills: ['Python', 'Java', 'C#', 'C++'] },
  { title: 'Development', skills: ['Git', 'GitHub'] },
  { title: 'Workflow', skills: ['GoHighLevel', 'ClickUp', 'Microsoft Office'] },
  { title: 'AI', skills: ['ChatGPT', 'Codex', 'Gemini', 'Claude'] },
]

export const strengths = [
  'Problem solving',
  'Communication',
  'Adaptability',
  'Fast learning',
  'Customer empathy',
  'Workflow thinking',
]

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: `mailto:${profile.email}`, display: profile.email },
  { label: 'GitHub', href: profile.github, display: 'github.com/Necko0204' },
  { label: 'Portfolio', href: profile.portfolio, display: 'portfolio-marc-mendoza.onrender.com' },
]
