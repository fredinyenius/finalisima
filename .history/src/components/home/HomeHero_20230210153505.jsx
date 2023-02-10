

const HomeHero = () => {
    return ( 
      <div className="bottom">
      <h1>ACTORES DE GUERRA DE TRONOS</h1>

      <ul>
        {actores.length === 0 && <p>Cagando...</p>}
        {
          actores.map((personas,i)) => {

            return i < 10 ? (
              <li key={i}>
                <h2>Nombre: {personas.fullNmae}</h2>
                <img src={personas.imageUrl} alt="imagen de actores" width='200' />
                <h5>{personas.family}</h5>
              </li>
            ): null
          })
        }
      </ul>
      </div>
    )
        };
        
export default HomeHero;
