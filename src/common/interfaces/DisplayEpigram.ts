export interface DisplayEpigramProps {
    epigram:string;
}

export interface ChangeEpigramProps {
    handleChangeEpigram: () => void;
    handleAutomatic: () => void;
    isAutomatic: boolean;
}