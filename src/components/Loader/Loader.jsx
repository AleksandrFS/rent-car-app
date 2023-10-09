import { Circles } from "react-loader-spinner";
import { Spinner } from "./Loader.styled";

export const Loader = () => {
  return (
    <Spinner>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Spinner>
  );
};
