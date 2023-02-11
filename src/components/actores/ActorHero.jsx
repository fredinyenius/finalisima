const ActorHero = ({actores}) => {
    
    return ( 
        <div >
              <br />
              <br />
              <br />

            <h1>ACTORES DE GUERRA DE TRONOS</h1>

            <ul>
              {
                actores.map(item =>(
                  <li key={item.id}>{item.fullName} 
                  <br />
                  <br />
                   <img src={item.imageUrl} alt="image" />

                  </li>
                ))
              }
              
            </ul>
            </div>
    )
        };
        
export default ActorHero;