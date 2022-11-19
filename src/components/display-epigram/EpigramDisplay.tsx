import { DisplayEpigramProps } from "src/common/interfaces";

const EpigramDisplay = ({ epigram }: DisplayEpigramProps) => {
  return (
    <div className="row">
      <div className="col-12 p-5">
        <div className="card">
          <div
            data-test="display-random-epigram"
            className="card-header d-flex justify-content-between"
          >
            <div>Display Random Epigram</div>
          </div>
          <div data-test="epigram" className="card-body">
            {epigram}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpigramDisplay;
