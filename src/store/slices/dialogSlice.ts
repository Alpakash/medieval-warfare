import { StateCreator } from "zustand";
import { DialogBoxState } from "../../types";
import { StoreState } from "../index";

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