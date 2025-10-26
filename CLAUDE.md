# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
커밋 메시지를 작성할 떄는 작업 내용별로 분리하여 커밋하고 한글로 작성하며 CLAUDE 작업자는 제외함.

## Project Overview

Personal portfolio website built with Vue.js 2 showcasing career history and project work. The site is deployed on AWS (S3 + CloudFront) with a Spring backend API hosted on EC2.

## Development Commands

### Development

```bash
npm run serve     # Start dev server on localhost with --mode local (auto-opens browser)
```

### Building

```bash
npm run build     # Production build with --mode development
npm run dev-build # Alias for build command
```

### Linting

```bash
npm run lint      # Run ESLint
```

### Deployment

```bash
npm run deploy    # Build and deploy to S3, then invalidate CloudFront cache
```

Note: Deployment requires AWS CLI configured with appropriate credentials for S3 bucket `drawyourmind.com` and CloudFront distribution `E3JG3XF1CQRTLS`.

## Architecture

### Application Structure

**Core Layout**: The app uses a persistent shell structure with:

- `App.vue` - Root component containing ProfileMenu, WallContainer, and FooterArea
- `WallContainer` - Landing page shown only on root path `/`
- `ProfileMenu` - Navigation menu visible across all routes
- `FooterArea` - Footer component visible across all routes

**Routing**: Vue Router in history mode with these main routes:

- `/` - Landing wall (WallContainer component)
- `/career` - Career history
- `/works` - Portfolio projects with nested child routes
- `/ordinary` - Personal activities/achievements
- `/blog` - Embedded iframe to external blog
- `/comments` - Comments section

**Works Section**: The `/works` route implements a paginated carousel pattern:

- Parent component: `WorksView.vue` manages pagination state
- Child routes: Individual project detail pages (e.g., `/works/hsmoabo`, `/works/mpp`)
- Navigation: Supports prev/next arrows and page number navigation
- Projects array in `WorksView.vue` determines order and must match router configuration in `src/router/index.js`

### Data Management

**Static Configuration Files** (`src/spread/`):

- `menus.js` - Navigation menu items (internal routes and external links)
- `issues.js` - Repository metadata

**API Integration**:

- Backend API URL configured via environment variables: `VUE_APP_BASE_URL`
- `.env.local` - Local development (http://localhost:9000)
- `.env.development` - Production API (https://api.drawyourmind.com)
- Components use axios for API calls (e.g., `OrdinaryView.vue` fetches from `/ordinary/list`)

### Key Dependencies

- **Vue 2.6.12** - Core framework
- **Vue Router 3.4.9** - Routing (history mode)
- **Bootstrap Vue 2.20.1** - UI components and styling
- **axios 0.21.4** - HTTP client
- **vue-moment 4.1.0** - Date formatting
- **vuejs-paginate 2.1.0** - Pagination component

## Important Notes

### Adding New Works/Projects

When adding a new project to the portfolio:

1. Create new Vue component in `src/views/works/` (e.g., `NewProject.vue`)
2. Add route in `src/router/index.js` under `/works` children array
3. Add path name to `arrPathName` array in `src/views/WorksView.vue` in the desired position
4. Ensure route meta.name matches the path name string

The order in `arrPathName` determines the pagination sequence, not the router order.

### Environment Modes

The project uses Vue CLI with custom modes:

- `--mode local` - Development server (uses `.env.local`)
- `--mode development` - Build mode (uses `.env.development`, despite the name this is production)

### Minimum Width

The application has a minimum width of 1280px set in `App.vue`, optimized for desktop viewing.
