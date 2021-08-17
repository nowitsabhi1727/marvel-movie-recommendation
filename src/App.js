import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var movieDict = {
    WEBSERIES: [
      {
        poster: "recent1.jpeg",
        head: "LOKI-The god of mischeif",
        rating: "Rating=5/5",
        p:
          "Loki,despite starting out as an MCU villain, but now loki is a fan-favorite character and this series"
      },
      {
        poster: "recent2.jpeg",
        head: "The Falcon and the Winter Soldier",
        rating: "Rating=4/5",
        p:
          "Falcon teams up with Winter soilder in a worldwide adventure that tests their abilities and their patience "
      },
      {
        poster: "recent3.jpeg",
        head: "Wanda Vision",
        rating: "Rating=3.5/5",
        p:
          "WandaVision's basic setup finds Wanda and Vision living in a sitcom-style suburban world as a married couple with two children"
      },
      {
        poster: "recent4.jpeg",
        head: "Black Widow",
        rating: "Rating=3/5",
        p:
          "This movie will give a perfect end to the black widow story and movie timestamp will be before Avengers End Game"
      }
    ],
    MOVIES: [
      {
        poster: "movies1.jpeg",
        head: "Avengers Infinty War",
        rating: "Rating=5/5",
        p:
          "the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones"
      },
      {
        poster: "movies2.jpeg",
        head: "Doctor Strange",
        rating: "Rating=5/5",
        p:
          "Doctor Strange serves as the Sorcerer Supreme,the primary protector of Earth against magical and mystical threats."
      },
      {
        poster: "movies3.jpeg",
        head: "Iron Man",
        rating: "Rating=4/5",
        p:
          "A billionaire industrialist and genius inventor conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon "
      },
      {
        poster: "movies4.jpeg",
        head: "Black Panther",
        rating: "Rating=5/5",
        p:
          " T'Challa is the king of the secretive and highly advanced African nation of Wakanda - as well as the powerful warrior known as the Black Panther."
      }
    ],
    UPCOMING: [
      {
        poster: "upcoming1.jpeg",
        head: "What IF",
        rating: "Rating=NA",
        p:
          " The series explores alternate timelines in the multiverse that show what would happen if major moments from the MCU films occurred differently."
      },
      {
        poster: "upcoming2.jpeg",
        head: "SHANG-CHI AND THE LEGEND OF THE TEN RINGS",
        rating: "Rating=NA",
        p:
          "He's known for his expertise in all forms of fighting and, thus, his preference to weapons for bare-handed battle"
      },
      {
        poster: "upcoming3.jpeg",
        head: "ETERNALS",
        rating: "Rating=NA",
        p:
          "The Eternals, an immortal alien race, emerge from hiding after thousands of years to protect Earth from their evil counterparts, the Deviants"
      },
      {
        poster: "upcoming4.jpeg",
        head: "SPIDER-MAN: NO WAY HOME",
        rating: "Rating=NA",
        p: " This movie will be continuation of the movie Spiderman:Homecoming "
      }
    ]
  };
  var movieDictKeys = Object.keys(movieDict);

  var [inputText, setCard] = useState([]);

  function clickHandler(name) {
    setCard(movieDict[name]);
  }
  return (
    <div className="App">
      <h1>MARVEL MOVIE RECOMMENDATION</h1>
      <div className="button-div">
        {movieDictKeys.map((name) => {
          return (
            <button className="inside-btn" onClick={() => clickHandler(name)}>
              {name}
            </button>
          );
        })}
      </div>
      <div className="container">
        {inputText.map((item) => {
          return (
            <div className="card">
              <div>
                <img src={`./images/${item.poster}`} className="cardimg"></img>
              </div>
              <div>
                <h3>{item.head}</h3>
                <span style={{ color: "black", fontWeight: "700" }}>
                  {item.rating}
                </span>
                <p style={{ margin: "0rem" }}>{item.p}</p>
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
