import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

function Caracters(props) {
   const { characters, setCharacter} = props;

   const reset= ()=>{
    setCharacter(null);
   }
  return (
    <div className="character">
       <h1> PERSONAJES </h1> 
        <button className="back-home" onClick={reset} title="Volver">
        <Icon path={mdiArrowLeft} size={1} /> 
        </button>
       <div className="container-characters">
        {characters.map((c, i)=>(

            <div className="character-container" key={i}>
              <div>
                <img src={c.image} alt={c.name} />
              </div>

              <div>

                <h3> {c.name}</h3>
                <h6>

                    {c.status==='Alive'?(
                        <>
                        <span className="alive" />
                        Alive
                        </>
                    ): (
                      <>
                        <span className= "dead" />
                        Dead
                      </>
                    )
                    
                    
                    }
                </h6>
               <p>

                <span className="text-gray">Episodios: </span>
                <span>{c.episode.length}</span>

               </p>

               <p>

                 <span className="text-gray">Especie: </span>
                 <span>{c.species}</span>
               </p>
              </div>
            </div>

        ))}
        
       </div> 
       <span className="back-home" onClick={reset}>volver</span>
    </div>
  )
}

export default Caracters