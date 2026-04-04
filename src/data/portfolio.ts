import type { Capability, NavItem, Project } from '@/types/content'

export const navItems: NavItem[] = [
  { label: 'PORTFOLIO', href: '/' },
  { label: 'ABOUT', href: '/about' },
]

export const projectFilters = ['ALL_UNITS', 'AI', 'Embedded', 'Linux']

export const projects: Project[] = [
  {
    id: 'PROJECT_Trade',
    title: 'Trading Core V2',
    description: 'A full trading ecosystem, inluding automated trading, data scrapping, data anyalytics and all presented to a website, allowing people to browse for different trading strategies ',
    tags: ['Python', 'Linux', 'Simulation'],
    icon: 'analytics',
    link: "https://github.com/riggy420/library",
    isPrivate: false,
    privateReason: 'Client confidentiality',
  },
  {
    id: 'PROJECT_Zortex',
    title: 'Zortex',
    description: 'Pariptated in the development of Zortex, a innovative AI-powered day-to-day assistant designed to streamline tasks and enhance productivity. Contributed to the core architecture and feature development, leveraging Python and React to create a seamless user experience.',
    tags: ['Python', 'React', 'AI'],
    icon: 'database',
    link: "#",
    isPrivate: true, 
    privateReason: "Under NDA"
  },
  {
    id: 'PROJECT_fabrica',
    title: 'Baremetal Provisioning System',
    description: 'A platform for provisioning and managing bare-metal infrastructure with automated deployment and configuration so that different IT teams can efficiently manage their resources.',
    tags: ['Go', 'PostgreSQL', 'Hardware',"linux"],
    icon: 'terminal',
    link: "#",
    isPrivate: true,
    privateReason: 'Under HKUST IP',

  },
  {
    id: 'PROJECT_float',
    title: 'ROV - float',
    description: 'Served under HKUST Robotics team and designed and architected a mini-ROV that can auto-deploy and measure temperature, time, pressure and depth in extreme environments and report the data. A 240p high resolution analog videos was trasnmitted for inspection',
    tags: ['Embedded', 'Hardware', 'C++'],
    icon: 'hardware',
    link: "#",
    isPrivate: true,
    privateReason: 'Other team has exclusive rights',
  },
]

export const capabilities: Capability[] = [
  {
    id: '01',
    title: 'ARCHITECTURE',
    detail: 'Designing modular systems that survive scale, failure, and evolving product constraints.',
  },
  {
    id: '02',
    title: 'INTERFACE',
    detail: 'Building precise, reusable UI systems that keep visual quality and engineering velocity aligned.',
  },
  {
    id: '03',
    title: 'PERFORMANCE',
    detail: 'Tracking render, network, and compute bottlenecks to keep systems responsive under load.',
  },
  {
    id: '04',
    title: 'DELIVERY',
    detail: 'Owning the pipeline from prototype to stable release with measurable operational reliability.',
  },
]
