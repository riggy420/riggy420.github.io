export type NavItem = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  icon: string
  link: string
  picture?: string
  isPrivate?: boolean
  privateReason?: string
}

export type Capability = {
  id: string
  title: string
  detail: string
}

export type StackGroup = {
  id: string
  title: string
  description: string
  icon: string
  highlight?: boolean
}

export type Milestone = {
  period: string
  role: string
  summary: string
  tags: string[]
}
