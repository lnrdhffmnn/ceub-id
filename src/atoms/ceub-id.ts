import { atomWithStorage } from "jotai/utils";

interface CeubId {
  ra: string;
}

export const ceubIdAtom = atomWithStorage<CeubId>("ceub-id", {
  ra: "",
});
