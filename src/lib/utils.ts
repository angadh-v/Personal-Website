import { template } from '../settings'

export function trimExcerpt(excerpt: string): string {
	const excerptLength = template.excerptLength
	return excerpt.length > excerptLength ? `${excerpt.substring(0, excerptLength)}...` : excerpt
}

export function withBase(path: string): string {
	if (!path.startsWith('/')) {
		throw new Error('Expected a leading slash when building internal URLs.')
	}

	return `${template.base}${path}`
}
