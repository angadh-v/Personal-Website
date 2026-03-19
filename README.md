# Angadh Portfolio

Personal portfolio built with Astro, Tailwind, and DaisyUI for GitHub Pages.

## Structure

- `src/data/portfolio.ts`: resume-derived projects, experience, education, skills, and contact data.
- `src/settings.ts`: site identity, SEO defaults, theme defaults, and deployment config.
- `src/pages/`: homepage plus `projects`, `experience`, and `resume` routes.
- `src/content/BlogPosts/`: dormant writing collection. Keep draft-only content here until the writing section is ready to launch.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

Astro telemetry is disabled in the build command above because the sandboxed environment used during implementation did not allow writes under `~/Library`.

## GitHub Pages

The project includes `.github/workflows/deploy.yml` for GitHub Pages deployment through GitHub Actions.

Before going live, set the final root-domain URL in one of these ways:

- update `template.website_url` in `src/settings.ts`, or
- set `SITE_URL` in the build environment to override it.

If the final repo is not a root-domain repo, also update `template.base`.
