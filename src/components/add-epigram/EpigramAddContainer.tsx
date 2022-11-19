import { Suspense } from "react";
import Spinner from "src/components/custom/Spinner";
import EpigramAdd from "./EpigramAdd";
import LocalSevice from "src/utils/LocalSevice";
import { EpigramAddContainerProps } from "src/common/interfaces";
import { EpigramAddType } from "src/common/types/EpigramAddType";

const EpigramAddContainer = ({ HandleShowAdd }: EpigramAddContainerProps) => {
  const SaveEpigram = async (data: EpigramAddType) => {
    const result = await LocalSevice.addToEpigramList(data);
    if (result) HandleShowAdd();
  };

  return (
    <div className="container mt-3">
      <div className="epigram-display-container">
        <Suspense fallback={<Spinner />}>
          <EpigramAdd SaveEpigram={SaveEpigram} HandleShowAdd={HandleShowAdd} />
        </Suspense>
      </div>
    </div>
  );
};

export default EpigramAddContainer;
