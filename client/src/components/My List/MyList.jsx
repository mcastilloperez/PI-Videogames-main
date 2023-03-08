import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../Card/CardFav';
import "./MyList.css";

export default function MyList(){
    
//MODIFICADO
const favoritos=useSelector(state=>state.videogamesFavoritos)
    console.log(favoritos)


return (
  <div className='favot'>
    {favoritos.length !== 0 ? (
      <div>
        <Link to='/home' className='texto'>
          HOME
        </Link>
        <h1 className='opcionestitulo'>MIS JUEGOS FAVORITOS</h1>

        <div className='mfavoritos'>
          {favoritos?.map((favors) => {
            return (
              <div className='cartas'>
                <Card
                  rating={favors.rating}
                  name={
                    <Link to={`/videogame/${favors.id}`}>{favors.name}</Link>
                  }
                  id={favors.id}
                  image={favors.image}
                />
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div>
        (
        <div className='gameover'>
          <img
            src={"https://media.giphy.com/media/JUSwkiO1Eh5K43ruN0/giphy.gif"}
            alt={"Not Found"}
          />
        </div>
        <div>
          <img
            src={"https://media.giphy.com/media/5td9K7NhQem4pOrsgQ/giphy.gif"}
            alt={"Not Found"}
          />
        </div>
        <div className='opcionesFav'>NO TIENES VIDEOJUEGOS FAVORITOS</div>
        <Link to='/home' className='texto'>
          HOME
        </Link>
        )
      </div>
    )}
  </div>
);}

