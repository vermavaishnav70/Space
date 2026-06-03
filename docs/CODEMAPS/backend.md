<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~600 -->

# ⚙️ Backend Architecture

This map lists the backend routes, database function signatures, and server-side middleware chains.

## 🛰️ Serverless API Endpoints

Next.js server-side endpoint configurations under `app/api/`:

*   **`POST /api/contact`**
    *   **Handler**: `app/api/contact/route.js`
    *   **Purpose**: Receives client feedback details (name, email, description), configures a Nodemailer transport instance, and sends an SMTP email to the host mail.
*   **`GET/POST /api/edgestore/[...edgestore]`**
    *   **Handler**: `app/api/edgestore/[...edgestore]/route.js`
    *   **Purpose**: Direct file/image client storage channel. Validates and manages bucket credentials.
    *   **Middleware hook**: `.beforeDelete(() => true)` enables file deletions directly from frontend actions.

---

## ⚡ Convex Database Procedures (`convex/documents.js`)

All procedures verify authentication permissions against Clerk users (`ctx.auth.getUserIdentity()`) before executing:

```
[Clerk JWT Verify] ──► [Retrieve User ID] ──► [Database Query / Patch / Delete]
```

### 1. Read Operations (Queries)
*   **`getSidebar(parentDocument?)`**
    *   Retrieves active documents for a given user, filtered by `isArchived == false` and parent document ID.
*   **`getTrash()`**
    *   Lists all archived documents (`isArchived == true`) for a user.
*   **`getSearch()`**
    *   Returns all non-archived documents for workspace search indexing.
*   **`getById(documentId)`**
    *   Fetches metadata. If document is marked `isPublished == true`, auth check is bypassed to enable public access.

### 2. Write Operations (Mutations)
*   **`create(title, parentDocument?)`**
    *   Inserts a new document row. Defaults: `isArchived: false, isPublished: false`.
*   **`update(id, title?, content?, coverImage?, icon?, isPublished?)`**
    *   Patches updated attributes into an existing document record.
*   **`archive(id)`**
    *   Recursive mutation. Sets `isArchived: true` on the item and traverses child rows to archive them.
*   **`restore(id)`**
    *   Recursive mutation. Resets `isArchived: false` on the item and children. If a parent is still archived, clears the parent association.
*   **`remove(id)`**
    *   Purges/deletes a document permanently from the database.
*   **`removeIcon(id)` / `removeCoverImage(id)`**
    *   Sets database fields `icon` or `coverImage` to `undefined`.
