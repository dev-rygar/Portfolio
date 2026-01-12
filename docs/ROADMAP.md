# Improvement Roadmap

This document outlines suggestions for refining the current portfolio, focusing on quality, maintainability, and user experience of existing features.

## 1. UI & UX Refinement
### Dark Mode Implementation
- **Status**: Partially supported by Shadcn setup, but many components have hardcoded `bg-white` or `text-gray-900`.
- **Action**:
    - Replace hardcoded colors with Shadcn semantic variables (e.g., `bg-background`, `text-foreground`).
    - Add a Theme Toggle component.
- **Benefit**: Essential feature for developer portfolios; shows attention to detail.

### Consistent Animations
- **Status**: `framer-motion` is installed but used sporadically (mainly on `Home`).
- **Action**:
    - Create a reusable `<PageTransition>` wrapper.
    - Standardize scroll reveal animations on Cards.
- **Benefit**: Makes the application feel more polished and "alive".

### Responsive Design Audit
- **Status**: Tailwind is used, but complex components (like the `Career` cards or Tables) might need tuning for mobile.
- **Action**: Manually verify all pages on mobile viewports.

## 2. Code Quality & Architecture
### Component Decomposition
- **Status**: Pages like `Home.tsx` contain significant layout logic that could be split.
- **Action**:
    - Extract `HeroSection`, `BioSection` into dedicated components.
    - Move types from `data.ts` to `src/types/index.ts`.
- **Benefit**: Improves readability and maintainability.

### Type Safety
- **Status**: Data is typed, but can be improved.
- **Action**: Enable strict mode options in `tsconfig` if not already fully utilized. Ensure all props checks are rigorous.

## 3. Performance Optimization
### Image Optimization
- **Status**: JPG/PNG files are imported directly.
- **Action**:
    - Convert images to WebP format for smaller sizes.
    - Use `vite-plugin-image-optimizer` or similar tools.
    - Implement `width` and `height` attributes to prevent Cumulative Layout Shift (CLS).
- **Benefit**: Faster load times and better Lighthouse scores.

### Lighthouse Audit
- **Status**: Unknown.
- **Action**: Run Google Lighthouse to identify specific performance/accessibility bottlenecks.

## 4. Accessibility (A11y)
### Semantic HTML
- **Status**: Generally good, but `div` soup can happen.
- **Action**: Ensure usage of `<main>`, `<article>`, `<header>`, `<footer>`, and `<nav>` is semantically correct.
- **Benefit**: Better for screen readers and SEO.

### Keyboard Navigation
- **Status**: Needs verification.
- **Action**: Ensure all interactive elements (Cards with actions, Buttons, Links) are focusable and have visible focus states.
