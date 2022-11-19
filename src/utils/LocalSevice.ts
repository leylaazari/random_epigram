import { toast } from "react-toastify";
import getRandomItemFromList from "src/common/functions/getRandomItemFromList";
import { EpigramAddType } from "src/common/types/EpigramAddType";

const LocalSevice = { 
  getRandomItem: async () => {
    try {      
        const res: EpigramAddType[] = JSON.parse(localStorage.getItem("epigramList") || "[]");
        const result = getRandomItemFromList(res);
        return result?.newEpigram;
    } catch (err: any) {
        toast.error("The operation encountered an error.");
        return "";
    }
  },
  addToEpigramList: async (item: EpigramAddType) => {
    try {
        let res: EpigramAddType[] = JSON.parse(localStorage.getItem("epigramList") || "[]");
        res.push(item);
        localStorage.setItem("epigramList", JSON.stringify(res));
        toast.success("The save was successful.");
        return true;
    } catch (err: any) {
        toast.error("The operation encountered an error.");
        return false;
    }
  },
};

export default LocalSevice;
