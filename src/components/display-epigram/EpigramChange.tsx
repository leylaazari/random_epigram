import React from "react";
import { ChangeEpigramProps } from "src/common/interfaces";

const EpigramChange = ({
  handleChangeEpigram,
  handleAutomatic,
  isAutomatic,
}: ChangeEpigramProps) => {
  return (
    <div className="row mt-3">
      <div className="col-12 c-epigram-change">
        <div className="d-sm-flex justify-content-sm-between">
          <button
            className="btn btn-warning mb-2"
            onClick={handleChangeEpigram}
            data-test="change-epigram"
          >
            Change Epigram
          </button>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              data-test="form-check-input"
              type="checkbox"
              name="switch"
              value={isAutomatic ? "yes" : "no"}
              checked={isAutomatic}
              onChange={handleAutomatic}
            />
            <label className="form-check-label">Automatic Change</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(EpigramChange);
