import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { fetchReadPokemos } from "../redux/thunks/homethunk";

const HomePage = () => {
    const dispatch = useDispatch();
    const { l } = useHome();
  
    useEffect(() => {
      dispatch(fetchReadPokemos());
    }, []);
  
    return (
      <>
        {loading && <LoadersModal />}
        <HomeHero heroProducts={heroProducts} />
        {/* <HomeBestSellers /> */}
        <ContactMeans />
      </>
    );
  };
  
  export default HomePage;