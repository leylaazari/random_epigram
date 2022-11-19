import { useState, useEffect, useCallback, Suspense } from "react";
import EpigramDisplay from "./EpigramDisplay";
import EpigramChange from "./EpigramChange";
import Spinner from "src/components/custom/Spinner";
import CountDownTimer from "src/components/custom/CountDownTimer";
import getRandomBoolean from "src/common/functions/getRandomBoolean";
import LocalSevice from "src/utils/LocalSevice";
import "./style/style.scss";

const fortune = require("random-fortune");

const DisplayEpigramContainer = () => {
  const [newEpigram, setNewEpigram] = useState("");
  const [isAutomatic, setIsAutomatic] = useState(true);

  useEffect(() => {
    getNewEpigram();
  }, []);

  const getNewEpigram = useCallback(async () => {
    //true =  select a text from fortune
    //false = select a text from custom
    if (getRandomBoolean()) {
      setNewEpigram(fortune.fortune());
    } else {
      const result = await LocalSevice.getRandomItem();
      if (result) {
        setNewEpigram(result);
      } else {
        setNewEpigram(fortune.fortune());
      }
    }
  }, [newEpigram]);

  const handleAutomatic = useCallback(() => {
    setIsAutomatic((isAutomatic) => !isAutomatic);
  }, [isAutomatic]);

  const handleResetTimer = useCallback(() => {
    if (isAutomatic) {
      getNewEpigram();
    }
  }, [isAutomatic]);

  return (
    <div className="container mt-3">
      <div
        className="epigram-display-container"
        data-test="epigram-display-container"
      >
        <EpigramChange
          handleChangeEpigram={getNewEpigram}
          handleAutomatic={handleAutomatic}
          isAutomatic={isAutomatic}
        />
        <Suspense fallback={<Spinner />}>
          {isAutomatic && (
            <CountDownTimer handleResetTimer={handleResetTimer} />
          )}
          <EpigramDisplay epigram={newEpigram} />
        </Suspense>
      </div>
    </div>
  );
};

export default DisplayEpigramContainer;
