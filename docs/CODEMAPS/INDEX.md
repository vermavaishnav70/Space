<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~300 -->

# 🌌 Space Codemaps Index

Welcome to the Space Architecture Codemaps. These maps are token-lean, machine-readable summaries of the project's structure, files, and flows.

## 🗺️ Available Maps

1.  **[System Architecture (`architecture.md`)](file:///Users/vaishnavverma/Downloads/Space/docs/CODEMAPS/architecture.md)**
    High-level system diagram, service boundaries, data flows, and interactions.
2.  **[Frontend Map (`frontend.md`)](file:///Users/vaishnavverma/Downloads/Space/docs/CODEMAPS/frontend.md)**
    Page tree routes, UI component hierarchies, custom hooks, and state management flow.
3.  **[Backend Map (`backend.md`)](file:///Users/vaishnavverma/Downloads/Space/docs/CODEMAPS/backend.md)**
    Convex query/mutation services, middleware handlers, and API endpoints.
4.  **[Database & Data Model Map (`data.md`)](file:///Users/vaishnavverma/Downloads/Space/docs/CODEMAPS/data.md)**
    Tables, indexes, relations, and data mutations.
5.  **[Dependencies & Integrations Map (`dependencies.md`)](file:///Users/vaishnavverma/Downloads/Space/docs/CODEMAPS/dependencies.md)**
    Third-party services, NPM packages, and external service boundaries.

---

## 🏗️ Quick Overview

```
                        ┌───────────┐
                        │ Next.js   │
                        │ Client    │
                        └─────┬─────┘
                              │
          ┌───────────────────┼───────────────────┐
          ▼                   ▼                   ▼
    ┌───────────┐       ┌───────────┐       ┌───────────┐
    │ Clerk     │       │ Convex    │       │ EdgeStore │
    │ Auth      │       │ Database  │       │ Asset CDN │
    └───────────┘       └───────────┘       └───────────┘
```
