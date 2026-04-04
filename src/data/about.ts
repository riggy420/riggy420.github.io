import type { Milestone, StackGroup } from '@/types/content'

export const stackGroups: StackGroup[] = [
  {
    id: 'CORE_LOGIC',
    title: 'Functional Programming',
    description: 'TypeScript and Go. Scalable, type-safe architectures designed for concurrency and reliability.',
    icon: 'terminal',
  },
  {
    id: 'UI_ARCH',
    title: 'UI Architecture',
    description: 'Tailwind, React, and Framer. Building precise interface systems with composable primitives.',
    icon: 'layers',
    highlight: true,
  },
  {
    id: 'CLOUD_FORGE',
    title: 'Cloud Forge',
    description: 'AWS, Docker, and Kubernetes. Shipping resilient applications from local to production.',
    icon: 'dns',
  },
  {
    id: 'PROGRAMMING_LANGUAGES',
    title: 'Programming Languages',
    description: 'TypeScript and Go. Scalable, type-safe architectures designed for concurrency and reliability.',
    icon: 'code',
  },
  {
    id: 'PROGRAMMING_LANGUAGES',
    title: 'Data Science',
    description: 'Python, R, Java. Data processing and machine learning pipelines optimized for performance and maintainability.',
    icon: 'code',
  },
  {
    id: 'PROGRAMMING_LANGUAGES',
    title: 'Embedded Systems',
    description: 'C, C++. Low-level programming for resource-constrained environments with a focus on efficiency and reliability.',
    icon: 'code',
  },
]

export const persistence = ['POSTGRESQL', 'REDIS', 'MONGODB', 'ELASTICSEARCH','MYSQL']

export const milestones: Milestone[] = [
  {
    period: '2026.Jan — 2026.Mar',
    role: 'AI R&D Engineer @ WeBank',
    summary: 'Work in the Web3 Coding team to build a secure and scalable AI coding framework for other software developer in the bank to use. I was mainly responsible for the memory management module in the framework, which provides efficient and reliable memory allocation and deallocation for AI workloads.',
    tags: ['AI', 'Software_Development'],
  },
  {
    period: '2025.Jun — 2025.Dec',
    role: 'FinTech Trainee @ Chiyu Bank',
    summary: "Developed and architect a internal chatbot system for internal document retrieval and Q&A, which significantly improved the efficiency of information access for employees across departments. The system was built with vector database and langchain framework, and integrated with the bank's existing knowledge base and communication tools.",
    tags: ['Banking_System', 'AI'],
  },
  {
    period: '2024. Dec — 2025. Feb',
    role: 'Full Stack Developer @ SmartAge',
    summary: 'Consulted for 20+ startups, creating technical roadmaps and shipping MVP architecture from zero.',
    tags: ['Embedded Systems', 'Software_Development'],
  },
]
