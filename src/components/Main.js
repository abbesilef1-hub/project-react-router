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
  }, []);

  return (
    <div className="slider">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={i === index ? "active" : ""}
          alt=""
        />
      ))}
    </div>
  )
}

export default Main