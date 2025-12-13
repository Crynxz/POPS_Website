# POPS Home Care Platform - Design Guidelines

## Design Approach

**Selected Approach:** Hybrid (Reference-Based + System)
- **Primary References:** Stripe (premium aesthetics), Headspace (trust-building), Care.com (service marketplace)
- **Design System Foundation:** Tailwind CSS utilities with custom premium components
- **Key Principles:** Trust through whitespace, professional restraint, content clarity, strategic visual hierarchy

## Typography System

**Font Stack:** Plus Jakarta Sans (Google Fonts)
- **Headings:** Font weights 700-800, tight letter-spacing (-0.02em to -0.03em)
- **H1 (Hero):** text-5xl md:text-6xl lg:text-7xl, font-bold, leading-tight
- **H2 (Sections):** text-3xl md:text-4xl lg:text-5xl, font-bold
- **H3 (Cards/Components):** text-xl md:text-2xl, font-semibold
- **Body Text:** text-base md:text-lg, font-normal (400), leading-relaxed
- **Small Text/Labels:** text-sm, font-medium (500), uppercase tracking-wide

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24
- **Section Padding:** py-16 md:py-20 lg:py-24
- **Component Gaps:** gap-6 md:gap-8 lg:gap-12
- **Card Padding:** p-6 md:p-8 lg:p-10
- **Container Max-Width:** max-w-7xl with px-6 md:px-8

## Component Library

### Navigation Header
- Glassmorphism sticky header (backdrop-blur-lg, bg-white/80)
- Logo on left, navigation links center, dual CTA buttons right
- Height: h-20, shadow-sm on scroll

### Hero Section
- **Layout:** Two-column grid (lg:grid-cols-2) with text left, image right
- **Height:** Natural content height, not forced viewport
- **Content:** Eyebrow text (small, uppercase), large heading, descriptive paragraph, dual CTAs, trust badges below
- **Image:** Professional caregiver photo, rounded-2xl, shadow-xl, aspect-square md:aspect-auto
- **Background:** Subtle gradient overlay with dot pattern

### Trust Indicators Section
- **Layout:** 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- **Cards:** White cards with icon (circular bg), large number stat, small label
- **Hover:** Lift effect (hover:-translate-y-2)
- **Icons:** Use Font Awesome 6 via CDN

### Pricing/Tiers Section
- **Layout:** 3-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Cards:** Border cards, featured tier elevated with border accent
- **Structure:** Tier name, description, price (large text), feature list (checkmarks), CTA button
- **Featured Badge:** Absolute positioned tag at top

### Features/Benefits Section
- **Layout:** Alternating 2-column grids (image left/right alternates)
- **Content:** Icon, heading, description, bullet points
- **Images:** Contextual photos showing service quality

### FAQ Section
- **Layout:** Single column, max-w-3xl mx-auto
- **Accordion:** Expandable cards with smooth transitions
- **Structure:** Question (font-semibold), answer (text-base)

### Waitlist Form Section
- **Layout:** Centered, max-w-xl
- **Background:** Subtle gradient or solid background
- **Form:** Email input + submit button (inline flex on desktop)
- **Additional:** Trust indicators below form, privacy text (text-sm)

### Footer
- **Layout:** 4-column grid (logo/about, quick links, resources, contact)
- **Mobile:** Single column stack
- **Additional:** Newsletter signup, social icons, trust badges, legal links

## Images

**Hero Image:** Professional photo of caregiver assisting elderly person, warm and trustworthy setting, high-quality photography

**Features Section Images:** 3-4 lifestyle photos showing:
- Caregiver verification process
- Quality care interaction
- Family satisfaction/peace of mind
- Professional certification display

**Placement:** Right side of hero, alternating left/right in features section

## Interactive Elements

**Buttons:**
- Primary: Solid background with shadow, slight lift on hover
- Secondary: Outline style with fill on hover
- Glassmorphism style on hero image: backdrop-blur-md bg-white/20 (no hover animations)

**Cards:**
- Default: Subtle border, minimal shadow
- Hover: -translate-y-2, increased shadow, border accent shift
- Transition: transition-all duration-300

**Form Inputs:**
- Border: rounded-lg, focus ring with brand color
- States: Default, focus, error, success
- Validation: Inline error messages below inputs

## Accessibility

- Form labels: Always visible or sr-only with placeholder
- Focus states: Clear ring-2 focus indicators
- Color contrast: WCAG AA minimum on all text
- Interactive elements: min-h-12 for touch targets

## Quality Specifications

- **Vertical Rhythm:** Consistent py-16/20/24 section spacing
- **Multi-Column Strategy:** Use grids decisively - 4-col for trust, 3-col for tiers, 2-col for features
- **Whitespace:** Generous breathing room between sections, never cramped
- **Component Enrichment:** Every section has 3+ meaningful elements
- **No Floating Elements:** All components grounded with context
- **Professional Polish:** Subtle shadows, smooth transitions, refined details throughout