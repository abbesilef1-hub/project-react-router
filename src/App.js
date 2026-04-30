import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './components/Navbarr';
import Main from './components/Main';
import { useState } from 'react';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { Route, Routes } from 'react-router-dom';
import Trailer from './components/Trailer';

function App() {
  // const [movies, setmovies] = useState([
    // action
    const [action] = useState([
    {
      id: Math.random(),
      titre: "Mad Max: Fury Road",
      description: "In a desert, Max helps Furiosa escape a tyrant.",
      posterURL: "https://media.vanityfair.fr/photos/60d37a14dd8b60625b934f4c/1:1/w_474,h_474,c_limit/vf_mad_max_cover_2433.jpeg",
      note: 5.0,
      vidéo: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
      genre: "ACTION",
      image1: "https://media.gq-magazine.co.uk/photos/5d139ad2b363fac81820cfa7/16:9/w_2560%2Cc_limit/Mad-Max-GQ-01Apr15_rex_b.jpg",
      image2: "https://static01.nyt.com/images/2015/05/14/arts/madmax2/madmax2-superJumbo.jpg",
      image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixcVCCtfB6RHUlf0f2HAcjnKl3PQmSrcyOw&s",
      details: "Mad Max: Fury Road is a 2015 high-octane dystopian action film where drifter Max Rockatansky (Tom Hardy) joins forces with Imperator Furiosa (Charlize Theron) to escape a desert fortress, the Citadel, controlled by the tyrannical Immortan Joe. They lead a high-speed, 2-hour battle across the Wasteland in a massive tanker truck, attempting to escape Joe's war party and locate a legendary green place.",
      personnage1: "■ Max Rockatansky (Tom Hardy): A former police officer turned lone survivor. Captured by the War Boys, he becomes Nux's blood donor before reluctantly, then willingly, joining forces with Furiosa.",
      personnage2: "■ Immortan Joe (Charlize Theron): A fearless warrior and driver of the War Rig. She betrays Immortan Joe to save his five wives and search for the Green Earth.",
      personnage3: "■ Immortan Joe (Hugh Keays-Byrne): The main antagonist. Tyrannical leader of the Citadel, he controls the water and oil, exploiting his people with his army of War Boys.",
      personnage4: "■ Nux (Nicholas Hoult): A fanatical, sick War Boy seeking a glorious death. After failing to capture Furiosa, he switches sides and helps the group, finding redemption.",
      personnage5: "■ The Wives (Splendid, Toast, Capable, Dag, Cheedo): Five young women chosen by Immortan Joe to bear children. They flee to escape this sexual exploitation.",
      personnage6: "■ The Vuvalini: A group of elderly warrior women, survivors of the desert, who aid Furiosa in her quest.",
      date: "From May 2015..."
    },
    {
      id: Math.random(),
      titre: "John Wick",
      description: "A former hitman returns to his old ways to seek revenge.",
      posterURL: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
      note: 3.5,
      vidéo:"https://www.youtube.com/watch?v=pWK5crMuhHY",
      genre: "ACTION",
      image1: "https://media.newyorker.com/photos/5cdf1ad7339acf8247bfc768/master/pass/Richard-JohnWick.jpg",
      image2: "https://loudandclearreviews.com/wp-content/uploads/2023/03/john-wick-ranked-ballerina.webp",
      image3: "https://media.wired.com/photos/5ce2b5a238916b8e47a0c4b2/3:2/w_2560%2Cc_limit/Culture_Monitor_JohnWick3.jpg",
      details: "John Wick is a stylized action thriller starring Keanu Reeves as a retired assassin who returns to the criminal underworld for vengeance. After Russian gangsters steal his 1969 Mustang and kill the puppy left by his deceased wife, Wick relentlessly hunts them down, defying a former employer to exact revenge and showcasing his legendary skills.",
      personnage1: "■ John Wick (Keanu Reeves): Nicknamed Baba Yaga, he is a formidable retired assassin who returns to his old ways after his car is stolen and his dog is killed.",
      personnage2: "■ Viggo Tarasov (Michael Nyqvist): Head of the Russian underworld in New York and John's former employer. He tries to protect his son, Iosef, while also understanding the threat John poses.",
      personnage3: "■ Iosef Tarasov (Alfie Allen): Viggo's arrogant and sadistic son, whose reckless actions (car theft, killing the dog) trigger John's revenge.",
      personnage4: "■ Marcus (Willem Dafoe): A seasoned hitman, John's mentor and friend. Although hired by Viggo to kill John, he secretly watches over him.",
      personnage5: "■ Winston Scott (Ian McShane): The mysterious owner of the Continental Hotel in New York, a neutral ground for criminals. He respects John and ensures that the rules are followed.",
      personnage6: "■ Miss Perkins (Adrianne Palicki): A ruthless assassin who hunts John for the bounty on his head.",
      personnage7: "■ Aurelio (John Leguizamo): The owner of a luxury garage who hides the cars stolen by Iosef and informs John of his activities.",
      personnage8: "■ Helen Wick (Bridget Moynahan): John's deceased wife, whose death from illness triggers John's retirement, and whose last gift (the puppy Daisy) is the catalyst for the film.",
      date: "From October 2014..."
    },
    {
      id: Math.random(),
      titre: "Gladiator",
      description: "A Roman general becomes a gladiator to seek revenge.",
      posterURL: "https://png.pngtree.com/png-vector/20240601/ourmid/pngtree-gladiator-knight-warrior-png-image_12591141.png",
      note: 5.0,
      vidéo:"https://www.youtube.com/watch?v=4rgYUipGJNo",
      genre: "ACTION",
      image1: "https://www.hollywoodreporter.com/wp-content/uploads/2017/05/gladiator_-_h_-_2000.jpg?w=1296&h=730&crop=1",
      image2: "https://i.guim.co.uk/img/media/cf05d3e7596f8cbac09b66810e73979544077cb3/0_37_2992_1796/master/2992.jpg?width=1200&quality=85&auto=format&fit=max&s=64e8ded882467021b08912d8495f067c",
      image3: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5109895-6a15-43b3-b17c-58b40a404801_990x557.jpeg",
      details: "Gladiator, directed by Ridley Scott, is an epic historical drama starring Russell Crowe as Maximus Decimus Meridius, a betrayed Roman general who becomes a gladiator to avenge his family and the murdered Emperor Marcus Aurelius. It won five Oscars, including Best Picture and Best Actor.",
      personnage1: "■ Maximus Decimus Meridius (Russell Crowe): A brilliant Roman general, named successor by Marcus Aurelius. Betrayed, he becomes a gladiator to avenge his family and kill Commodus.",
      personnage2: "■ Commodus (Joaquin Phoenix): Son of Marcus Aurelius, he becomes emperor after assassinating his father. Jealous, cruel, and unstable, he desperately seeks the people's affection and fears Maximus's popularity.",
      personnage3: "■ Lucilla (Connie Nielsen): Commodus's sister and Maximus's former lover. She tries to protect her son Lucius from his uncle's madness and plots against her brother.",
      personnage4: "■ Proximo (Oliver Reed): A former gladiator turned lanista (trainer). He buys Maximus in North Africa and helps him become a legend of the Colosseum.",
      personnage5: "■ Marcus Aurelius (Richard Harris): A wise and aging emperor who wishes to see Rome return to a Republic, preferring Maximus to his unworthy son, Commodus.",
      personnage6: "■ Juba (Djimon Hounsou): A Numidian gladiator and loyal friend of Maximus. He represents Maximus's wisdom and moral support in his quest.",
      personnage7: "■ Senator Gracchus (Derek Jacobi): A Roman senator loyal to the Republic, who opposes Commodus's tyrannical excesses.",
      date: "From June 2000..."
    },
    {
      id: Math.random(),
      titre: "The Dark Knight",
      description: "Batman faces the Joker in Gotham.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      note: 4.0,
      vidéo:"https://www.youtube.com/watch?v=oz7wymKGzOU",
      genre: "ACTION",
      image1: "https://www.hollywoodreporter.com/wp-content/uploads/2018/05/the_dark_knight_-_h_-_2018.jpg?w=1296&h=730&crop=1",
      image2: "https://www.studioremarkable.com/wp-content/uploads/2012/08/Dark-Knight-Trilogy.jpg",
      image3: "https://dailycollegian.com/wp-content/uploads/2022/04/dark-knight-1-900x450.jpeg",
      details:"The Dark Knight is a critically acclaimed superhero crime drama directed by Christopher Nolan, following Batman (Christian Bale) as he faces his ultimate nemesis, the anarchist Joker (Heath Ledger). Alongside Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman battles to dismantle organized crime in Gotham City, but the Joker plunges the city into chaos, pushing Batman to his moral limits and causing the tragic fall of Dent.",
      personnage1: "■ Bruce Wayne / Batman (Christian Bale): Gotham's vigilante who tries to eradicate the mafia and faces the Joker's psychological challenge.",
      personnage2: "■ The Joker (Heath Ledger): The main antagonist, an anarchistic psychopath who seeks to corrupt Batman's morals and plunge Gotham into chaos.",
      personnage3: "■ Harvey Dent / Two-Face (Aaron Eckhart): Gotham's District Attorney, nicknamed the White Knight, who turns to crime after a tragedy orchestrated by the Joker.",
      personnage4: "■ Rachel Dawes (Maggie Gyllenhaal): Assistant District Attorney and Bruce Wayne's childhood sweetheart, caught between Batman and Dent.",
      personnage5: "■ James Gordon (Gary Oldman): Batman's trusted ally within the Gotham City Police Department, fighting corruption.",
      personnage6: "■ Alfred Pennyworth (Michael Caine): Bruce Wayne's butler and confidant, offering moral support and wisdom.",
      personnage7: "■ Lucius Fox (Morgan Freeman): Head of Wayne Enterprises, he designs and supplies Batman's technological equipment.",
      personnage8: "■ Salvatore Maroni (Eric Roberts): A crime boss who takes over from Carmine Falcone.",
      personnage9: "■ Lau (Chin Han): A corrupt accountant working for the Chinese mafia.",
      personnage10: "■ Mayor Anthony Garcia (Nestor Carbonell): The mayor of Gotham City.",
      date: "From August 2008..."
    },
    {
      id: Math.random(),
      titre: "Avengers: Endgame",
      description: "The Avengers are trying to save the universe.",
      posterURL: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      note: 4.5,
      vidéo:"https://www.youtube.com/watch?v=TcMBFSGVi1c",
      genre: "ACTION",
      image1: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/118355-mwiiyzgklw-1556217255.jpeg",
      image2: "https://www.dneg.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3sjsytt3tkv5%2F48dw0Wqg1t7RMqLrtodjqL%2Fd72b35dae2516fa64803f4de2ab8e30f%2FAvengers-_Endgame_-_Header_Image.jpeg&w=3840&q=75",
      image3: "https://fwmedia.fandomwire.com/wp-content/uploads/2022/12/04005110/maxresdefault-2.jpg",
      details: "Avengers: Endgame (2019) follows the surviving heroes five years after Thanos wiped out half of all life, as they reunite to execute a dangerous time heist to gather the Infinity Stones from the past. They successfully reverse the snap, leading to a massive final battle where Tony Stark sacrifices himself to disintegrate Thanos and his army, restoring the universe.",
      personnage1: "■ Tony Stark / Iron Man (Robert Downey Jr.): Develops time travel technology and sacrifices himself to eliminate Thanos and his army.",
      personnage2: "■ Steve Rogers / Captain America (Chris Evans): Leads the team in the time heist and wields Thor's hammer in combat.",
      personnage3: "■ Thor (Chris Hemsworth): Depressed, he finds redemption by aiding the quest and battles Thanos with Stormbreaker and Mjolnir.",
      personnage4: "■ Bruce Banner / Hulk (Mark Ruffalo): Becomes Smart Hulk (a fusion of intelligence and strength) and uses the gauntlet to bring back the vanished.",
      personnage5: "■ Natasha Romanoff / Black Widow (Scarlett Johansson): Leads the operations and sacrifices herself on Vormir to obtain the Soul Stone.",
      personnage6: "■ Clint Barton / Hawkeye / Ronin (Jeremy Renner): Becomes a ruthless vigilante (Ronin) after the loss of his family, and retrieves the Soul Stone with Natasha.",
      personnage7: "■ Scott Lang / Ant-Man (Paul Rudd): Escapes the Quantum Realm and introduces the idea of ​​time travel to the Avengers.",
      personnage8: "■ Nebula (Karen Gillan): Plays a key role in time travel and confronts her past.",
      personnage9: "■ Rocket Raccoon (Bradley Cooper): Helps design the time machine and retrieves the Reality Stone with Thor.",
      personnage10: "■ Carol Danvers / Captain Marvel (Brie Larson): Intervenes to destroy Thanos's ship and assists in the final battle.",
      personnage11: "■ Thanos (Josh Brolin): The main antagonist, seeking to destroy the universe in order to rebuild it.",
      personnage12: "■ Other key characters: War Machine (James Rhodes), Nebula, Okoye, Rocket, Pepper Potts (Rescue), and the return of all the defeated heroes for the final battle.",
      date: "From April 2019..."
    },
    {
      id: Math.random(),
      titre: "Mission Impossible: Fallout",
      description: "Ethan Hunt must prevent a global catastrophe.",
      posterURL: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      note: 4.0,
      vidéo:"https://www.youtube.com/watch?v=wb49-oV0F78",
      genre: "ACTION",
      image1: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201807/Mission_impossible.jpeg?size=690:388",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuqYcysSWVfaYirktLY-1bFhhLRp6hp0bU1Q&s",
      image3: "https://compote.slate.com/images/30795acd-d7e7-425a-9166-338049b2ed8a.jpeg?crop=1560%2C1040%2Cx0%2Cy0",
      details: "Mission: Impossible – Fallout is a high-stakes action thriller where Ethan Hunt (Tom Cruise) and his IMF team must recover stolen plutonium while under CIA surveillance. After a mission fails, Hunt is forced to work with CIA assassin August Walker (Henry Cavill) to track down the terrorist group The Apostles and their leader, Solomon Lane.",
      personnage1: "Ethan Hunt (Tom Cruise): A seasoned IMF agent, willing to sacrifice everything to save lives and prevent a nuclear catastrophe.",
      personnage2: "■ August Walker (Henry Cavill): A brutal CIA assassin assigned to Ethan to oversee the operation, who proves to be a major antagonist.",
      personnage3: "■ Ilsa Faust (Rebecca Ferguson): A former MI6 spy with complex allegiances, often an ally but unpredictable.",
      personnage4: "■ Luther Stickell (Ving Rhames): A computer expert and Ethan's right-hand man, a longtime trusted associate.",
      personnage5: "■ Benji Dunn (Simon Pegg): An expert technical agent, providing tactical support and a touch of humor.",
      personnage6: "■ Solomon Lane (Sean Harris): The main antagonist, an anarchist and leader of the Syndicate/Apostles.",
      personnage7: "■ Erika Sloane (Angela Bassett): The new CIA director, authoritarian and suspicious of the IMF.",
      personnage8: "■ The White Widow / Alanna Mitsopolis (Vanessa Kirby): Information and arms broker, playing a key role in the black market.",
      personnage9: "■ Julia Meade-Hunt (Michelle Monaghan): Ethan's ex-wife, whose presence symbolizes the personal cost of being an agent.",
      personnage10: "■ Alan Hunley (Alec Baldwin): CIA director turned IMF supporter.",
      date: "From July 2018..."
    }
    ]);
    
    //  comedy
    const [comedy] = useState([
      {
      id: Math.random(),
      titre: "The Mask",
      description: "A man discovers a magic mask that changes his personality.",
      posterURL: "https://lh4.googleusercontent.com/proxy/ejFfMA7bxccZFfq0hLXyHeG_RecwYn-OlbNxycZZGgyvnXdHtvcJpJCcjW-fnk0mc-847M9RZ0vl8TrPi-8wP3KltvRSlN9p4_Toc48ijoATGu4uUwFYhDk",
      note: 3.9,
      vidéo:"https://www.youtube.com/watch?v=lhRXasDi2Ds",
      genre: "COMEDY",
      image1: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/04/jim-carrey-s-the-mask-has-2-sequels-and-one-is-much-better-than-the-other.jpg?w=1200&h=628&fit=crop",
      image2: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeJDSs6jYCFvnQe_kSetGVt88gMMIWitC14DqNDDC8_DxmRg3Mze8zsa9ZgRQMTQ4xME_YWbD3O-CIaE1Vf5r-S8R7Axefkpio-foqeh7Q.jpg?r=512",
      image3: "https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3014-the-mask--hi_res-ed83f754.jpg/film__3014-the-mask--hi_res-ed83f754.jpg",
      details: "The Mask (1994) is a manic fantasy-comedy starring Jim Carrey as Stanley Ipkiss, a timid bank clerk who discovers a magical mask that transforms him into a green-faced, cartoonish superhero with superhuman powers and chaotic energy. Seeking love and fighting gangsters, Ipkiss battles the mob while causing cartoon-inspired mayhem.",
      personnage1: "■ Stanley Ipkiss / The Mask (Jim Carrey): The main protagonist. A shy and unlucky bank teller, he becomes The Mask, a green character with limitless shapeshifting abilities and chaotic energy.",
      personnage2: "■ Tina Carlyle (Cameron Diaz): A singer at the Coco Bongo club and a femme fatale with whom Stanley is in love. She is Dorian Tyrell's girlfriend but falls under The Mask's spell.",
      personnage3: "■ Dorian Tyrell (Peter Greene): The main antagonist. A ruthless gangster and mafia boss who seeks to seize the mask to rule the underworld of Edge City.",
      personnage4: "■ Lieutenant Mitch Kellaway (Peter Riegert): A cynical and tenacious police detective who hunts The Mask, convinced he is a criminal threat, unaware that he is Stanley.",
      personnage5: "■ Charlie Schumacher (Richard Jeni): Stanley's best friend and coworker, often selfish.",
      personnage6: "■ Peggy Brandt (Amy Yasbeck): A reporter trying to investigate the new phenomenon Mask.",
      personnage7: "■ Milo: Stanley's loyal dog (a Jack Russell Terrier), who often helps his master.",
      personnage8: "■ Mrs. Peenman (Nancy Fish): Stanley's cantankerous landlady.",
      date: "From July 1994..."
    },
    {
      id: Math.random(),
      titre: "Superbad",
      description: "Chaotic night before graduation for two friends.",
      posterURL: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
      note: 2.8,
      vidéo:"https://www.youtube.com/watch?v=4eaZ_48ZYog",
      genre: "COMEDY",
      image1: "https://substackcdn.com/image/fetch/$s_!8kL_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fbbab4855-adf5-46d4-a746-9dc8db008ae7_1000x566.jpeg",
      image2: "https://s1.dmcdn.net/v/SP_pc1VGnoa25ietn/x1080",
      image3: "https://media.vanityfair.com/photos/62fa88ecd703349a746d4ea2/master/pass/vf-822-superbad-making-of-005.jpg",
      details: "Superbad is a raunchy, coming-of-age comedy following inseparable high school seniors Seth (Jonah Hill) and Evan (Michael Cera) as they try to secure alcohol for a graduation party to impress their crushes. The night turns into a chaotic adventure involving fake IDs, incompetent cops, and teenage awkwardness, highlighting their friendship before leaving for different colleges.",
      personnage1: "■ Seth (Jonah Hill): Seth is the loudmouthed and vulgar leader of the group, obsessed with the idea of ​​sleeping with girls before graduation.",
      personnage2: "■ Evan (Michael Cera): Evan is Seth's best friend, gentler, more anxious, and naive, who worries about their impending breakup.",
      personnage3: "■ Fogell / McLovin (Christopher Mintz-Plasse): Fogell is the third member of the group, an eccentric nerd who obtains a fake Hawaiian ID under the name McLovin.",
      personnage4: "■ Officers Slater and Michaels (Bill Hader and Seth Rogen): Slater and Michaels are incompetent and immature police officers who drag Fogell into a night of mayhem.",
      personnage5: "■ Jules (Emma Stone): Jules is the popular girl who organizes the party and whom Evan is in love with.",
      personnage6: "■ Becca (Martha MacIsaac): Becca is Jules' friend, who is interested in Seth.",
      personnage7: "■ Francis the Driver (Joe Lo Truglio): The shady driver who drags Seth and Evan into a series of misadventures.",
      date: "From August 2007..."
    },
    {
      id: Math.random(),
      titre: "Step Brothers",
      description: "Two immature adults become brothers.",
      posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5yurONCMgL5ialv6Pv90yzsVBELhoOMWzqA&s",
      note: 2.8,
      vidéo:"https://www.youtube.com/watch?v=IuEIDteu2UI",
      genre: "COMEDY",
      image1: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2008/08/28/stepbrothers460.jpg?width=465&dpr=1&s=none&crop=none",
      image2: "https://www.thedailybeast.com/resizer/v2/XEC2MESXQVKMDFH75Y6UCVSZCI.jpg?smart=true&auth=05106f90dabb45226bebabfd69452587f64c1b9041d440a9cc58eb2995775049&width=1600&height=900",
      image3: "https://variety.com/wp-content/uploads/2018/07/step-brothers.jpg?w=1000&h=563&crop=1",
      details: "Step Brothers (2008) is a cult classic comedy starring Will Ferrell (Brennan) and John C. Reilly (Dale), two 40-year-old, unemployed, and highly immature men forced to live together when their parents marry. They move from intense rivalry to a bond over their shared laziness, eventually helping their parents and finally growing up.",
      personnage1: "■ Brennan Huff (Will Ferrell): A 39-year-old, lazy man without a stable job who lives with his mother. He is narcissistic, immature, and considers himself a talented singer.",
      personnage2: "■ Dale Doback (John C. Reilly): A 40-year-old man, chronically unemployed, who lives with his father. Like Brennan, he is extremely immature and selfish.",
      personnage3: "■ Dr. Robert Doback (Richard Jenkins): Dale's father. He is a doctor who eventually grows tired of supporting his adult son, forcing him to find a job.",
      personnage4: "■ Nancy Huff (Mary Steenburgen): Brennan's mother. She is loving but overly indulgent, which has contributed to her son's immaturity.",
      personnage5: "■ Derek Huff (Adam Scott): Brennan's younger brother, who is successful in life. He is arrogant, disdainful of Brennan and Dale, and creates family tension.",
      personnage6: "■ Alice (Kathryn Hahn): Derek's wife. She's frustrated with her marriage and eventually becomes attracted to Dale's eccentric personality.",
      personnage7: "■ Denise (Andrea Savage): The family woman who attends the dinner party where Derek sings.",
      personnage8: "■ Chris Gardocki (Logan Manus): A teenager who bullies Brennan and Dale in the neighborhood.",
      personnage9: "■ Cinnamon: The blind neighbor Don's dog, mentioned in the neighborhood scenes.",
      date: "From July 2008..."
    },
    {
      id: Math.random(),
      titre: "The Hangover",
      description: "A night out in Vegas takes a turn for the worse.",
      posterURL: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
      note: 4.0,
      vidéo:"https://www.youtube.com/watch?v=tlize92ffnY",
      genre: "COMEDY",
      image1: "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/6/11/1244715161882/Scene-from-The-Hangover-2-001.jpg?width=465&dpr=1&s=none&crop=none",
      image2: "https://m.media-amazon.com/images/M/MV5BMjIwMjIxMDY3Nl5BMl5BanBnXkFtZTgwNzMwNjMwMjE@._V1_.jpg",
      image3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4ch8BQAw5t1MkKTK_3PEAq4PVsrww9JYmA&s",
      details: "The Hangover is a comedy about three groomsmen—Phil, Stu, and Alan—who wake up in Las Vegas after a wild bachelor party with no memory of the night, a missing groom (Doug), a tiger in their bathroom, a baby in the closet, and a missing tooth. They must retrace their steps to find Doug before his wedding.",
      personnage1: "■ Phil Wenneck (Bradley Cooper): Considered the leader of the group, he's an immature high school teacher who uses the bachelor party as an escape from his family life.",
      personnage2: "■ Stu Price (Ed Helms): An anxious and uptight dentist, constantly controlled by his girlfriend. He's the one who suffers the most significant physical consequences of the night (losing a tooth).",
      personnage3: "■ Alan Garner (Zach Galifianakis): Doug's future brother-in-law. Socially awkward, eccentric, and often oblivious, he's the unwitting troublemaker, having accidentally drugged his friends.",
      personnage4: "■ Doug Billings (Justin Bartha): The groom-to-be. He's the calmest member of the group, but he mysteriously disappears after the first night, sending his friends on a quest to find him.",
      personnage5: "■ Mr. Chow (Ken Jeong): An eccentric and dangerous gangster who crosses paths with the group after Alan steals his car and money.",
      personnage6: "■ Jade (Heather Graham): A stripper who ends up marrying Stu during the wild night and helps them piece together the events.",
      personnage7: "■ Tracy Garner (Sasha Barrese): Doug's fiancée (and Alan's sister), who eagerly awaits her fiancé's return for their wedding.",
      personnage8: "■ Sid Garner (Jeffrey Tambor): Doug's future father-in-law, who lends his luxury Mercedes to the group.",
      personnage9: "■ Officer Franklin (Rob Riggle): A police officer who crosses paths with the group as they try to handle the situation.",
      date: "From June 2009..."
    },
    {
      id: Math.random(),
      titre: "Mr. Bean",
      description: "The hilarious adventures of Mr Bean.",
      posterURL: "https://media.tenor.com/bDswhpsxJtEAAAAe/mr-bean-holiday-mister-bean-holiday.png",
      note: 2.7,
      vidéo:"https://www.youtube.com/watch?v=ytTIGnp_j_w",
      genre: "COMEDY",
      image1: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV_geSVaUjMSUkkq6vwvUCNNk17MA8HsKzgkjpTpYLN7iTq9CYVlQ4AOqz6Sk4Ey2HZcjObPhFRJN88L1HXOCTfsEkJ8MGKlE5mo9YY53Q.jpg?r=d11",
      image2: "https://play-lh.googleusercontent.com/proxy/-flYqsA2WVw_2xmQ-XQ7kVsh-otEg3k2R3mgaMMRLTgEbKpvvtuPzVPZMJtM8zmBhFPZkOt_2nXXXR-aQw_jURd9SwvUw4kNS-PBK66ugMazYYSLVQ=s1920-w1920-h1080",
      image3: "https://static01.nyt.com/images/2007/08/23/arts/24bean-600.jpg",
      details: "Bean is a slapstick comedy following a bumbling, chaotic security guard from London’s National Gallery who is sent to Los Angeles to oversee the unveiling of Whistler's Mother. Mistaken for a brilliant art expert, he wreaks havoc on the family hosting him and ruins the painting, only to restore it with disastrously funny results.",
      personnage1: "■ Rowan Atkinson (Mr. Bean): A clumsy and childish museum guard sent to Los Angeles to oversee the transfer of a famous painting, Whistler's Mother, causing one disaster after another.",
      personnage2: "■ Peter MacNicol (David Langley): The curator of the Los Angeles art gallery who takes Bean into his home, mistakenly believing him to be a renowned art expert, and whose life is turned upside down by Bean's antics.",
      personnage3: "■ Pamela Reed (Alison Langley): David Langley's wife, who is initially patient but eventually becomes exasperated by Bean's bizarre behavior.",
      personnage4: "■ Harris Yulin (George Grierson): The gallery owner and David Langley's boss.",
      personnage5: "■ Burt Reynolds (General Newton): The general who financed the painting's return to Los Angeles.",
      personnage6: "■ Tricia Vessey (Jennifer Langley): David and Alison Langley's daughter.",
      personnage7: "■ Teddy: Mr. Bean's best friend, a brown teddy bear.",
      personnage8: "■ Irma Gobb: Mr. Bean's girlfriend.",
      date: "From October 1997..."
    },
    {
      id: Math.random(),
      titre: "Jumanji: Welcome to the Jungle",
      description: "Teenagers are trapped in a video game.",
      posterURL: "https://i.pinimg.com/originals/d7/64/61/d764616d3a51de0be543cea2c0da55c6.jpg",
      note: 3.5,
      vidéo:"https://www.youtube.com/watch?v=2QKg5SZ_35I",
      genre: "COMEDY",
      image1: "https://sm.ign.com/ign_ap/news/j/jumanji-we/jumanji-welcome-to-the-jungle-surpasses-700-million-at-globa_62hk.jpg",
      image2: "https://i.guim.co.uk/img/media/8c0128d3517c1ee36eea46595f247bf22f93dd8c/0_0_4993_2997/master/4993.jpg?width=465&dpr=1&s=none&crop=none",
      image3: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2017/12/jumanji-dom-DF-21929_r_rgb.jpg?fit=618%2C412&quality=89&ssl=1",
      details: "umanji: Welcome to the Jungle (2017) is an action-comedy sequel where four high school students in detention are sucked into a magical video game, inhabiting adult avatars with unique abilities. They must work together to complete dangerous quests, defeat an evil warlord, and return a, jewel to win.",
      personnage1: "■ Dwayne Johnson (Dr. Xander Smolder Bravestone): Spencer's avatar, a muscular, courageous archaeologist and the group's leader. He has no weaknesses.",
      personnage2: "■ Kevin Hart (Franklin Mouse Finbar): Fridge's avatar, a zoologist and weapons handler. He is short, and his weakness is cake.",
      personnage3: "■ Jack Black (Professor Sheldon Shelly Oberon): Bethany's avatar, a cartographer, cryptographer, and paleontologist. He is an expert but also middle-aged.",
      personnage4: "■ Karen Gillan (Ruby Roundhouse): Martha's avatar, an expert in martial arts (fight dance) and close-quarters combat.",
      personnage5: "■ Nick Jonas (Jefferson Seaplane McDonough): A player trapped in the game since 1996 who helps the group.",
      personnage6: "■ Alex Wolff (Spencer Gilpin): A shy geek who becomes the leader in the game.",
      personnage7: "■ Ser'Darius Blain (Anthony Fridge Johnson): The American football player and Spencer's former friend.",
      personnage8: "■ Madison Iseman (Bethany Walker): The popular and superficial girl.",
      personnage9: "■ Morgan Turner (Martha Kaply): A shy and studious teenager.",
      personnage10: "■ Bobby Cannavale (Professor Russel Van Pelt): The game's main antagonist who wants to control the Jumanji Jewel.",
      personnage11: "■ Rhys Darby (Nigel Billingsley): The game's guide who gives missions to the players.",
      date: "From December 2017..."
    }
    ]);
    
    
    // horror
    const [herror] = useState([
      {
      id: Math.random(),
      titre: "The Conjuring",
      description: "Paranormal investigators offer a terrified family.",
      posterURL: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
      note: 4.0,
      vidéo:"https://www.youtube.com/watch?v=bMgfsdYoEEo",
      genre: "HERROR",
      image1: "https://play-lh.googleusercontent.com/proxy/EAzq0L4osy03yqOL7zB4kGCLdM7SRX2FpeAZm6rDy7eFQUMd6mGZPaPsbuuHcLKM3hw-c6bwmouagg4ZLgyEHEcM3e66_st_Fi4mrPonVGIgayx5LTXFdA=s3840-w3840-h2160-rw",
      image2: "https://people.com/thmb/BPl9QnwH78R-Bl1D5DhaCvkoP-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1004x552:1006x554)/THE-CONJURING-LAST-RITES-090425-5-ee5f392d9f3647e69515f2a913c6b1f9.jpg",
      image3: "https://assets-prd.ignimgs.com/2022/06/25/conjuring-thumbnail-1656120036336.jpg",
      details: "The Conjuring (2013) is a supernatural horror film based on a true story of paranormal investigators Ed and Lorraine Warren. In 1971, they help the Perron family, whose Rhode Island farmhouse is plagued by a malevolent demonic spirit, Bathsheba. The film focuses on the intense haunting and the Warrens' fight to save the family.",
      personnage1: "■ Lorraine Warren (Vera Farmiga): A talented medium and clairvoyant, she senses demonic presences and guides investigations.",
      personnage2: "■ Ed Warren (Patrick Wilson): A self-proclaimed demonologist and Lorraine's husband, he examines the premises and performs exorcisms.",
      personnage3: "■ Carolyn Perron (Lili Taylor): The mother of the Perron family, who moves into the haunted house and becomes the entity's primary target.",
      personnage4: "■ Roger Perron (Ron Livingston): The father of the Perron family, he tries to protect his family from the unexplained phenomena.",
      personnage5: "■ Bathsheba Sherman (entity): The malevolent spirit of a 19th-century witch who torments the Perron family.",
      personnage6: "■ The five Perron daughters (Andrea, Nancy, Christine, Cindy, April): The family's children, victims of the house's attacks.",
      personnage7: "■ Judy Warren (Sterling Jerins): Ed and Lorraine's daughter, often left in her grandmother's care during investigations.",
      personnage8: "■ Drew Thomas (Shannon Kook): The Warrens' assistant who helps them with their technical research.",
      personnage9: "■ Father Gordon (Steve Coulter): A priest who calls on the Warrens to help the Perron family.",
      date: "From September 2025..."
    },
    {
      id: Math.random(),
      titre: "It",
      description: "A group of children confronts an evil clown.",
      posterURL: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
      note: 3.6,
      vidéo:"https://www.youtube.com/watch?v=xKJmEC5ieOk",
      genre: "HERROR",
      image1: "https://i.pinimg.com/736x/3a/30/99/3a3099215beb54d544905a2dde2682e2.jpg",
      image2: "https://m.media-amazon.com/images/M/MV5BMjIzNDg2MDY2M15BMl5BanBnXkFtZTgwNjI1NzMzMzI@._V1_.jpg",
      image3: "https://thoughtcatalog.com/wp-content/uploads/2025/03/it_2017_losers_club.jpg?w=850",
      details: "Based on the horror film It (Chapter One), this summary highlights the core narrative of childhood trauma, friendship, and overcoming fear.",
      personnage1: "■ Bill Denbrough (Jaeden Martell / James McAvoy): The leader of the group. He seeks revenge for his younger brother Georgie, killed by the clown, and leads the fight against It.",
      personnage2: "■ Beverly Marsh (Sophia Lillis / Jessica Chastain): The only girl in the group, abused by her father and then by her husband. She is courageous and the emotional heart of the group.",
      personnage3: "■ Richie Tozier (Finn Wolfhard / Bill Hader): The joker of the group, nicknamed Trashmouth. He uses humor to mask his fear and becomes a radio host in the second film.",
      personnage4: "■ Ben Hanscom (Jeremy Ray Taylor / Jay Ryan): Intelligent and sensitive, formerly overweight, he becomes a successful architect. He is secretly in love with Beverly.",
      personnage5: "■ Eddie Kaspbrak (Jack Dylan Grazer / James Ransone): A hypochondriac, he is coddled by his mother and then marries a woman who resembles her. He runs a limousine company.",
      personnage6: "■ Mike Hanlon (Chosen Jacobs / Isaiah Mustafa): The only member left in Derry. He researches the town's history and warns the others about the monster's return.",
      personnage7: "■ Stanley Uris (Wyatt Oleff / Andy Bean): The most rational and pragmatic, he struggles to accept the supernatural reality of It.",
      personnage8: "■ The Antagonist: It / Pennywise the Dancing Clown (Bill Skarsgård): A millennia-old shapeshifting entity that awakens every 27 years to feed on the children of Derry, taking the form of their worst fears.",
      personnage9: "■ Georgie Denbrough (Jackson Robert Scott): Bill's younger brother, whose tragic murder at the beginning of the film sets the plot in motion.",
      personnage10: "■ Henry Bowers (Nicholas Hamilton): The town bully who harasses the Losers' Club and is manipulated by Pennywise.",
      date: "From September 2017..."
    },
    {
      id: Math.random(),
      titre: "Insidious",
      description: "A child falls into a spiritual world.",
      posterURL: "https://i.pinimg.com/736x/4c/52/a6/4c52a6708647a05d4b11ad18a25634e0.jpg",
      note: 3.5,
      vidéo:"https://www.youtube.com/watch?v=M-irQA7NIrk",
      genre: "HERROR",
      image1: "https://s.yimg.com/ny/api/res/1.2/BbSPXo5mv4V_EAax1qtjQQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/cinemablend_388/934fe4645123fd34829d15baa0040e3b",
      image2: "https://helios-i.mashable.com/imagery/articles/01Sx6kTBfYfK9hRnOnwaMIs/hero-image.fill.size_1248x702.v1688071111.jpg",
      image3: "https://bloody-disgusting.com/wp-content/uploads/2023/06/red-door-movie.jpg",
      details: "Insidious is a supernatural horror film directed by James Wan about the Lambert family—Josh, Renai, and their children—who move into a new home only to have their son, Dalton, fall into an unexplainable coma. Paranormal investigators and medium Elise Rainier reveal that Dalton’s soul is trapped in a dark astral realm called The Further.",
      personnage1: "■ Josh Lambert (Patrick Wilson): The father. He is rational at first, but it is revealed that he has the ability to project his spirit out of his body (astral travel), a faculty he had forgotten.",
      personnage2: "■ Renai Lambert (Rose Byrne): The mother. She is the first to notice the paranormal phenomena in their new house.",
      personnage3: "■ Dalton Lambert (Ty Simpkins): The son. He falls into an unexplained coma after exploring the attic, his spirit trapped in a dark dimension called The Further.",
      personnage4: "■ Lorraine Lambert (Barbara Hershey): Josh's mother. She quickly realizes that the situation is beyond rational explanation and calls upon mediums.",
      personnage5: "■ Elise Rainier (Lin Shaye): An experienced medium. She helps the family understand that Dalton is not in a medical coma, but is being possessed by spirits.",
      personnage6: "■ Specs & Tucker (Leigh Whannell & Angus Sampson): Elise's assistants, in charge of the technical equipment for detecting ghosts.",
      personnage7: "■ The Entities (Antagonists) The Red-Faced Demon (Joseph Bishara): The main antagonist, nicknamed the Lipstick Demon. He holds Dalton's spirit captive in an attempt to possess his body.",
      personnage8: "■ The Old Woman (Philip Friedman): A malevolent spirit that has haunted Josh since childhood and seeks to possess him.",
      date: "From April 2011..."
    },
    {
      id: Math.random(),
      titre: "Annabelle",
      description: "A possessed doll sows terror.",
      posterURL: "https://i.pinimg.com/736x/65/0e/a5/650ea5949b5d606e7baefc74af46183b.jpg",
      note: 2.1,
      vidéo:"https://www.youtube.com/watch?v=bCxm7cTpBAs",
      genre: "HERROR",
      image1: "https://i.guim.co.uk/img/media/f1a41d0a93ffc8d6802cec61ab913b34574c52ac/901_0_4131_2480/master/4131.jpg?width=1200&quality=85&auto=format&fit=max&s=676b9af9edb13999d1fc7c92c4c9b506",
      image2: "https://www.thegate.ca/wp-content/uploads/2019/06/Annabelle-Comes-Home-Featured.jpg.webp",
      image3: "https://images.squarespace-cdn.com/content/v1/56047552e4b00047c4e83900/1561736513300-SSME3V0CDA5KYJDAZYCU/Annabella+Comes+Home.jpg",
      details: "Annabelle is a supernatural horror film and prequel to The Conjuring, focusing on a vintage doll possessed by a demonic force after a cult attack. The story follows John and Mia Form in the late 1960s as they experience terrifying supernatural occurrences, attempting to protect their family and newborn from the doll's sinister influence.",
      personnage1: "■ Annabelle Wallis (Mia Form): The main protagonist, a young pregnant woman who becomes the target of the possessed doll and the demonic entity inhabiting it.",
      personnage2: "■ Ward Horton (John Form): Mia's husband, a doctor who tries to protect his family from paranormal phenomena.",
      personnage3: "■ Alfre Woodard (Evelyn): A bookseller who becomes an ally of Mia, helping her understand the nature of demonic forces.",
      personnage4: "■ Tony Amendola (Father Perez): A priest who tries to help the couple and fight the demonic entity that seeks to possess the souls of Mia and her child.",
      personnage5: "■ Eric Ladin (Detective Clarkin): The investigator in charge of the satanic murders that trigger the events.",
      personnage6: "■ Tree O'Toole (Annabelle Higgins / Little Woman): A neighbor's daughter, who became a Satanist, dies in Mia's room holding the doll, transferring her soul into it.",
      personnage7: "■ Joseph Bishara (The Demonic Figure): The evil entity that uses the doll to manifest itself and manipulate humans.",
      personnage8: "■ Talitha Bateman (Janice): A young orphan who becomes the doll's first target.",
      personnage9: "■ Stephanie Sigman (Sister Charlotte): A nun protecting orphans.",
      personnage10: "■ Miranda Otto (Esther Mullins): Samuel Mullins' wife, living in seclusion.",
      date: "From October 2014..."
    },
    {
      id: Math.random(),
      titre: "The Nun",
      description: "A priest investigates a demonic spirit.",
      posterURL: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
      note: 2.2,
      vidéo:"https://www.youtube.com/watch?v=pzD9zGcUNrw",
      genre: "HERROR",
      image1: "https://bloody-disgusting.com/wp-content/uploads/2023/09/rev-1-NUN2-07442r_High_Res_JPEG.jpeg",
      image2: "https://images.squarespace-cdn.com/content/v1/57c92580c534a5c7c898f469/1537517098693-SRPKQBXVQZ5TX7V76SRS/Movie_Review_The_Nun.jpeg",
      image3: "https://variety.com/wp-content/uploads/2018/09/the-nun-movie-13.jpg?w=1000&h=562&crop=1",
      details: "The Nun is a supernatural horror film and prequel in The Conjuring Universe, following a Vatican-appointed priest and a novice who travel to Romania in 1952 to investigate a nun's suicide. They confront a demonic force, Valak, taking the form of a nun, revealing the abbey’s dark secrets.",
      personnage1: "■ Sister Irene (Taissa Farmiga): A young novice sent by the Vatican to Romania. She has visions and must use her faith and courage to confront the Nun.",
      personnage2: "■ Father Burke (Demián Bichir): A priest specializing in investigations of miracles and paranormal phenomena for the Vatican. He carries the weight of a painful past.",
      personnage3: "■ Maurice Frenchie Theriault (Jonas Bloquet): A young French-Canadian villager who delivers supplies to the abbey. He is the first to discover the body of the nun who committed suicide and helps Father Burke and Sister Irene.",
      personnage4: "■ The Nun / Valak (Bonnie Aarons): The main antagonist, a powerful demon who takes the form of a terrifying nun to haunt the Cârța Abbey.",
      date: "From September 2018..."
    },
    {
      id: Math.random(),
      titre: "Hereditary",
      description: "A family discovers a terrifying inheritance.",
      posterURL: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
      note: 3.6,
      vidéo:"https://www.youtube.com/watch?v=V6wWKNij_1M",
      genre: "HERROR",
      image1: "https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/imagery-from-the-babadook-pearl-and-hereditary.jpg?w=1200&h=628&fit=crop",
      image2: "https://stanforddaily.com/wp-content/uploads/2020/11/hereditary.jpg",
      image3: "https://people.com/thmb/h2bKFknhaCEUU0cNShL4VhJiQIU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(791x307:793x309)/hereditary-movie-stills-011725-tout-3f58d59f57814630a40a8109ea2ae12a.jpg",
      details: "Hereditary is a psychological horror film following the Graham family, who unravel terrifying, cult-driven secrets about their ancestry after their secretive matriarch passes away. Directed by Ari Aster, the film focuses on Annie (Toni Collette) as her family disintegrates through grief and demonic possession, ultimately culminating in a pre-ordained ritual to summon the demon king Paimon into a human host.",
      personnage1: "■ Annie Graham (Toni Collette): A miniature artist and mother, she is the central character who tries to cope with the loss of her mother, Ellen, while uncovering dark secrets. She is the emotional anchor who gradually descends into madness and despair, trying to protect her children while being manipulated by occult forces.",
      personnage2: "■ Peter Graham (Alex Wolff): Annie and Steve's teenage son. He is the primary target of the curse and the demon Paimon, who seeks to possess a male host. He experiences profound trauma and intense guilt throughout the film.",
      personnage3: "■ Charlie Graham (Milly Shapiro): The eccentric young girl of the family, who appears to be the initial vessel for the demon Paimon, particularly due to her close and mysterious relationship with her grandmother, Ellen. Her role is crucial in the tragic turn of events.",
      personnage4: "■ Steve Graham (Gabriel Byrne): Annie's husband. He embodies a rational and down-to-earth figure, acting as a helpless witness to his family's downfall. His role is to maintain a semblance of normalcy, which quickly crumbles.",
      personnage5: "■ Joan (Ann Dowd): A woman Annie meets in a support group. She plays a key role in manipulating Annie into spiritualism and cults, facilitating the fulfillment of the curse.",
      personnage6: "■ Ellen Taper Leigh: Annie's mother (deceased at the beginning of the film). Although she only appears dead or in flashbacks, she is the catalyst for the entire plot, revealed to be the leader of a cult devoted to the demon king Paimon.",
      date: "From June 2018..."
    }
    ]);
    
    // drama
    const [drama] = useState([
    {
      id: Math.random(),
      titre: "The Shawshank Redemption",
      description: "A man unjustly imprisoned still has hope.",
      posterURL: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      note: 4.5,
      vidéo:"https://www.youtube.com/watch?v=NmzuHjWmXOc",
      genre: "DRAMA",
      image1: "https://cdn.britannica.com/88/259488-050-61444F76/Publicity-still-Tim-Robbins-Shawshank-Redemption.jpg",
      image2: "https://media.9news.com/assets/KUSA/images/f4af9e8f-f3b2-4d99-8288-3ace3f933f8d/f4af9e8f-f3b2-4d99-8288-3ace3f933f8d_1140x641.png",
      image3: "https://c8.alamy.com/comp/A70THM/shawshank-redemption-1994-rankcastle-rock-film-with-tim-robbine-at-A70THM.jpg",
      details: "The Shawshank Redemption is a acclaimed drama following banker Andy Dufresne (Tim Robbins), who is wrongly convicted of murdering his wife and her lover in 1947. Over nearly two decades at Shawshank State Penitentiary, he endures brutal prison life, forms a deep friendship with contraband smuggler Red (Morgan Freeman), and maintains hope, eventually escaping through a long-planned tunnel to expose corruption.",
      personnage1: "■ Andy Dufresne (Tim Robbins): A banker unjustly convicted of murdering his wife and her lover, he is serving two life sentences. He is calm, intelligent, and tenacious, refusing to let prison break his spirit. He uses his financial skills to help the guards, improve the prison library, and ultimately launder the warden's money while plotting his own escape and rehabilitation.",
      personnage2: "■ Ellis Boyd Red Redding (Morgan Freeman): Andy's narrator and best friend. He has been serving a life sentence for 20 years at the beginning of the film. He is the prison's smuggler, the one who can find anything. Initially cynical, he is transformed by Andy's hope and determination. He represents the voice of reason and humanity within the institution.",
      personnage3: "■ Warden Samuel Norton (Bob Gunton): The main antagonist. The hypocritical and corrupt warden of Shawshank Prison. Captain Byron T. Hadley (Clancy Brown): Captain of the guards. Brutal and sadistic. He is the enforcer of physical violence in the prison, representing the constant threat of prison violence.",
      personnage4: "■ Warden Samuel Norton (Bob Gunton): Main antagonist. The warden of Shawshank Prison, hypocritical and corrupt. He preaches piety and discipline (the Bible and the whip) while exploiting the inmates for his own financial gain.",
      personnage5: "■ Captain Byron T. Hadley (Clancy Brown): Captain of the guards. Brutal and sadistic. He is the enforcer of physical violence in the prison, representing the constant threat of prison violence.",
      personnage6: "■ Brooks Hatlen (James Whitmore): The old prison librarian. He represents institutionalization. After 50 years in prison, he struggles to adapt to freedom and embodies the tragedy of a life shattered by incarceration.",
      personnage7: "■ Tommy Williams (Gil Bellows): A lively young inmate. He befriends Andy and Red. He provides crucial evidence of Andy's innocence, making him a threat to Warden Norton.",
      personnage8: "■ Heywood (William Sadler): A member of Red's group of friends. A long-term inmate, he participates in daily life and the evolving prison hierarchy.",
      personnage9: "■ Bogs Diamond (Mark Rolston): Leader of the Sisters gang. He sexually abuses new inmates, representing the dark side and the violence Andy experiences upon arrival.",
      date: "From September 1994..."
    },
    {
      id: Math.random(),
      titre: "Forrest Gump",
      description: "The incredible life of Forrest Gump.",
      posterURL: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      note: 4.6,
      vidéo:"https://www.youtube.com/watch?v=XHhAG-YLdk8",
      genre: "DRAMA",
      image1: "https://i0.wp.com/filmotomy.com/wp-content/uploads/2020/07/Forrest-Gump-1.jpg?resize=675%2C360&ssl=1",
      image2: "https://upload.wikimedia.org/wikipedia/hu/thumb/d/df/Forrest_Gump.jpg/250px-Forrest_Gump.jpg",
      image3: "https://media.cinemaexpress.com/cinemaexpress%2F2024-11-04%2Fyjtq17sl%2FRobin-Wright.jpg?w=480&auto=format%2Ccompress",
      details: "Forrest Gump is a comedy-drama following a simple-minded but optimistic Alabama man (Tom Hanks) who unknowingly influences major American historical events from the 1950s-70s. Forrest thrives through football fame, Vietnam heroism, ping-pong diplomacy, and shrimping fortune, all while harboring a lifelong love for Jenny Curran.",
      personnage1: "■ Forrest Gump (Tom Hanks): The main protagonist. Despite a low IQ, he lives an extraordinary life, participating in key events in American history, from the Vietnam War to Watergate.",
      personnage2: "■ Jenny Curran (Robin Wright): Forrest's lifelong love. Her life is chaotic and turbulent, contrasting sharply with Forrest's stability, before she becomes the mother of his son.",
      personnage3: "■ Lieutenant Dan Taylor (Gary Sinise): Forrest's superior officer in Vietnam. He loses his legs, becomes embittered, and then finds meaning in life by becoming Forrest's business partner.",
      personnage4: "■ Mrs. Gump (Sally Field): Forrest's devoted mother. She fights to give him a normal life despite his intellectual limitations.",
      personnage5: "■ Benjamin Bubba Blue (Mykelti Williamson): Forrest's best friend in Vietnam, who dreams of shrimp fishing.",
      personnage6: "■ Young Forrest (Michael Conner Humphreys): Forrest during his childhood, wearing leg braces.",
      date: "From July 1994..."
    },
    {
      id: Math.random(),
      titre: "The Green Mile",
      description: "A prison guard discovers a miracle.",
      posterURL: "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      note: 4.6,
      vidéo:"https://www.youtube.com/watch?v=Ki4haFrqSrw",
      genre: "DRAMA",
      image1: "https://m.media-amazon.com/images/M/MV5BMjI0ODQ5ODEzN15BMl5BanBnXkFtZTgwMDg1MTM4MjI@._V1_.jpg",
      image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Jvqp8-BUXN15vLTPYB-haYIH26vDXvJaGA&s",
      image3: "https://www.frenchtoastsunday.com/wp-content/uploads/2015/05/Morse.jpg",
      details: "The Green Mile is a supernatural drama based on Stephen King's novel, following 1935 death row guard Paul Edgecomb (Tom Hanks), who discovers that inmate John Coffey (Michael Clarke Duncan), a gentle giant convicted of murder, possesses extraordinary supernatural healing powers. As Coffey heals others, Edgecomb grapples with his innocence and the cruelty of capital punishment in this emotional, three-hour film directed by Frank Darabont.",
      personnage1: "■ Paul Edgecomb (Tom Hanks): The head guard of E Block. He is humane, compassionate, and rational. He suffers from a urinary tract infection, which John Coffey will cure. He is the narrator of the story.",
      personnage2: "■ Brutus Brutal Howell (David Morse): Paul's deputy, ironically nicknamed Brutal because he is very gentle, despite his imposing physique. He is loyal and supportive of Paul.",
      personnage3: "■ Percy Wetmore (Doug Hutchison): A sadistic, cowardly, and arrogant guard. The nephew of the governor's wife, he is untouchable and takes pleasure in tormenting the prisoners, especially Delacroix.",
      personnage4: "■ Dean Stanton (Barry Pepper): A younger, more efficient guard who assists with executions.",
      personnage5: "■ Harry Terwilliger (Jeffrey DeMunn): An experienced and calm guard, part of Paul's trusted team.",
      personnage6: "■ John Coffey (Michael Clarke Duncan): A hulking Black man, convicted of the rape and murder of two little girls. He is revealed to be innocent and possesses supernatural healing powers (a divine gift), despite being simple-minded and terrified of the dark.",
      personnage7: "■ Eduard Del Delacroix (Michael Jeter): A kind and fragile French inmate who befriends a circus mouse, Mr. Jingles. He is the primary victim of Percy's sadism.",
      personnage8: "■ William Wild Bill Wharton (Sam Rockwell): A violent, psychopathic, and chaotic serial killer. He is the true murderer of the two little girls for which John Coffey was convicted.",
      personnage9: "■ Arlen Bitterbuck (Graham Greene): A Native American on death row, who is the first to be executed in the film.",
      personnage10: "■ Hal Moores (James Cromwell): The warden of Cold Mountain Prison, a friend of Paul.",
      personnage11: "■ Melinda Moores (Patricia Clarkson): The wife of Warden Hal Moores, who suffers from an incurable brain tumor and is cured by John Coffey.",
      personnage12: "■ Jan Edgecomb (Bonnie Hunt): Paul Edgecomb's wife, who provides him with emotional support. Mr. Jingles: The mouse tamed by Delacroix, who displays superior intelligence and witnesses Coffey's magic.",
      personnage13: "■ Toot-Toot (Harry Dean Stanton): An old man who helps with cleaning and plays the role of the condemned man during the electric chair tests.",
      personnage14: "■ Older Paul Edgecomb (Dabbs Greer): The narrator of the story, who recounts his memories from a nursing home.",
      date: "From December 1999..."
    },
    {
      id: Math.random(),
      titre: "Titanic",
      description: "A tragic love story.",
      posterURL: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      note: 4.4,
      vidéo:"https://www.youtube.com/watch?v=I7c1etV7D7g",
      genre: "DRAMA",
      image1: "https://variety.com/wp-content/uploads/2016/03/titanic-anniversary.jpg?w=1000&h=608&crop=1",
      image2: "https://ew.com/thmb/ONlT4fPEP6VwIv5PWwiTVpmcqs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/titanic_320-2-8af171fd7471499ba80a2a7a97130101.jpg",
      image3: "https://assets.gqindia.com/photos/63ef42bcb295b6a9921513b5/16:9/w_2560%2Cc_limit/Titanic_04.jpeg",
      details: "James Cameron's Titanic (1997) is an epic romance-disaster film starring Leonardo DiCaprio and Kate Winslet as Jack and Rose, lovers from different social classes who meet on the ill-fated maiden voyage of the unsinkable ship. Framed by a modern-day treasure hunt, the film follows their passionate affair amidst the opulent first class and vibrant third class, culminating in the 1912 sinking.",
      personnage1: "■ Jack Dawson (Leonardo DiCaprio): A talented but penniless artist who earns his ticket in third class. He falls in love with Rose and teaches her how to enjoy life.",
      personnage2: "■ Rose DeWitt Bukater (Kate Winslet): A young woman from high society, stifled by her social circle. She falls in love with Jack and chooses to live a free life.",
      personnage3: "■ Caledon Cal Hockley (Billy Zane): Rose's arrogant and wealthy fiancé, who represents wealth and social constraints.",
      personnage4: "■ Ruth DeWitt Bukater (Frances Fisher): Rose's status-conscious mother, who pressures her daughter to marry Cal.",
      personnage5: "■ Molly Brown (Kathy Bates): A wealthy first-class passenger (nicknamed The Unsinkable), friendly and compassionate, who takes Jack under her wing.",
      personnage6: "■ Elderly Rose (Gloria Stuart): The film's narrator, who recounts her story at age 101 to the search team.",
      personnage7: "■ Brock Lovett (Bill Paxton): The modern-day treasure hunter who explores the wreck in search of the Heart of the Ocean.",
      personnage8: "■ Captain Edward J. Smith (Bernard Hill): The captain of the Titanic, overwhelmed by the magnitude of the disaster.",
      personnage9: "■ John Jacob Astor IV (Eric Braeden): One of the wealthiest passengers on board.",
      personnage10: "■ Benjamin Guggenheim (Michael Ensign): A wealthy businessman who accepts his fate with stoicism.",
      date: "From December 1997..."
    },
    {
      id: Math.random(),
      titre: "A Beautiful Mind",
      description: "A genius confronted with schizophrenia.",
      posterURL: "https://image.tmdb.org/t/p/original/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
      note: 4.0,
      vidéo:"https://www.youtube.com/watch?v=yC2VpkVMtXY",
      genre: "DRAMA",
      image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ73-YRIB4YZbPP9XBE38jUBCFfjvPkXokg&s",
      image2: "https://cdn.britannica.com/18/77318-050-503ED25F/Russell-Crowe-Jennifer-Connelly-A-Beautiful-Mind-2001.jpg",
      image3: "https://resizing.flixster.com/uLoDpZMUstflSSE0iwwYxMMVchE=/fit-in/352x330/v2/https://resizing.flixster.com/eCgZwamQF8nmmQFsu1XjFGcv8KQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzhhZDUzNmU2LTk5MjAtNGU0Ny1hNjg3LTBlMGNmODZmMzMwNC53ZWJw",
      details: "A Beautiful Mind is a biographical drama detailing the life of Nobel Laureate John Nash (Russell Crowe), a brilliant mathematician who battles paranoid schizophrenia. The film follows his rise at Princeton, his secret Cold War code-breaking work, and his harrowing journey of navigating delusions with the support of his wife, Alicia.",
      personnage1: "■ John Forbes Nash Jr. (Russell Crowe): A brilliant but asocial mathematician who develops a revolutionary game theory but descends into schizophrenia.",
      personnage2: "■ Alicia Nash (Jennifer Connelly): John's devoted and loving wife, who unconditionally supports him in his battle with the illness and helps him rebuild his life.",
      personnage3: "■ Charles Herman (Paul Bettany): John's charismatic roommate at Princeton, who becomes a close friend. He is revealed to be a hallucination of John's.William Parcher (Ed Harris): A mysterious government agent who recruits John for codebreaking. He is a primary hallucination related to John's paranoia.",
      personnage4: "■ Dr. Rosen (Christopher Plummer): The psychiatrist who treats John's schizophrenia and helps him cope with his reality.",
      personnage5: "■ Martin Hansen (Josh Lucas): An academic rival of John's at Princeton, who later becomes the head of the mathematics department.",
      personnage6: "■ Sol (Adam Goldberg) and Bender (Anthony Rapp): Friends and colleagues of John's at Princeton, who share moments of competition and camaraderie.",
      date: "From December 2001..."
    },
    {
      id: Math.random(),
      titre: "Fight Club",
      description: "A man creates a secret fight club.",
      posterURL: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
      note: 4.5,
      vidéo:"https://www.youtube.com/watch?v=yxQmJXZOZ30",
      genre: "DRAMA",
      image1: "https://www.nerdface.it/wp-content/uploads/2024/10/fight-club-la-prima-regola-di-david-fincher.jpg",
      image2: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2025/05/10-best-movies-with-plot-twists-like-fight-club.jpg?w=1600&h=900&fit=crop",
      image3: "https://otakukart.com/wp-content/uploads/2025/01/The-Narrator.jpg",
      details: "Fight Club, directed by David Fincher, is a cult classic thriller exploring consumerism, emasculation, and identity. It follows an insomniac, white-collar narrator (Edward Norton) who finds release by starting an underground fighting ring with soap salesman Tyler Durden (Brad Pitt). The club evolves into an anarchist organization, revealing a mind-bending twist regarding the narrator's psyche.",
      personnage1: "■ The Narrator (Edward Norton): An anonymous office worker suffering from chronic insomnia, he represents modern man alienated by consumerism. He is the unwitting creator of Tyler Durden.",
      personnage2: "■ Tyler Durden (Brad Pitt): A charismatic nonconformist and soap salesman, he is the projection of the Narrator's personality, embodying all his desires for freedom, violence, and masculinity.",
      personnage3: "■ Marla Singer (Helena Bonham Carter): A nihilistic and marginalized woman who attends the same support groups as the Narrator. She becomes the link between the Narrator and reality, disrupting the balance of his double life.",
      personnage4: "■ Robert Bob Paulson (Meat Loaf): A former bodybuilder with cancer, he represents vulnerability and becomes a prominent figure in Fight Club.",
      personnage5: "■ Angel Face (Jared Leto): A devoted member of Fight Club, who suffers the group's violence.",
      date: "From November 1999"
    }
    ]);

    const [add, setadd] = useState([]);

    const [text, settext] = useState("");

    const [rate, setrate] = useState("");
    
    const movies = [...action, ...comedy, ...herror, ...drama, ...add];
  return (
    <div className="App">
      {/* <Navbarr settext={settext} setrate={setrate}/> */}
      {/* <Main/>
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

        <h2>NEW MOVIES</h2>

        <MovieList movies={add} showAdd={true} setadd={setadd} text={text} rate={rate} />

      </div> */}
      

      <Navbarr settext={settext} setrate={setrate}/>
      <Main/>

      <Routes>
        {/* <Route path="/" element={  <Main/> } /> */}
        <Route path="/" element={ <div className='titre'>
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

        <h2>NEW MOVIES</h2>

        <MovieList movies={add} showAdd={true} setadd={setadd} text={text} rate={rate} />

      </div> 
       } />
        <Route path="/contact" element={ <Contact/> } />

        <Route path="/trailer/:id" element={ <Trailer movies={movies}/> } />
        {/* <Route path="/trailer/:name" element={ <Trailer movies={comedy}/> } />
        <Route path="/trailer/:name" element={ <Trailer movies={herror}/> } />
        <Route path="/trailer/:name" element={ <Trailer movies={drama}/> } /> */}
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
