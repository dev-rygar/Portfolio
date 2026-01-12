# Project Architecture

## Overview
This portfolio is a Single Page Application (SPA) built with:
- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **React Router v6/v7**

## Directory Structure
The project follows a feature-based and type-based organization:

### `src/`
The source code root.

- **`src/pages/`**
    - Contains top-level view components. These correspond directly to routes (e.g., `Home.tsx` for `/`, `About.tsx` for `/about`).
    - *Example*: `Home.tsx`, `About.tsx`, `Projects.tsx`.

- **`src/components/`**
    - Contains reusable UI components that are used within pages.
    - *Example*: `Navbar.tsx` (Global navigation), `SocialLinks.tsx`, `CertificateGallery.tsx`.

- **`src/data/`**
    - Contains static data files, configurations, and content types. This separates content from logic.
    - *Example*: `data.ts` (Resume data), `certificateConfig.ts` (Certificate image mappings).

### `src/assets/`
- Static assets like images.

## Core Files
- **`main.tsx`**: Application entry point. Mounts the React app and wraps it with `<BrowserRouter>`.
- **`App.tsx`**: Main layout component. Defines the application routing using `<Routes>`.

## Styling
- **Tailwind CSS v4** is used for styling.
- Global styles and Tailwind imports are in `src/index.css`.
