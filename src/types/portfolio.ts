export type ProjectCategory = 'industry' | 'research' | 'personal'

export type ProjectVisibility = 'public' | 'public-safe'

export interface ProjectLink {
	label: string
	href: string
	external?: boolean
}

export interface Project {
	title: string
	slug: string
	category: ProjectCategory
	summary: string
	organization: string
	dates: string
	stack: string[]
	impact: string
	links: ProjectLink[]
	featured: boolean
	visibility: ProjectVisibility
}

export interface ExperienceEntry {
	role: string
	organization: string
	location: string
	dates: string
	summary: string
	relatedProjectSlugs: string[]
}

export interface EducationEntry {
	school: string
	degree: string
	location: string
	dates: string
	description: string
	honors: string[]
	coursework: string[]
	researchInterests: string[]
}

export interface SkillGroup {
	title: string
	items: string[]
}

export interface ContactDetails {
	email: string
	phone: string
	location: string
}
