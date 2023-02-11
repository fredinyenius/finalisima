import { useSelector } from "react-redux";

const useActores = () => {
  return (useSelector(state => state.actor));
};

export default useActores;