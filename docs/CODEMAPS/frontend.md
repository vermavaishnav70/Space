<!-- Generated: 2026-06-04 | Files scanned: 38 | Token estimate: ~700 -->

# 🖥️ Frontend Structure & Hierarchy

This map details the client-side router, component roles, hooks, and layout flows.

## 🧭 Page Tree & Routes

The page routing hierarchy is defined using Next.js App Router groups:

```
app/
├── layout.js                     # Root HTML layout, binds core providers
├── (landing)/                    # Unauthenticated landing group
│   ├── layout.jsx                # Landing page layout (header, footer)
│   └── page.jsx                  # Main Landing view
├── (main)/                       # Authenticated workspace group
│   ├── layout.jsx                # Collapsible sidebar and page frame
│   └── (routes)/document/
│       ├── page.jsx              # Main Dashboard (empty state, create doc action)
│       └── [documentId]/
│           └── page.jsx          # Rich-Text Editor canvas
├── (public)/                     # Shared documents group (bypass auth check)
│   └── (routes)/preview/[documentId]/
│       └── page.jsx              # Read-only document preview canvas
└── contact-me/
    └── page.jsx                  # Contact support and info form page
```

---

## 🎨 Component Hierarchy (Workspace Page)

When editing a document, components are structured as follows:

```
[Root Main Layout: app/(main)/layout.jsx]
   ├── [Sidebar Navigation: app/(main)/_components/navigation.jsx]
   │      ├── [User Profile: UserItem.jsx]
   │      ├── [Sidebar Action Item: Item.jsx]
   │      ├── [Recursive File Tree: documentList.jsx]
   │      │      └── [Nested File Item: Item.jsx]
   │      └── [Trash Manager Modal Trigger: trashBox.jsx]
   │
   └── [Main Workspace Content Area]
          ├── [Workspace Navbar: app/(main)/_components/navbar.jsx]
          │      ├── [Title Inline Edit: title.jsx]
          │      └── [Publish Menu Dropdown: Publish.jsx]
          │
          └── [Document Canvas: app/(main)/(routes)/document/[documentId]/page.jsx]
                 ├── [Cover Image Banner: components/cover.jsx]
                 ├── [Header Toolbar & Emojis: components/toolbar.jsx]
                 └── [BlockNote Rich Text Editor: components/Editor/editor.jsx]
```

---

## ⚙️ Hooks & State Management

*   **Zustand States** (`hooks/`):
    *   `use-search.js`: Toggles the command search dialog popup globally.
    *   `use-setting.js`: Controls system preference sliders/modals.
    *   `use-cover-img.js`: Manages cover image update status and target IDs for file overlays.
*   **Custom React Hooks**:
    *   `useOrigin.js`: Dynamic window calculation to prevent SSR origin hydration mismatches.
    *   `use-toast.js`: Standard toast dispatcher hook from Shadcn UI.
