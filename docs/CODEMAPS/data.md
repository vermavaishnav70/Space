<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~400 -->

# 💾 Database & Data Models

This map documents the tables, relationships, and index definitions managed by Convex.

## 🗄️ Tables and Fields

### `documents` Table

Defines the structure of a workspace document/page:

```
┌──────────────────────────────────────────────┐
│                  documents                   │
├──────────────────────────────────────────────┤
│  _id: id("documents") (Primary Key)          │
│  _creationTime: float                        │
│  title: string                               │
│  userId: string                              │
│  isArchived: boolean                         │
│  parentDocument: id("documents") (Optional)  │
│  content: string (Optional)                  │
│  coverImage: string (Optional)               │
│  icon: string (Optional)                     │
│  isPublished: boolean                        │
└──────────────────────────────────────────────┘
```

*   **`parentDocument`** establishes a 1-to-Many self-referential relationship (one parent document can own many nested child documents).

---

## 🗂️ Database Indexes

Index configurations defined in `convex/schema.js`:

### 1. `by_user`
*   **Definition**: `["userId"]`
*   **Purpose**: Speed up user-specific document queries (e.g. global search, fetching all trash items, auditing documents owned by a user).

### 2. `by_user_parent`
*   **Definition**: `["userId", "parentDocument"]`
*   **Purpose**: Optimizes hierarchical sidebar navigation tree queries. Fetches all direct child pages nested under a specific parent folder for the current user.
