<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~500 -->

# 🏗️ System Architecture

This map covers the system boundaries, data flows, and structural layers of Space.

## 🛰️ Core Services & Boundaries

*   **Next.js App Client (Vercel Host)**: Runs the React frontend, coordinates user actions, renders page trees, and communicates with external services.
*   **Clerk Authentication Engine**: Handles sign-in/sign-up, credentials verification, session management, and provides JWT tokens for backend request authorization.
*   **Convex Database Engine**: A serverless transactional database that pushes reactive state updates to clients over active WebSocket connections. Runs database functions (queries/mutations).
*   **EdgeStore Storage Bucket**: Directly processes image and file uploads from the client (for page cover images and editor media block uploads).
*   **SMTP Mailer**: Relays work email submissions from the contact page to the project owner via Nodemailer.

---

## ⚡ Data Flow Diagram

The following chart illustrates the transaction flow when a client requests and updates document data:

```
[Client Next.js]
   │
   ├── 1. Get JWT Token ──────────────────────────► [Clerk Auth]
   │
   ├── 2. Open WebSocket Session (with JWT) ──────► [Convex Engine]
   │                                                     │
   │                                                     ▼ (Verify JWT)
   │                                               [Run query/mutation]
   │                                                     │
   │                                                     ▼ (Write log)
   │                                               [Convex Database]
   │
   └── 3. Live State Push (Reactive Sync) ◄─────── [Convex Database]
```

---

## 📂 Architectural Layers

*   **Routing Layer**: Next.js App Router folders (`app/` namespace). Includes Route Group folders (`(landing)`, `(main)`, `(public)`) to isolate auth rules and layouts.
*   **Logic Layer (React Hooks)**: Custom state controllers under `hooks/` and Convex client providers.
*   **Database Layer**: Backend schemas and procedures under `convex/`.
*   **Component Layer**: Reusable presentational components (`components/`) and UI primitives (`components/ui/`).
