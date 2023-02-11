import { useSelector } from "react-redux";

const useActores = () => {
  return (useSelector(state => state.actores));
};

export default useActores;