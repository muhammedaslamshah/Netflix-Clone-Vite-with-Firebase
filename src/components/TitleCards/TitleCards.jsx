import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'



const TitleCards = ({title, category}) => {

const [apiData, setApiData] = useState([]);

const cardsRef = useRef();

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTc3Y2QwYjgwNWRiZDk0NTQ3MDg2Y2Y1Y2JiZjQ2MyIsIm5iZiI6MTcyNzE5NzcyOS43ODIxMTgsInN1YiI6IjY2ZWZlNmIyNmMzYjdhOGQ2NDhkNmMwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NbBYFaOenTksuZsW7S3Mx0NxB8BxmRjW2ComlxiKIMc'
  }
};



const handleWheel = (event) => {
  event.preventDefault();
  cardsRef.current.scrolledLeft += event.deltaY;
}


useEffect(() => {


  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => setApiData(response.results))
  .catch(err => console.error(err));



  cardsRef.current.addEventListener('wheel', handleWheel);
},[])


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.poster_path} alt="" />
            <p>{card.original_title}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
