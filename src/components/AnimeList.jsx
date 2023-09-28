import React from "react";
import classes from "./AnimeList.module.css";


const AnimeList = (props) => {

    const {data} = props.anime_data;
    if(!data){
        return(<h1>No results found!</h1>);
    }

    return (
      <div>
        <h1 id={classes.header}>Character List</h1>
        <ul>
          {data.map((character) => (
           <li key={character.mal_id}>
           <img src={character.images.jpg.image_url} alt={character.name} />
            <div className={classes.detailsContainer}>
           <span className={classes.detail} id={classes.character_name}>{character.name}</span>
           <span className={classes.detail} id={classes.character_favorites}><img id={classes.heart} src="https://t4.ftcdn.net/jpg/00/39/35/95/360_F_39359503_OwuPkSOhBPDVZvEBLVo3CzTEn4qjXmqm.jpg" alt="heart"/> {character.favorites}</span>
           <a href={character.url} target="_blank" rel="noopener noreferrer">
             <img id={classes.arrow} src="https://icones.pro/wp-content/uploads/2021/06/icone-fleche-droite-violet.png" alt="arrow"/>
           </a>
           </div>

         </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AnimeList;