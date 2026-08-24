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
  liveUrl: string
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
    id: 'systems-portfolio',
    title: 'Full-Stack Systems Portfolio',
    year: '2026',
    category: 'Portfolio',
    description: 'A proof-led portfolio connecting interface craft, systems thinking, deployment, documentation, and operations work.',
    tech: ['React', 'TypeScript', 'Systems'],
    image: '/projects/portfolio.png',
    imageAlt: 'Full-stack systems portfolio home page preview',
    liveUrl: 'https://portfolio-marc-mendoza.onrender.com/',
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
  },
  {
    id: 'skilltest-indonesia',
    title: 'SkillTest Indonesia',
    year: '2026',
    category: 'Platform',
    description: 'A live business platform built and maintained across frontend, Firebase services, deployment, and technical handover.',
    tech: ['React', 'Firebase', 'Production'],
    image: '/projects/skilltest.png',
    imageAlt: 'SkillTest Indonesia customer dashboard preview',
    liveUrl: 'https://skilltestindonesia.com/',
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
    liveUrl: 'https://mitratestindonesia.com/login',
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
  },
  {
    id: 'part-time-hub',
    title: 'Part Time Hub Indonesia',
    year: '2026',
    category: 'One-Pager',
    description: 'A focused Indonesian opportunity platform presented through a direct, responsive, single-page experience.',
    tech: ['Responsive', 'Localized', 'Launch'],
    image: '/projects/parttimehub.png',
    imageAlt: 'Part Time Hub Indonesia job search page preview',
    liveUrl: 'https://parttimehubindonesia.com/',
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
