import type { StateCreator } from "zustand";
import type { StoreState } from "../index";
import type { DialogBoxState } from "@/types";

export interface DialogSlice {
  dialogBox: DialogBoxState;
  showDialog: (show: boolean) => void;
}

export const createDialogSlice: StateCreator<
  StoreState,
  [],
  [],
  DialogSlice
> = (set) => ({
  dialogBox: { show: false },
  showDialog: (show) =>
    set(() => ({
      dialogBox: { show },
    })),
});