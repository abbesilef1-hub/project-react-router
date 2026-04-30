import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactStars from 'react-stars';
import './trailer.css';

function Trailer({movies}) {
    // const params=useParams();
    // const onemovie=movies.filter((el)=>el.id==params.id)[0];

    const { id } = useParams();
    const onemovie = movies.find((el) => el.id === Number(id));

    const navigate=useNavigate();
    
    if (!onemovie) {
    return <h2>FILM NOT fOUND</h2>;
  }
  return (
    <>
    <div className='movietrailer'>

       <h1>MOVIE TRAILER</h1>
       {/* <h2>{onemovie.genre} CATEGORY</h2> */}

    </div>

    <div className='part2'>
       <iframe 
       width="100%" 
       height="580" 
    //    src="{onemovie?.vidéo}" 
       src={onemovie.vidéo.replace("watch?v=", "embed/")}
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" 
       allowfullscreen
       ></iframe>

       <h1> {onemovie.titre}</h1>
       <h2>{onemovie.genre} Category</h2>
       <div className='listimage'>
       <img src={onemovie.image1} alt={onemovie.titre} />
       <img src={onemovie.image2} alt={onemovie.titre} />
       <img src={onemovie.image3} alt={onemovie.titre} />
       </div>
       <h4>{onemovie.date}</h4>
       <div className='resumé'>
       <h4>SUMMARY :</h4>
       <p>{onemovie.details}</p>
       </div>
        {/* <ReactStars count={5} size={24} color2={"#ffd700"} edit={false} valyesue={onemovie.note} /> */}
        <div className='persons'>
            <h4>THE MAIN CHARACTERS AND THEIR ROLES :</h4>
            <p>{onemovie.personnage1}</p>
            <p>{onemovie.personnage2}</p>
            <p>{onemovie.personnage3}</p>
            <p>{onemovie.personnage4}</p>
            <p>{onemovie.personnage5}</p>
            <p>{onemovie.personnage6}</p>
            <p>{onemovie.personnage7}</p>
            <p>{onemovie.personnage8}</p>
            <p>{onemovie.personnage9}</p>
            <p>{onemovie.personnage10}</p>
            <p>{onemovie.personnage11}</p>
            <p>{onemovie.personnage12}</p>
            <p>{onemovie.personnage13}</p>
            <p>{onemovie.personnage14}</p>
        </div>

        <ReactStars
        count={5}
        value={onemovie.note}
        size={24}
        edit={false}
        color1="#ccc"
        color2="#ffd700"
        className='stars'/>

    </div>

    <div className='buthome'>
      <button onClick={()=>navigate("/")}>RETURN</button>
   </div>
    </>
  )
}

export default Trailer