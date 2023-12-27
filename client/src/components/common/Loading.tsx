import { CSSProperties, memo } from "react";
import MoonLoader from "react-spinners/MoonLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#36d7b7",
};
interface LoadingProps {
  loading: boolean;
}

function Loading(props: LoadingProps) {
  if (!props.loading) {
    return null;
  }
  return (
    <div className="sweet-loading fixed  inset-0 flex justify-center items-center ">
      <MoonLoader
        color="#36d7b7"
        loading={props.loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default memo(Loading);
