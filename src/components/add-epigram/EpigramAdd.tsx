import { useForm } from "react-hook-form";
import { EpigramAddProps } from "src/common/interfaces";
import { EpigramAddType } from "src/common/types/EpigramAddType";
import "./style/style.scss";

const EpigramAdd = ({ HandleShowAdd, SaveEpigram }: EpigramAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EpigramAddType>({});

  const onSubmit = handleSubmit(async (data: EpigramAddType) => {
    SaveEpigram(data);
  });

  return (
    <div className="row">
      <div className="col-12 p-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            Add New Epigram
          </div>
          <form
            className="search-suggest-form p-5 text-start"
            onSubmit={onSubmit}
            data-test="form-new-epigram"
          >
            <label>New Epigram:</label>
            <textarea
              className="w-100 text-black p-2 newEpigram"
              rows={3}
              data-testid="input-newEpigram"
              {...register("newEpigram", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.newEpigram?.type === "required" && (
              <p className="error userform__error">It is required.</p>
            )}
            <button type="submit" className="btn btn-success m-2 btn-add">
              Save
            </button>
            <button
              type="reset"
              className="btn btn-danger btn-cancel"
              onClick={HandleShowAdd}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EpigramAdd;
