

const HomeHero = ({pokemos}) => {
    return ( 
      <div className="bottom">
      <h1>ACTORES DE GUERRA DE TRONOS</h1>

      <ul>
        {
          pokemos.map(item =>(
            <li key={item.id}>{item.fullName} - <img src={item.imageUrl} alt="image" />

            </li>
          ))
        }
        
      </ul>
      </div>
    )
        };
        
export default HomeHero;
