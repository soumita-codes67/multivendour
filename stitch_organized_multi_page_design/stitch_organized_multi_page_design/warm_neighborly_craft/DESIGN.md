---
name: Warm Neighborly Craft
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#414844'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f1f1ee'
  outline: '#717973'
  outline-variant: '#c1c8c2'
  surface-tint: '#3f6653'
  primary: '#012d1d'
  on-primary: '#ffffff'
  primary-container: '#1b4332'
  on-primary-container: '#86af99'
  inverse-primary: '#a5d0b9'
  secondary: '#a13e28'
  on-secondary: '#ffffff'
  secondary-container: '#fd8367'
  on-secondary-container: '#721c09'
  tertiary: '#002d1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#15442f'
  on-tertiary-container: '#81b195'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c1ecd4'
  primary-fixed-dim: '#a5d0b9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#274e3d'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0600'
  on-secondary-fixed-variant: '#822714'
  tertiary-fixed: '#bceecf'
  tertiary-fixed-dim: '#a1d1b4'
  on-tertiary-fixed: '#002112'
  on-tertiary-fixed-variant: '#224f39'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.5rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.025em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.875rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.9375rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: '1.45'
    letterSpacing: 0.005em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.6875rem
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.375rem
  space-sm: 0.75rem
  space-md: 1.25rem
  space-lg: 2rem
  space-xl: 3rem
---

## Brand & Style

This design system is tailored for a hyper-local on-demand home services ecosystem where trust, domestic security, and effortless reliability are foundational. The interface departs from cold, generic tech gig platforms by establishing a warm, rooted, and welcoming domestic aesthetic. It merges the grounded reliability of traditional neighborhood craftsmanship with modern algorithmic clarity.

The visual style blends **Contemporary Organic Modernism** with clean **Tactile Warmth**:
- **Atmosphere:** Grounded, unhurried, reassuring, and domestic. Soft warm surfaces take the place of clinical pure whites, immediately lowering cognitive anxiety associated with inviting technicians into one's home.
- **Visual anchors:** Deep heritage forest green delivers quiet institutional authority and safety verification, while energetic terracotta coral directs decisive conversion flow.
- **Voice & Tone:** Crisp, transparent, transparently rated, and straightforward.

## Colors

The color system establishes a split-role dynamic: Forest Greens anchor trust and structural presence, while Terracotta drives immediacy and transaction triggers.

### Roles & Applications
- **Surface Canvas (`#fbfaf7` / `#f7f6f2`):** Primary canvas tone. Replaces sharp #ffffff to eliminate digital glare, evoking artisanal uncoated paper and warm plaster walls. Pure white (`#ffffff`) is strictly reserved for interactive cards, input fields, and elevated popovers to generate natural contrast against the cream canvas.
- **Primary Deep Forest (`#1b4332`):** Carries brand authority, header typography, active state icons, and verification markers.
- **Secondary Terracotta / Coral (`#e06d53` / `#eb6a47`):** High-urgency interactive primary CTAs (e.g., "Instant Booking", "Book Now", high-impact status triggers).
- **Tertiary Deep Spruce (`#2d5a43`):** Alternate button fills, interactive card hero panels, and inverted card footers.
- **Mint & Sage Tints (`#e8f0eb` / `#d8e6dd`):** Supportive backgrounds for verified worker badges, active pill filters, and eco-certified tag chips.
- **Rating Gold (`#f59e0b`):** Reserved exclusively for verified customer ratings, star iconography, and aggregate review score metrics.
- **Structural Gray (`#e5e7eb`):** Low-contrast borders that sculpt cards and inputs without harsh segmenting lines.

## Typography

The design system relies entirely on **Plus Jakarta Sans** across all hierarchies. Its clean geometry provides contemporary legibility, while its subtly rounded apertures soften technical information, making rate cards, technical credentials, and quotes welcoming.

- **Headlines:** Use heavy weights (`700` and `800`) with snug negative letter spacing (`-0.02em` to `-0.03em`) for a confident, editorial look. Key highlight words within titles can switch to the primary forest tone (`#1b4332`) to draw the eye.
- **Eyebrow Badges:** Rendered in `label-sm` with full uppercase tracking (`0.06em`) in deep forest green or terracotta to label product categories and safety guarantees.
- **Pricing & Numerical Metrics:** Use bold tabular numbers in `headline-md` or `headline-lg` to ensure rate comparisons align naturally.

## Layout & Spacing

A structured 12-column responsive fluid grid aligns high-density service listings with calm, uncrowded hero flows.

