# APCOM Website

Portal web da **Associação Portuguesa de Combate Medieval** — clubes, eventos, desporto e informações sobre a prática federada do combate histórico em Portugal.

## Sobre o Projeto

Website mobile-first, responsivo e acessível para a APCOM. Constrói uma presença digital unificada com informações sobre:
- **Clubes filiados** — listagem e contactos
- **Eventos** — agenda de torneios, treinos e workshops
- **Desporto** — regras e formatos de combate medieval
- **Associação** — missão, estatutos e direção

## Stack Tecnológico

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Tema:** next-themes (dark mode support)
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **UI Components:** shadcn/ui (Base UI)

## Começar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) no browser.

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Estrutura do Projeto

```
src/
├── app/                    # Rotas (App Router)
│   ├── layout.tsx          # Root layout com header, footer, providers
│   ├── page.tsx            # Homepage com hero, clubes, eventos, CTA
│   ├── clubes/page.tsx     # Página de clubes
│   ├── eventos/page.tsx    # Página de eventos (agenda)
│   ├── desporto/page.tsx   # Página sobre o desporto
│   ├── associacao/page.tsx # Página sobre a APCOM
│   └── contactos/page.tsx  # Contactos
│
├── components/
│   ├── layout/             # Header, Footer
│   ├── navigation/         # Menu components
│   ├── cards/              # EventCard, etc.
│   ├── shared/             # Container, Section, PageHeader, Logo, ThemeToggle
│   ├── ui/                 # shadcn primitives (Button, Card, Sheet, etc.)
│   └── providers/          # Providers (ThemeProvider)
│
├── sections/               # Page sections (home, clubs, events, etc.)
│   └── home/               # Hero, Clubs, AboutSport, HowToStart, Events, NationalTeam, CTA
│
├── data/                   # Static data
│   ├── events.ts           # Event data
│   ├── clubs.ts            # Club data (TBD)
│   └── navigation.ts       # Navigation items
│
├── types/                  # TypeScript types
│   ├── event.ts
│   ├── club.ts
│   └── user.ts
│
├── lib/                    # Utilities
│   ├── utils.ts            # shadcn utilities
│   ├── seo.ts              # SEO metadata helpers
│   ├── constants.ts        # Site constants (name, description, etc.)
│   └── hooks/              # useScroll, useMediaQuery
│
├── styles/
│   └── globals.css         # Global styles, CSS variables, Tailwind resets
│
└── assets/
    ├── images/             # Images and logos
    ├── icons/              # Icon assets
    └── videos/             # Video files
```

## Design System

### Spacing
- Page padding: `px-6 md:px-8 lg:px-12`
- Section spacing: `py-12 md:py-16 lg:py-24`
- Container max-width: `max-w-7xl`

### Typography
- H1 (hero): `text-4xl md:text-5xl lg:text-6xl`
- H2 (sections): `text-2xl md:text-3xl`
- Headings: `font-semibold tracking-tight`
- Secondary text: `text-muted-foreground`

### Colors
- Use semantic tokens: `bg-background`, `text-foreground`, `border-border`, `bg-card`, etc.
- Dark mode support via `next-themes`
- No hardcoded colors (`bg-white`, `text-gray-*`, etc.)

### Components
- Cards: `rounded-2xl border bg-card p-6`
- Buttons: shadcn/ui with variants (default, outline, ghost)
- Mobile-first responsive: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Dados

### Eventos

Edita `src/data/events.ts` para adicionar/atualizar eventos:

```typescript
{
  id: "1",
  title: "Torneio em Dois Portos",
  category: "torneio",
  startDate: "2025-06-20",
  location: "Dois Portos",
  organizer: "Serra Red Lion",
}
```

### Clubes

Edita `src/data/clubs.ts` (estrutura TBD com page + evento futuro).

## Deployment

Deploy no Vercel é recomendado (criador do Next.js):

```bash
vercel deploy
```

Ou no teu hosting favorito — o build é totalmente estático.

## Contribuir

Alterações devem respeitar:
- **UI/UX rules** (`.github/instructions/ui-ux-generation.instructions.md`)
- **TypeScript strict mode** (tsconfig.json)
- **ESLint** (`npm run lint`)

## License

© 2025 APCOM — Associação Portuguesa de Combate Medieval
