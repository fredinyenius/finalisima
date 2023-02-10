

const HomeHero = () => {
    return ( 
      <div className="bottom">
      <h1>ACTORES DE GUERRA DE TRONOS</h1>

      <ul>
        {pokemos.length === 0 && <p>Cagando...</p>}
      </ul>
      </div>
    )
        };
        
export default HomeHero;
