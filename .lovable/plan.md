
# Layout, Section Order, and Video Placement Overhaul

## Summary
This plan addresses four key areas: (1) expanding the hero container to a wider 1510px max-width with scaled-up headline typography, (2) reordering homepage sections to match the requested flow, (3) creating four new sections that don't yet exist, and (4) inserting the uploaded video into the Our Work grid.

---

## 1. Hero Width and Scale Fix

**Current state:** The Tailwind container is capped at `1400px` (2xl breakpoint). The hero headline maxes out at `7.5rem` (~120px).

**Changes:**
- Update `tailwind.config.ts` to add a custom screen breakpoint and extend the container max-width to `1510px`
- Update the hero headline `clamp()` in `src/index.css` from `clamp(3rem, 7vw, 7.5rem)` to `clamp(3rem, 7.5vw, 7.2rem)` -- this reaches ~105-115px at xl+ screens while maintaining fluid scaling
- The hero background remains full-viewport (it already uses `absolute inset-0`), only the content container gets the wider constraint
- Horizontal padding stays at `px-6 lg:px-12` for clean gutters

## 2. Section Reorder

**Current order in `Index.tsx`:**
1. Navbar
2. Hero
3. Our Work
4. Capabilities
5. Footer

**Requested order:**
1. Hero
2. Capabilities Built for Creators
3. Our Work
4. Testimonials (NEW)
5. Stories That Move Brands Forward (NEW)
6. FAQs (NEW)
7. Choose Your Plan (NEW)
8. Connect With Our Editor (replaces current Footer contact area)

**Changes to `src/pages/Index.tsx`:**
- Swap OurWorkSection and CapabilitiesSection positions
- Import and add four new section components between OurWorkSection and Footer

## 3. New Section Components

### 3a. TestimonialsSection (`src/components/TestimonialsSection.tsx`)
- 3-column grid of testimonial cards on desktop, stacked on mobile
- Each card: quote text, author name, role/company, avatar placeholder
- Dark card styling matching existing `capability-card` aesthetic
- Framer Motion stagger entrance animation

### 3b. StoriesSection (`src/components/StoriesSection.tsx`)
- Section headline: "Stories that move brands forward"
- 2-3 featured story/case-study cards with image placeholders
- Brief description text per card
- Hover effects consistent with the work cards

### 3c. FAQSection (`src/components/FAQSection.tsx`)
- Accordion-based FAQ using the existing Radix accordion component (`src/components/ui/accordion.tsx`)
- 5-6 common questions about video editing services
- Clean dark styling with border separators
- Centered layout with max-width constraint

### 3d. PricingSection (`src/components/PricingSection.tsx`)
- Section headline: "Choose your plan"
- 3-column pricing grid (Starter, Professional, Enterprise)
- Each card: plan name, price, feature list, CTA button
- Highlighted/recommended plan with primary border accent
- Responsive: stacks on mobile

### 3e. ContactSection (`src/components/ContactSection.tsx`)
- Section headline: "Connect with our editor"
- Contact form: name, email, message fields
- CTA submit button with primary styling
- Placed above the Footer as a dedicated section

## 4. Video Insertion in Our Work

**Change in `src/components/OurWorkSection.tsx`:**
- The uploaded video (`/videos/showreel.mp4`) is already the source for all work items
- The first work item already uses this video with autoplay, muted, loop, and playsInline
- Hover scale + dark overlay + title reveal are already implemented
- No video changes needed -- the grid already functions as specified

## 5. Responsive Considerations

- The wider 1510px container will have no effect below 1510px viewport width -- content simply fills available space with padding
- All new sections will use the same `container mx-auto px-6 lg:px-12` pattern
- FAQ accordion and pricing cards will stack vertically on mobile
- No horizontal scroll risk since all content uses relative/percentage widths within the container

---

## Technical Details

### Files Modified
| File | Change |
|------|--------|
| `tailwind.config.ts` | Update container screens `2xl` to `1510px` |
| `src/index.css` | Adjust hero-headline clamp to reach ~105-115px at xl |
| `src/pages/Index.tsx` | Reorder sections, import new components |

### Files Created
| File | Purpose |
|------|---------|
| `src/components/TestimonialsSection.tsx` | Client testimonial cards |
| `src/components/StoriesSection.tsx` | "Stories that move brands forward" section |
| `src/components/FAQSection.tsx` | Accordion FAQ using Radix primitives |
| `src/components/PricingSection.tsx` | 3-tier pricing cards |
| `src/components/ContactSection.tsx` | "Connect with our editor" form section |

### Section Order After Changes
```text
+---------------------------+
|         Navbar            |
+---------------------------+
|       HeroSection         |
+---------------------------+
|   CapabilitiesSection     |
+---------------------------+
|     OurWorkSection        |
+---------------------------+
|  TestimonialsSection      |
+---------------------------+
|     StoriesSection        |
+---------------------------+
|      FAQSection           |
+---------------------------+
|    PricingSection         |
+---------------------------+
|    ContactSection         |
+---------------------------+
|         Footer            |
+---------------------------+
```

### Design Consistency Rules
- All new sections use `py-24 lg:py-36 bg-background` for vertical rhythm
- Headlines use the existing `.section-headline` CSS class
- Cards use `bg-card border-border` tokens from the design system
- Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations
- Same stagger pattern (`containerVariants` / `itemVariants`) reused across grids
