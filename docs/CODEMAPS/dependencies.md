<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~500 -->

# 📦 Dependencies & Service Integrations

This map catalogs the third-party integrations and core library dependencies that support Space's features.

## 🛰️ External Service Integrations

```
┌─────────────────┐       ┌─────────────────┐       ┌─────────────────┐
│   Clerk Auth    │       │     Convex      │       │    EdgeStore    │
│  Identity Gate  │       │  Data Engine    │       │   Asset CDN     │
└────────┬────────┘       └────────┬────────┘       └────────┬────────┘
         │                         │                         │
         ▼                         ▼                         ▼
  [Session Tokens]          [WebSocket Sync]          [Static Images]
         └─────────────────────────┼─────────────────────────┘
                                   ▼
                         ┌─────────────────┐
                         │ Next.js Client  │
                         └─────────────────┘
```

*   **Clerk Identity Gate**: Synchronizes sessions and maps authentications. Used on the client via `@clerk/nextjs` providers and on the backend via `auth.config.js`.
*   **Convex WebSocket Channel**: Establishes a socket loop between the user's browser client and Convex's serverless nodes, avoiding REST request cycles.
*   **EdgeStore File System**: Connects image file inputs to a public CDN bucket. Used to process dynamic banners and in-editor media blocks.

---

## 📚 Core Libraries & Frameworks

From `package.json`:

| Package | Category | Purpose |
| :--- | :--- | :--- |
| `next` (`^14.2.12`) | Framework | Standard React meta-framework; handles routes, layouts, and page bundling. |
| `convex` (`^1.16.2`) | Backend | Handles live WebSockets, data queries, and serverless mutations. |
| `@clerk/nextjs` | Authentication | Binds user login middleware and JWT retrieval tools. |
| `@edgestore/react` / `@edgestore/server` | Media Manager | Controls secure image transfers and deletes. |
| `@blocknote/react` / `@blocknote/mantine` | Text Editor | Implements rich-text block editing canvases. |
| `zustand` | Local State | Lightweight state manager (handles modals, search, system preference states). |
| `lucide-react` / `react-icons` | Icons | Renders vector icon sets. |
| `nodemailer` | Email Utility | Relays SMTP contacts from the contact form. |
| `tailwind-merge` / `clsx` | Layout Helpers | Simplifies conditional class merging. |
