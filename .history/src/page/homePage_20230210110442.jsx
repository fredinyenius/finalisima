import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchReadPokemos } from "../redux/thunks/homethunk";

const HomePage = () => {
    const dispatch = useDispatch();
    const { loading, Pokemos } = useHome();
  
    useEffect(() => {
      dispatch(fetchReadPokemos());
    }, []);
  
    return (
      <>
        {loading && <LoadersModal />}
        <HomeHero Pokemos={Pokemos} />
        {/* <HomeBestSellers /> */}
      </>
    );
  };
  
  export default HomePage;