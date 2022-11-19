import { EpigramAddContainerProps } from "src/common/interfaces";

const AddNewEpigramButton = ({ HandleShowAdd }: EpigramAddContainerProps) => {
  return (
    <div className="container">
      <div className="row mt-3 text-start">
        <div className="col-12">
          <button
            data-test="btnShowAdd"
            className="btn btn-dark btnShowAdd"
            onClick={HandleShowAdd}
          >
            Add New Epigram
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewEpigramButton;