- **Breakpoints:**
  - **Desktop (>= 1200px):** 12 columns, `margin: 3rem`, `gutter: 1.5rem`, maximum container constraint of 1280px.
  - **Tablet (768px - 1199px):** 8 columns, `margin: 2rem`, `gutter: 1.25rem`.
  - **Mobile (< 768px):** 4 columns, `margin: 1.25rem`, `gutter: 1rem`.
- **Vertical Rhythm:**
  - Sections maintain a consistent separation of `space-xl` (3rem to 4.5rem on desktop) to allow the warm background to breathe between dense service catalogs and professional cards.
  - Category grids use a balanced 4-column layout on desktop, condensing to a 2-column layout on tablet and mobile.

## Elevation & Depth

Visual hierarchy uses **tonal layer separation** paired with **subtle, diffused warm ambient shadows**. Harsh, cold black dropshadows are prohibited.

- **Base Canvas:** Flat warm cream (`#fbfaf7`) sets the ground tier.
- **Surface Level 1 (Service & Provider Cards):** Pure white fill (`#ffffff`) or light warm neutral (`#f7f6f2`) framed by a subtle 1px border (`#e5e7eb`). Ambient shadow: `0 4px 20px -2px rgba(27, 67, 50, 0.04)`.
- **Surface Level 2 (Floating Action Bars & Micro-Overlays):** Elevated tags like "Arrives in ~25 mins" or floating search bars use `0 12px 32px -4px rgba(27, 67, 50, 0.08)` paired with a soft white outline.
- **Surface Level 3 (Inverted Promos & Deep Footers):** Dark forest green surfaces (`#1b4332` or `#132e22`) create grounding anchor points at key conversion moments and the site footer.

## Shapes

The interface employs a friendly, rounded geometric shape language (`roundedness: 2` with generous extensions) that conveys warmth and safety.

- **Component Containers (Cards & Service Grids):** Use 1rem (`rounded-2xl` equivalent) for service cards, provider profile tiles, and steps modules.
- **Interactive Controls (Inputs, Standard Buttons):** Use 0.75rem to 1rem to match container curves.
- **Pills & Badges:** Use full circular radius (`9999px`) for status pills, category pills ("All Nearby", "Within 3 km"), star rating badges, and instant booking indicators.

## Components

### Buttons
- **Primary Conversion CTA (Instant Booking):** Terracotta fill (`#e06d53`), bold white label, 0.75rem rounded corners. On hover: shifts slightly warmer (`#eb6a47`) with a soft glow `0 4px 14px rgba(224, 109, 83, 0.3)`.
- **Secondary Action (Book Now / Filter Apply):** Deep Forest Green (`#1b4332` or `#2d5a43`) with white text.
- **Tertiary / Ghost Button:** Transparent background, 1px border (`#e5e7eb`), text in forest green.
- **Sizing:** Standard button height is 44px (touch-compliant), with compact buttons at 36px for dense card actions.

### Cards
- **Service Category Card:** Pale cream or crisp white background, minimal border (`#e5e7eb`), centered clean icon encased in a soft sage or coral circle tint, bold label, and muted pricing subtext (`Starting from ₹X`).
- **Professional Provider Card:**
  - Top half: Clean portrait photography or solid identity avatar (`#2d5a43` / `#3e4742`) with floating absolute rating badge (`★ 4.9`, gold star on black translucent pill).
  - Bottom half: Name, verified check badge (`#1b4332`), specialty category, starting hourly rate, and full-width Forest Green "Book Now >" button.
- **Process Step Card:** Warm white surface, centered numbered step indicator in rounded forest or terracotta discs, concise title, and light descriptive text.

### Badges & Chips
- **Verification Badges:** Soft sage fill (`#e8f0eb`), text in `#1b4332`, accompanied by a dark green checkmark icon.
- **Filter Chips:** Pill-shaped (`rounded-full`), white background, 1px border (`#e5e7eb`), shifting to deep green fill (`#1b4332`) with white text when active.
- **Star Rating Pill:** Dark translucent scrim (`rgba(0,0,0,0.65)`) or warm gold background tint with an amber `#f59e0b` star and white bold rating text.

### Search & Form Inputs
- **Hero Search Bar:** Multi-part capsule or card split: location selector pill, divider border, query text field with a magnifying icon, and an integrated solid Forest Green submit button (`#2d5a43`).
- **Text Inputs:** Pure white fill, 1px `#e5e7eb` boundary, 0.75rem border radius. Focus ring: 2px soft forest green tint (`rgba(27, 67, 50, 0.2)`).