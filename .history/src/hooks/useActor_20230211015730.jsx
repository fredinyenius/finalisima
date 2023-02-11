import { useSelector } from "react-redux";

const useActor = () => {
  return (useSelector(state => state.actor));
};

export default useActor;