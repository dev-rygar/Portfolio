# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-13

### Added
- **React Router**: Implemented `react-router-dom` for client-side routing.
    - Added `BrowserRouter` to `main.tsx`.
    - Configured `Routes` and `Route` in `App.tsx`.
    - Added `NavLink` to `Navbar.tsx` for active state styling.
- **Documentation**: Added `docs/` directory.
    - `ARCHITECTURE.md`: Project structure overview.
    - `ROUTING.md`: Guide to adding pages and routes.
- **Versioning**: Added `CHANGELOG.md`.

### Changed
- **Folder Structure**: Reorganized `src/` directory.
    - Created `src/pages/` for view components (`Home`, `About`, `Career`, `Projects`).
    - Created `src/data/` for data files (`data.ts`, `certificateConfig.ts`).
    - Moved reusable UI components to remaining `src/components/`.
- **Refactoring**: Updated all imports to reflect new folder structure.
- **Fixes**: Fixed import paths for data and assets after reorganization.

### Removed
- **State-based Navigation**: Removed custom `useState` navigation logic from `App.tsx` and `Navbar.tsx`.
