import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Main from './components/Main';
import { useState } from 'react';
import MovieList from './components/MovieList';
import Footer from './components/Footer';

function App() {
  // const [movies, setmovies] = useState([
    // action
    const [action, setaction] = useState([
    {
      titre: "Mad Max: Fury Road",
      description: "In a desert, Max helps Furiosa escape a tyrant.",
      posterURL: "https://media.vanityfair.fr/photos/60d37a14dd8b60625b934f4c/1:1/w_474,h_474,c_limit/vf_mad_max_cover_2433.jpeg",
      note: 5.0
    },
    {
      titre: "John Wick",
      description: "A former hitman returns to his old ways to seek revenge.",
      posterURL: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      note: 3.5
    },
    {
      titre: "Gladiator",
      description: "A Roman general becomes a gladiator to seek revenge.",
      posterURL: "https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-gladiator-knight-warrior-png-image_12591141.png",
      note: 5.0
    },
    {
      titre: "The Dark Knight",
      description: "Batman faces the Joker in Gotham.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      note: 4.0
    },
    {
      titre: "Avengers: Endgame",
      description: "The Avengers are trying to save the universe.",
      posterURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      note: 4.5
    },
    {
      titre: "Mission Impossible: Fallout",
      description: "Ethan Hunt must prevent a global catastrophe.",
      posterURL: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      note: 4.0
    }
    ]);
    
    //  comedy
    const [comedy, setcomedy] = useState([
      {
      titre: "The Mask",
      description: "A man discovers a magic mask that changes his personality.",
      posterURL: "https://lh4.googleusercontent.com/proxy/ejFfMA7bxccZFfq0hLXyHeG_RecwYn-OlbNxycZZGgyvnXdHtvcJpJCcjW-fnk0mc-847M9RZ0vl8TrPi-8wP3KltvRSlN9p4_Toc48ijoATGu4uUwFYhDk",
      note: 3.9
    },
    {
      titre: "Superbad",
      description: "Chaotic night before graduation for two friends.",
      posterURL: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
      note: 2.8
    },
    {
      titre: "Step Brothers",
      description: "Two immature adults become brothers.",
      posterURL: "https://i.pinimg.com/736x/fb/24/10/fb24102b8dd6a72ecbd888055398bb3d.jpg",
      note: 2.8
    },
    {
      titre: "The Hangover",
      description: "A night out in Vegas takes a turn for the worse.",
      posterURL: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      note: 4.0
    },
    {
      titre: "Mr. Bean",
      description: "The hilarious adventures of Mr Bean.",
      posterURL: "https://media.tenor.com/bDswhpsxJtEAAAAe/mr-bean-holiday-mister-bean-holiday.png",
      note: 2.7
    },
    {
      titre: "Jumanji: Welcome to the Jungle",
      description: "Teenagers are trapped in a video game.",
      posterURL: "https://i.pinimg.com/originals/d7/64/61/d764616d3a51de0be543cea2c0da55c6.jpg",
      note: 3.5
    }
    ]);
    
    
    // horror
    const [herror, setherror] = useState([
      {
      titre: "The Conjuring",
      description: "Paranormal investigators offer a terrified family.",
      posterURL: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      note: 4.0
    },
    {
      titre: "It",
      description: "A group of children confronts an evil clown.",
      posterURL: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
      note: 3.6
    },
    {
      titre: "Insidious",
      description: "A child falls into a spiritual world.",
      posterURL: "https://i.pinimg.com/736x/4c/52/a6/4c52a6708647a05d4b11ad18a25634e0.jpg",
      note: 3.5
    },
    {
      titre: "Annabelle",
      description: "A possessed doll sows terror.",
      posterURL: "https://i.pinimg.com/736x/65/0e/a5/650ea5949b5d606e7baefc74af46183b.jpg",
      note: 2.1
    },
    {
      titre: "The Nun",
      description: "A priest investigates a demonic spirit.",
      posterURL: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
      note: 2.2
    },
    {
      titre: "Hereditary",
      description: "A family discovers a terrifying inheritance.",
      posterURL: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
      note: 3.6
    }
    ]);
    
    // drama
    const [drama, setdrama] = useState([
      {
      titre: "The Shawshank Redemption",
      description: "A man unjustly imprisoned still has hope.",
      posterURL: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      note: 4.5
    },
    {
      titre: "Forrest Gump",
      description: "The incredible life of Forrest Gump.",
      posterURL: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      note: 4.6
    },
    {
      titre: "The Green Mile",
      description: "A prison guard discovers a miracle.",
      posterURL: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      note: 4.6
    },
    {
      titre: "Titanic",
      description: "A tragic love story.",
      posterURL: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      note: 4.4
    },
    {
      titre: "A Beautiful Mind",
      description: "A genius confronted with schizophrenia.",
      posterURL: "https://image.tmdb.org/t/p/original/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
      note: 4.0
    },
    {
      titre: "Fight Club",
      description: "A man creates a secret fight club.",
      posterURL: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      note: 4.5
    }
    ]);

    const [add, setadd] = useState([]);

    const [text, settext] = useState("");

    const [rate, setrate] = useState("");
    

  return (
    <div className="App">
      <Navbarr settext={settext} setrate={setrate}/>
      <Main/>
      {/* <MovieList movies={{ action, comedy, herror, drama }} /> */}
      <div className='titre'>
        <h1>DISCOVER MOVIES</h1>

        <h2>ACTION MOVIES</h2>
        <MovieList movies={action}  setadd={setadd} text={text} rate={rate} />
        <hr id='line'/>
        <h2>COMEDY MOVIES</h2>
        <MovieList movies={comedy} setadd={setadd} text={text} rate={rate} />
        <hr id='line'/>
        <h2>HERROR MOVIES</h2>
        <MovieList movies={herror} setadd={setadd} text={text} rate={rate} />
        <hr id='line'/>
        <h2>DRAMA MOVIES</h2>
        <MovieList movies={drama} setadd={setadd} text={text} rate={rate} />
        <hr id='line'/>
        {/* <h2>NEW MOVIES</h2>
        <MovieList movies={add} setadd={setadd} text={text} rate={rate} /> */}

        <h2>NEW MOVIES</h2>

        <MovieList movies={add} showAdd={true} setadd={setadd} text={text} rate={rate} />

      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
