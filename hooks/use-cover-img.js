import { create } from "zustand";

export const useCoverImg = create((set) => ({
  url: undefined,
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (newUrl) => set({ isOpen: true, url: newUrl }),
}));