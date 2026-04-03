import type { Capability, NavItem, Project } from '@/types/content'

export const navItems: NavItem[] = [
  { label: 'PORTFOLIO', href: '/' },
  { label: 'ABOUT', href: '/about' },
]

export const projectFilters = ['ALL_UNITS', 'NEURAL_NETS', 'BLOCKCHAIN_CORES', 'INTERFACE_HUD']

export const projects: Project[] = [
  {
    id: 'PROJECT_Trade',
    title: 'Aegis Core V2',
    description: 'Hardened security runtime for distributed workloads with deterministic failover and fast event recovery.',
    tags: ['Python', 'Linux', 'Simulation'],
    icon: 'analytics',
  },
  {
    id: 'PROJECT_Zortex',
    title: 'Zortex',
    description: 'Pariptated in the development of Zortex, a innovative AI-powered day-to-day assistant designed to streamline tasks and enhance productivity. Contributed to the core architecture and feature development, leveraging Python and React to create a seamless user experience.',
    tags: ['Python', 'React', 'AI'],
    icon: 'database',
  },
  {
    id: 'PROJECT_fabrica',
    title: 'Baremetal Provisioning System',
    description: 'Observability layer for high-volume telemetry streams, tuned for real-time insight and anomaly detection.',
    tags: ['Go', 'PostgreSQL', 'React'],
    icon: 'terminal',
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
