---
applyTo: "**/*.{tsx,jsx}, **/components/**, **/app/**/page.tsx, **/app/**/layout.tsx, **/*.css"
description: "Mandatory UI/UX generation standards for all AI-generated frontend code and layouts."
---

# AI UI/UX Generation Rules
# Version 1.1

This document defines the mandatory standards, constraints, and design philosophy for all AI-generated frontend code and layouts.

The AI assistant MUST follow these rules for every UI generation task.

---

# 1. Core Philosophy

Generate interfaces that feel:

- Modern
- Premium
- Minimal
- Functional
- Spacious
- Production-ready

Design quality should resemble products such as:

- Linear
- Vercel
- Stripe
- Raycast
- Notion
- Apple
- Arc Browser

Avoid generic "template" aesthetics.

---

# 2. Tech Stack

Always prefer:

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React Icons

Never use:

- Bootstrap
- Material UI
- jQuery
- Inline CSS
- Global CSS beyond `globals.css` (which is reserved for design tokens and resets only)
- CSS modules unless explicitly requested

## shadcn/ui first

Before creating a new primitive (Button, Dialog, Input, Select, Tabs, Tooltip, etc.), use the shadcn/ui equivalent. Only build custom primitives when shadcn does not cover the use case.

---

# 3. Architecture Rules

## Component Structure

Always break interfaces into reusable components.

Preferred structure:

```txt
/components
  /layout
  /navigation
  /cards
  /forms
  /tables
  /charts
  /modals
  /shared
```

---

# 4. Spacing & Layout System

Consistent spacing is mandatory. Never invent arbitrary values.

### Base scale (Tailwind):

- Tight internal padding → `p-4`
- Default card / panel padding → `p-6`
- Generous section padding → `p-8`

### Gaps:

- Inline / form gaps → `gap-3` or `gap-4`
- Card grids → `gap-6`
- Section separation → `gap-8` or `gap-12`

### Page-level:

- Page horizontal padding → `px-6 md:px-8 lg:px-12`
- Vertical section rhythm → `py-12 md:py-16 lg:py-24`
- Max content width → `max-w-7xl mx-auto`

### NEVER:

- Use arbitrary values like `p-[17px]` unless absolutely required
- Mix incompatible scales (`p-5` next to `p-6` for no reason)
- Cram content edge-to-edge

---

# 5. Typography Rules

## Hierarchy must be obvious

### Use:

- text-4xl → main page title
- text-2xl → section titles
- text-xl → card titles
- text-sm → metadata
- text-xs → labels

### Style rules:

- Use font-semibold for headings
- Use text-muted-foreground for secondary text
- Avoid random font size usage

### NEVER:

- Use too many font sizes
- Create weak hierarchy
- Use bold everywhere

---

# 6. Color System & Dark Mode

## Default style: neutral + subtle accent

### Use:

- background
- foreground
- muted-foreground
- border
- accent

## Preferred aesthetic:

- soft contrast
- low saturation
- elegant dark mode support

### NEVER:

- neon colors
- rainbow palettes
- harsh gradients
- overly saturated UI

## Dark mode is mandatory

All components MUST work in both light and dark mode using semantic tokens from the theme:

- Use `bg-background`, `bg-card`, `bg-muted`, `text-foreground`, `text-muted-foreground`, `border-border`
- NEVER hardcode `bg-white`, `bg-black`, `text-white`, `text-black`, `bg-gray-*`, `text-gray-*`
- Test that contrast and legibility hold in both themes

---

# 7. Component System Rules

## MUST always use reusable components

### Required structure:

- /components/ui
- /components/layout
- /components/cards
- /components/forms
- /components/navigation

---

## Component rule:

> If a UI element appears more than once → it MUST become a component.

---

## Examples:

- StatsCard
- UserAvatar
- SidebarNav
- PageHeader
- DataTable
- EmptyState

---

# 8. Card Design Rules

Cards must feel premium.

### Required styles:

```
rounded-2xl border bg-card p-6 shadow-sm
```

### Characteristics:

- Soft edges
- Subtle border
- Clean spacing
- Clear grouping

### Avoid:

- Sharp corners
- Heavy shadows
- Dense internal layout

---

# 9. Dashboard Rules

Dashboards MUST include:

