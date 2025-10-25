# Design Guidelines: Academic Portfolio Website for PhD Candidate

## Design Approach
**Design System**: Material Design-inspired academic portfolio with University of Michigan branding influence. This approach prioritizes content hierarchy, readability, and professional credibility while maintaining visual sophistication suitable for academic research presentation.

**Key Design Principles**:
1. Content-first hierarchy emphasizing research and credentials
2. Professional restraint with strategic visual interest
3. Academic credibility through clean, structured layouts
4. Scannable information architecture for recruiters and collaborators

---

## Core Design Elements

### A. Typography
**Font Families** (Google Fonts):
- Primary: Inter (400, 500, 600, 700) - for body text, labels, UI elements
- Headings: Playfair Display (600, 700) - for name, section titles (adds academic sophistication)
- Monospace: JetBrains Mono (400) - for technical details, skills

**Type Scale**:
- Hero Name: text-5xl to text-6xl (Playfair Display, font-bold)
- Hero Title: text-xl to text-2xl (Inter, font-medium)
- Section Headings: text-3xl to text-4xl (Playfair Display, font-semibold)
- Subsection Headings: text-xl to text-2xl (Inter, font-semibold)
- Body Text: text-base to text-lg (Inter, font-normal, leading-relaxed)
- Metadata/Dates: text-sm (Inter, font-medium, reduced opacity)
- Skills/Tags: text-xs to text-sm (Inter, font-medium)

### B. Layout System
**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16, 20, 24** for consistent rhythm.

**Container Strategy**:
- Full-width sections with inner max-w-6xl containers
- Content max-width: max-w-prose for text-heavy sections
- Card grids: grid with responsive columns

**Responsive Breakpoints**:
- Mobile: Single column, p-6
- Tablet (md:): Two columns where appropriate, p-8
- Desktop (lg:): Full layout, p-12 to p-20

### C. Component Library

**Header/Hero Section**:
- Fixed or sticky navigation with University of Michigan logo (top-left, h-12 to h-16)
- Split layout: Left side (name, title, brief bio, CTA), Right side (professional headshot)
- Background: Subtle gradient or abstract geometric pattern suggesting scientific/molecular themes
- Profile photo: Rounded or slight rounded corners (rounded-xl), border treatment for polish
- CTA buttons: "View Publications" and "Contact Me" with blur-backdrop treatment if on image

**Education Cards**:
- Timeline layout with institution names as primary headings
- Degree information in hierarchy: Degree Type → Department → Dates
- Skills displayed as pill badges (rounded-full, text-xs, px-3, py-1)
- Activities as bulleted list with subtle left border accent
- GPA/grades displayed prominently with proper context

**Experience Cards**:
- Institution logo or icon on left
- Position title as heading with date range in metadata style
- Project description in readable paragraph format
- Subtle card borders with hover elevation (shadow-md to shadow-lg transition)

**Publications Section**:
- Grid layout: 1 column mobile, 2-3 columns desktop
- Each card includes: placeholder image (aspect-ratio-16/9), title (font-semibold, text-lg), journal name with date (text-sm, metadata style), summary (text-base, leading-relaxed)
- Card design: Clean borders with subtle shadow, generous internal padding (p-6)
- Hover state: Gentle lift effect and shadow enhancement

**Contact/Footer**:
- Two-column layout: Left (social icons with labels), Right (contact form or additional info)
- Social icons: Sized at w-6 h-6, with hover scale effect
- Footer bar: University copyright, links to key pages
- Background: Light subtle differentiation from main content

### D. Visual Enhancements
**Minimal, Purposeful Animations**:
- Scroll-triggered fade-in for section content (once, no repeat)
- Gentle hover states on cards (scale: 1.02, shadow enhancement)
- Smooth transitions on all interactive elements (duration-200 to duration-300)

**No** carousel animations, parallax scrolling, or scroll-jacking effects - maintain academic professionalism.

---

## Images

### Hero Section
**Large hero background image**: Abstract molecular structure, laboratory glassware, or University of Michigan campus architecture. Should be sophisticated and professional, not stock-photo generic. Overlay with gradient for text readability.

**Profile Photo**: Professional headshot against neutral background. Positioned prominently in hero section, sized approximately 300-400px on desktop, circular or rounded-xl treatment.

### Publication Cards
**Three publication placeholder images**: Each representing the research topic visually - microneedles, chiral nanoparticles, microsystem schematics. These should be scientific diagrams or conceptual representations, not generic stock images.

### University of Michigan Logo
High-resolution official logo in header, linked to university homepage.

---

## Section-Specific Guidelines

**Education Section**: Use alternating card layouts or timeline visualization to break monotony. Each institution gets equal visual weight with clear hierarchical structure.

**Publications Section**: Most visually rich section with imagery. Grid layout allows scanning while maintaining detail. Include "Read More" links or DOI badges for authenticity.

**Footer Contact**: Include university address, office hours (if applicable), and professional headshot thumbnail for redundancy. Social proof element: "Open to collaboration" or research interests tags.

**Overall Page Structure**: 6-7 sections total (Hero, About/Summary, Education, Experience, Publications, Contact/Footer) with strategic whitespace (py-16 to py-24 between sections) for breathing room without excessive scrolling.