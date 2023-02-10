

const HomeHero = () => {
    return ( 
      <div className="bottom">
      <h1>ACTORES DE GUERRA DE TRONOS</h1>

      <ul>
        {
          Pokemos.map(item =>(
            <li key={item.id}>{item.fullName} - {item.title}

            </li>
          ))
        }
        
      </ul>
      </div>
    )
        };
        
export default HomeHero;