- Sidebar navigation (optional but preferred)
- KPI cards
- Data visualization area
- Activity feed or table
- Filters/search when relevant

### Layout pattern:

- Top summary metrics
- Middle analytics
- Bottom details

---

# 10. Navigation Rules

## Sidebar (preferred for SaaS)

- Collapsible
- Icon + label
- Active state clearly visible

## Topbar:

- Minimal
- Search optional
- Actions on right side

### Avoid:

- Overloaded menus
- Too many nested dropdowns

---

# 11. Interaction Design

## Hover states are mandatory

### Use:

- hover:bg-accent
- hover:scale-[1.01]
- transition-all duration-200

---

## Animations (Framer Motion)

Allowed only for:

- Page transitions
- Card entrance
- Modal open/close
- Subtle fades

### Forbidden:

- Bouncy animations
- Distracting motion
- Excessive movement

---

# 12. Forms

Forms must be:

- Clean
- Well spaced
- Grouped logically

### Input style:

```
rounded-xl border bg-background px-3 py-2
```

### Must include:

- Labels
- Validation states (when applicable)
- Clear hierarchy

---

# 13. Tables

Tables must prioritize readability:

- Adequate spacing
- Soft dividers
- Hover row states
- Muted headers

### Avoid:

- Dense enterprise tables
- Overloaded columns
- Tiny text

---

# 13b. Icons (Lucide)

Lucide is the only icon library. Sizing must be consistent:

- Inline with text / small UI → `h-4 w-4`
- Inside buttons and inputs → `h-5 w-5`
- Section / page headers → `h-6 w-6`
- Empty-state hero icons → `h-10 w-10` or `h-12 w-12`

### Rules:

- Always pair with `stroke-[1.5]` or default; never thicken arbitrarily
- Use `text-muted-foreground` for decorative icons
- Always include `aria-hidden="true"` on decorative icons

---

# 13c. Images & Assets

- Always use `next/image` for raster images — never `<img>`
- Provide `alt` text (empty string `alt=""` only for purely decorative images)
- Specify `width` / `height` or use `fill` with a sized parent
- Prefer SVG for logos and illustrations
- Use `priority` only for above-the-fold hero images

---

# 14. Empty States

Every empty state must include:

- Icon (Lucide)
- Title
- Short description
- Optional CTA

---

# 15. Loading States

Preferred:

- Skeleton loaders
- Card placeholders

Avoid:

- Spinners everywhere
- Jarring loading transitions

---

# 16. Data Visualization

Charts must be:

- Minimal
- Clean
- Easy to interpret

### Rules:

- No excessive colors
- Soft grid lines
- Clear labels

---

# 17. Responsiveness (CRITICAL)

All UI must be mobile-first.

### Requirements:

- Stack on mobile
- No horizontal overflow
- Adaptive grids
- Touch-friendly spacing

### Example:

```
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

# 18. Accessibility Rules

Must include:

- Semantic HTML
- Keyboard navigation
- Focus states
- ARIA labels where needed
- Good contrast

---

# 19. Code Quality Rules

Generated code MUST be:

- Clean
- Modular
- Typed (TypeScript)
- Readable
- Production-ready

### Forbidden:

- Monolithic components
- Duplicate logic
- Messy structure

---

# 20. Naming Conventions

## Good:

- UserProfileCard
- RevenueChart
- SidebarNavigation

## Bad:

- Card1
- BoxThing
- randomDiv

---

# 21. AI Behavior Rules

The AI must behave like:

- A senior frontend engineer
- A product designer
- A design system architect

## Always:

- Prioritize clarity
- Enforce consistency
- Optimize UX
- Structure components properly

## Never:

- Dump raw HTML
- Ignore spacing
- Produce cluttered UI
- Skip responsiveness

---

# 22. Inspiration Sources (DO NOT COPY)

Use as mental models:

- Linear (UI clarity)
- Stripe (data + polish)
- Vercel (simplicity)
- Notion (flexibility)
- Raycast (efficiency)
- Apple (visual hierarchy)

---

# 23. Pre-Output Checklist

Before finalizing any UI:

- Is spacing consistent?
- Is layout responsive?
- Are components reusable?
- Is typography clear?
- Does it feel premium?
- Is it uncluttered?
- Is it production-ready?
- Would a real SaaS ship this?

If any answer is "no" → regenerate.
