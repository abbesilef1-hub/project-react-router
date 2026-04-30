import React, { useEffect, useState } from 'react'
import './main.css'

function Main() {
    const images = [
    "https://cdn.nawaat.org/wp-content/uploads/2025/10/Cinema-history-feat-640x329.jpg",
    // "https://st4.depositphotos.com/1105977/21051/i/450/depositphotos_210519084-stock-photo-vintage-film-claper-film-reel.jpg",
    "https://horreurnews.com/wp-content/uploads/2024/09/60-films-dhorreur-bases-sur-des-faits-reels-949x506.jpg",
    "https://whstrojantribune.org/wp-content/uploads/2026/01/IMG_0648.jpeg",
    // "https://pelliculte.com/wp-content/uploads/2026/01/Banniere-Article-2.png",
    "https://cdn.lesnumeriques.com/optim/news/24/244317/0c05ecc4-nouveautes-netflix-les-films-et-series-a-ne-pas-manquer-en-novembre-2025__1200_678__0-0-2128-1199.jpg",
    "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/3058/live/d21c8bb0-cb90-11ef-9fd6-0be88a764111.jpg.webp",
    "https://geekotheque.com/wp-content/uploads/2024/10/ARTICLE_LIVEACTION_VISUEL_15-10-2024.jpg",
     "https://www.milkmagazine.net//wp-content/uploads/2024/12/memoire-d-un-escargot-1024x576.jpg"
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
    
    <div className="slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={i === index ? "active" : ""}
          alt=""
        />
      ))}
      <div className='textmain'>
        <h2>John Wick</h2>
        <h6>2023 | 4.7(lmdb) | 18+ | 2hr : 22mins | English</h6>
        <h6>The goal of the John Wick saga for the viewer is to offer a pure and intense entertainment experience.</h6>
        <h6><span>Genres</span> Action</h6>
        <h6><span>Tag</span> Action, Adventure</h6>
        <div className='bouton'>
          <button className='bouton1'>PLAY NOW</button>
          <button className='bouton2'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4zM362 320L288 365.2L288 274.8L362 320z"/></svg>WATCH SEQUENCES</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Main