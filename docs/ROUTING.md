# Routing & Navigation

This project uses `react-router-dom` for client-side routing.

## Defines Routes
Routes are defined in `src/App.tsx` inside the `<Routes>` component.

```tsx
<Routes location={location} key={location.pathname}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/experience" element={<Career />} />
  <Route path="/projects" element={<Projects />} />
  {/* specific 404 redirect */}
  <Route path="*" element={<Navigate to="/" replace />} />
</Routes>
```

## How to Add a New Page

1.  **Create the Page Component**
    Create a new file in `src/pages/`, for example `src/pages/Contact.tsx`.

    ```tsx
    export default function Contact() {
      return <div>Contact Me</div>;
    }
    ```

2.  **Register the Route**
    Open `src/App.tsx`.
    - Import the new page (use `lazy` for performance).
    - Add a `<Route>` entry.

    ```tsx
    const Contact = lazy(() => import("./pages/Contact"));
    // ...
    <Route path="/contact" element={<Contact />} />
    ```

3.  **Add to Navigation (Optional)**
    If you want the page to appear in the Navbar, open `src/components/Navbar.tsx` and add it to the `navItems` array.

    ```tsx
    const navItems = [
      // ...
      { name: "Contact", path: "/contact" },
    ];
    ```
