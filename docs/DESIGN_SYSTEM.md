# Design System & Consistency Review

## 1. Brand Identity
- **Primary Color**: Cyan
    - Actionable elements, links, and highlights use `cyan-700` and `cyan-600`.
    - Background accents use `cyan-100`.
- **Neutral Color**: Gray/Zinc
    - Text bodies use `gray-600` / `gray-700`.
    - Headings use `gray-900`.
- **Typography**: System San-Serif (Tailwind Default).

## 2. Inconsistencies & Conflicts
### Color Mismatch
- **Current Site**: Uses **Cyan** as the primary brand color.
- **Shadcn UI (Default)**: Uses **Zinc (Black)** as the `primary` color variable.
    - *Impact*: Shadcn `<Button variant="default" />` renders as **Black**, but your existing manual buttons render as **Cyan**.
    - *Recommendation*: Update `src/index.css` CSS variables (`--primary`) to match the Cyan brand color.

### Component Duplication
- **Buttons**:
    - *Current*: Manual `<a>` tags with classes `px-4 py-2 bg-cyan-700 text-white rounded-md`.
    - *Goal*: Use Shadcn `<Button>` component for consistency.
- **Cards**:
    - *Current*: `div` with `bg-white p-6 rounded-xl border border-gray-200`.
    - *Goal*: Use Shadcn `<Card>`, `<CardHeader>`, `<CardContent>` components.

## 3. Migration Checklist
### Global Styles
- [ ] Update `src/index.css` to map `--primary` paths to Cyan values.

### Component Refactoring
- **`Navbar.tsx`**
    - [ ] Active state uses `text-cyan-700`. Ensure this aligns with new variables.
- **`Projects.tsx`**
    - [ ] Replace "Live Demo" and "GitHub" links with Shadcn `<Button>`.
    - [ ] Replace project containers with Shadcn `<Card>`.
- **`ExperienceSummary.tsx`**
    - [ ] Check for inconsistencies in card styling.
