import { useState } from "react";
import DisplayEpigram from "src/components/display-epigram/EpigramDisplayContainer";
import EpigramAdd from "src/components/add-epigram/EpigramAddContainer";
import AddNewEpigramButton from "../add-epigram/AddNewEpigramButton";

const HomeContainer = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);

  const HandleShowAdd = () => {
    setIsShowAdd((setIsShowAdd) => !setIsShowAdd);
  };

  return (
    <>
      <AddNewEpigramButton HandleShowAdd={HandleShowAdd} />
      {isShowAdd ? (
        <EpigramAdd HandleShowAdd={HandleShowAdd} />
      ) : (
        <DisplayEpigram />
      )}
    </>
  );
};

export default HomeContainer;
