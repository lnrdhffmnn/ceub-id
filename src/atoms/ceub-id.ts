import { atomWithStorage } from "jotai/utils";

interface CeubId {
  ra: string;
  code: string;
}

export const ceubIdAtom = atomWithStorage("ceub-id", {
  ra: "",
  code: "",
} as CeubId);
