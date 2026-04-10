import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './slider.css'
function Slider() {
    const api =
  [
    {
      "id": 0,
      "title": "Inception",
      "image": "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      "description": "A thief steals secrets through dream-sharing technology.",
      "rating": 8.8
    },
    
    {
      "id": 1,
      "title": "Interstellar",
      "image": "https://image.tmdb.org/t/p/w1280/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
      "description": "A mission to save humanity through space.",
      "rating": 8.6
    },
    {
      "id": 2,
      "title": "Avengers: Endgame",
      "image": "https://image.tmdb.org/t/p/w1280/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "description": "Avengers assemble to reverse Thanos.",
      "rating": 8.4
    },
    {
      "id": 3,
      "title": "Titanic",
      "image": "https://image.tmdb.org/t/p/w1280/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      "description": "A tragic love story at sea.",
      "rating": 7.9
    },

    
    {
      "id": 4,
      "title": "Fight Club",
      "image": "https://image.tmdb.org/t/p/w1280/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      "description": "An underground fight club emerges.",
      "rating": 8.8
    },
    {
      "id": 5,
      "title": "Joker",
      "image": "https://image.tmdb.org/t/p/w1280/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "description": "A man's descent into madness.",
      "rating": 8.4
    },
    {
      "id": 6,
      "title": "Gladiator",
      "image": "https://image.tmdb.org/t/p/w1280/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      "description": "A general seeks revenge.",
      "rating": 8.5
    },
    {
      "id": 7,
      "title": "The Matrix",
      "image": "https://image.tmdb.org/t/p/w1280/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
      "description": "Reality is a simulation.",
      "rating": 8.7
    },

    {
      "id": 8,
      "title": "Dune",
      "image": "https://image.tmdb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
      "description": "Battle for a desert planet.",
      "rating": 8.0
    },
   
    {
      "id": 9,
      "title": "Black Panther",
      "image": "https://image.tmdb.org/t/p/w1280/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
      "description": "The king of Wakanda rises.",
      "rating": 7.3
    },
    {
      "id": 10,
      "title": "Spider-Man: No Way Home",
      "image": "https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "description": "Multiverse chaos begins.",
      "rating": 8.2
    },

    {
      "id": 11,
      "title": "3 Idiots",
      "image": "https://image.tmdb.org/t/p/w1280/66A9MqXOyVFCssoloscw79z8Tew.jpg",
      "description": "College life and friendship.",
      "rating": 8.4
    }
  ]
const images = api.map(item => ({ url: item.image }));
const [currentIndex,setcurrentIndex]=useState(0)
  return (
    <div>
       
      <div className="slider-container">
        <div className='image'>
      <SimpleImageSlider
      width={1000}  // responsive width
        height={500} 
      images={images}
      showBullets={true}
      showNavs={true}
      autoPlay={true}
      slideDuration={1.5}
      onStartSlide={(index) => setcurrentIndex(index)}
       style={{}}
    />
    </div>
           {api.map((item, index) => (
        <div key={index} className="movie-overlay">
          <h1>{api[currentIndex].title}</h1>
          <p>{api[currentIndex].description}</p>
          <p className="rating">⭐ {api[currentIndex].rating}</p>
        </div>
      ))}

         
       </div>
    </div>
  )
}

export default Slider
