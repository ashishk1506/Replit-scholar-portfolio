# Academic Portfolio Website - PhD Candidate

## Overview

This is a full-stack academic portfolio website built for a PhD candidate in Chemical Engineering at the University of Michigan. The application serves as a professional showcase for research publications, patents, academic achievements, teaching experience, and outreach activities. The site features a clean, content-first design with Material Design-inspired components and University of Michigan branding influences.

The application is built with React on the frontend using TypeScript and Vite, with an Express.js backend. It uses a component-based architecture with shadcn/ui components for a consistent, professional academic aesthetic.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight React router. The application currently features a single-page layout displaying all portfolio sections sequentially.

**UI Component Library**: shadcn/ui (New York style variant) - A collection of re-usable components built on top of Radix UI primitives. All UI components are located in `client/src/components/ui/` and are fully customizable through Tailwind CSS.

**Styling Approach**: 
- **Tailwind CSS** for utility-first styling with custom design tokens
- **CSS Variables** for theming (light/dark mode support via HSL color system)
- **Custom Design System** defined in `design_guidelines.md` specifying typography (Inter, Playfair Display, JetBrains Mono), spacing primitives, and responsive breakpoints
- **Hover/Active States** implemented through custom utility classes (`hover-elevate`, `active-elevate-2`)

**State Management**: TanStack Query (React Query) v5 for server state management and data fetching, with a custom query client configuration in `client/src/lib/queryClient.ts`.

**Component Structure**:
- **Page Components**: `client/src/pages/` (currently only Home.tsx and not-found.tsx)
- **Section Components**: `client/src/components/` containing modular sections (HeroSection, EducationSection, PublicationsSection, etc.)
- **Example Components**: `client/src/components/examples/` for component showcases
- **Shared UI**: `client/src/components/ui/` for reusable shadcn components

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Architecture Pattern**: Minimal RESTful API structure with route registration pattern. The server is currently set up as a skeleton with routes to be defined in `server/routes.ts`.

**Data Storage**: 
- **Current Implementation**: In-memory storage using a Map-based implementation (`MemStorage` class in `server/storage.ts`)
- **Interface Pattern**: Storage interface (`IStorage`) allows easy swapping between in-memory and database implementations
- **Future Database**: Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless` adapter)

**Middleware**:
- JSON body parsing with raw body preservation for webhook support
- URL-encoded form data parsing
- Request/response logging middleware with duration tracking
- Error handling for API routes

**Development Environment**:
- Vite middleware integration for HMR (Hot Module Replacement)
- Development-specific plugins: runtime error overlay, cartographer, dev banner (Replit-specific tooling)

### Database Schema

**ORM**: Drizzle ORM with PostgreSQL dialect configured.

**Current Schema** (`shared/schema.ts`):
- **users table**: Basic user authentication schema with id (UUID primary key), username (unique text), and password (text)
- **Validation**: Drizzle-Zod integration for runtime type validation and TypeScript type inference

**Migration Strategy**: Drizzle Kit configured with schema push command (`db:push`) for development. Migrations output to `./migrations` directory.

**Database Provider**: Neon serverless PostgreSQL (based on `@neondatabase/serverless` dependency).

### Build and Deployment

**Development Mode**: 
- Frontend: Vite dev server with HMR
- Backend: tsx for TypeScript execution without compilation
- Concurrent serving via Vite middleware mode

**Production Build**:
1. Frontend: Vite builds to `dist/public/`
2. Backend: esbuild bundles server code to `dist/index.js` (ESM format, external packages)
3. Deployment: Single Node.js process serving both static files and API

**TypeScript Configuration**:
- Module system: ESNext with bundler module resolution
- Strict mode enabled
- Path aliases: `@/` → `client/src/`, `@shared/` → `shared/`, `@assets/` → `attached_assets/`

### Design System Integration

**Typography Hierarchy**:
- Google Fonts: Inter (body/UI), Playfair Display (headings), JetBrains Mono (code/technical)
- Consistent type scale from xs to 6xl
- Professional academic aesthetic with serif headings

**Color System**:
- HSL-based color tokens with alpha channel support
- Semantic color naming (background, foreground, primary, secondary, muted, accent, destructive)
- Component-specific color variants (card, popover, sidebar)
- Border and shadow system using CSS custom properties

**Component Theming**:
- Class Variance Authority (CVA) for variant-based component styling
- Consistent spacing using Tailwind's spacing scale (2, 4, 6, 8, 12, 16, 20, 24)
- Responsive breakpoints: mobile (default), tablet (md:), desktop (lg:)

### Asset Management

**Image Handling**: Images referenced from `attached_assets/` directory with Vite path alias `@assets`.

**Asset Types**:
- Generated images (profile photos, research illustrations)
- Stock images (university logos)
- Configured through Vite's static asset handling

## External Dependencies

### Core Framework Dependencies
- **React** (^18.x): UI library
- **React DOM**: React rendering for web
- **Express** (^4.x): Backend web server
- **TypeScript**: Type-safe development
- **Vite**: Frontend build tool and dev server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui (Radix UI)**: Component primitives (@radix-ui/* packages for accordion, dialog, dropdown, tooltip, etc.)
- **class-variance-authority**: Component variant styling
- **clsx** + **tailwind-merge**: Conditional class name utilities
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (Google Scholar, ResearchGate via `react-icons/si`)

### Data Management
- **TanStack Query** (@tanstack/react-query): Server state management
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **Drizzle-Zod**: Schema validation integration
- **Zod**: Runtime type validation
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver

### Routing and Forms
- **Wouter**: Lightweight React router
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Form validation resolvers

### Additional UI Libraries
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider component
- **date-fns**: Date formatting and manipulation
- **vaul**: Drawer component library
- **react-day-picker**: Calendar/date picker
- **input-otp**: OTP input component

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **@vitejs/plugin-react**: Vite React plugin
- **Replit Vite Plugins**: Development tooling for Replit environment
  - @replit/vite-plugin-runtime-error-modal
  - @replit/vite-plugin-cartographer
  - @replit/vite-plugin-dev-banner

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express (currently unused but available for future authentication implementation)

### Build Configuration
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Autoprefixer**: CSS vendor prefixing
- **drizzle-kit**: Drizzle ORM CLI tools for migrations