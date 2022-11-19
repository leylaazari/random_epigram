import { EpigramAddType } from "../types/EpigramAddType";

export interface EpigramAddProps {
    HandleShowAdd: () => void;
    SaveEpigram: (data: EpigramAddType) => void;
}

export interface EpigramAddContainerProps {
    HandleShowAdd: () => void;
  }