# NextJs App Router

---

## 📂 Folder Structure Rules for Next.js (App Router)

### 1. `app/` Directory
The `app/` directory is the root of your application and contains all routes and layouts. Each folder inside the `app/` directory represents a route in the application.

- **`page.tsx`**: Defines the main content for the route.
- **`layout.tsx`**: Defines the layout that wraps the content of the route (including nested routes).
- **`loading.tsx`**: (Optional) Shows a loading state when data is loading.
- **`error.tsx`**: (Optional) Displays an error message if data fetching or rendering fails.
- **`not-found.tsx`**: (Optional) Shows a 404 page when the route doesn't exist.

### 2. Routes
Each folder inside `app/` represents a unique route in the application.

- **Root route**: The file `app/page.tsx` represents the home route `/`.
- **Nested routes**: To create a nested route, add folders. For example:
  - `app/about/page.tsx` will create the `/about` route.
  - `app/contact/page.tsx` will create the `/contact` route.
  - `app/dashboard/settings/page.tsx` will create the `/dashboard/settings` route.

### 3. `layout.tsx` (Global Layout)
The `layout.tsx` file in the `app/` directory provides the global layout for all routes. Layouts wrap the content of the route and can include headers, footers, or navigation bars.

- Nested layouts: You can define layouts for specific sections of your app. For example:
  - `app/dashboard/layout.tsx` will apply a layout to all `/dashboard` routes.

### 4. `loading.tsx` (Loading State)
If a route requires data fetching, you can create a `loading.tsx` file to show a loading UI while the data is being fetched. You can use this file inside any route folder to show a loading state for that route.

### 5. `error.tsx` (Error Handling)
Use `error.tsx` to catch errors during rendering or data fetching at the route level. Placing an `error.tsx` file inside a route folder (e.g., `app/error.tsx`) will apply error handling for that route.

### 6. `not-found.tsx` (Custom 404 Page)
For custom 404 pages, you can create a `not-found.tsx` file inside any route folder. This will be used when a route doesn't match any existing pages.

### 7. Naming Conventions
- **Routes**: Files representing routes should always be named `page.tsx`.
- **Layouts**: Files that define layouts should be named `layout.tsx`.
- **Loading and Error States**: Use `loading.tsx` and `error.tsx` for loading and error handling.
- Use **lowercase** for all directory and file names.

### 8. Global Styles
Global styles can be imported via `app/globals.css`. This file contains styles applied across the entire app.

### 9. Components
- Place reusable UI components in a `components/` directory at the project root (outside `app/`).
- Avoid placing reusable components inside route folders. Only route-specific components should live inside the `app/` structure.

### 10. API Routes
- API routes are defined within the `app/api/` folder.
- Each folder inside `app/api/` is an API endpoint, and you define the method handlers within them:
    - `app/api/users/route.ts`: Defines the `/api/users` endpoint and handles various HTTP methods (`GET`, `POST`, etc.).
- Use the `route.ts` file to define API routes.