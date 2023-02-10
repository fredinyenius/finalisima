import { useSelector } from "react-redux";

const useGame = () => {
  return (useSelector(state => state.game));
};

export default useGame;