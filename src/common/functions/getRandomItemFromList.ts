import { EpigramAddType } from "../types/EpigramAddType";

const getRandomItemFromList = (items: EpigramAddType[]) =>
{  
    return items[Math.floor(Math.random()*items.length)];     
}

export default getRandomItemFromList;