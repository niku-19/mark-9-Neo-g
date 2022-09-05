import { useState } from "react";
import "./styles.css";

const songsSeries = {
  Bollywood: [
    { name: "Romeo Aaja", rating: "5/5" },
    { name: "Param Sundari", rating: "4.5/5" },
    { name: "Anarkali", rating: "4/5" }
  ],
  Hollywood: [
    { name: "Believer", rating: "5/5" },
    { name: "Maroon 5", rating: "4/5" },
    { name: "Nighout", rating: "4/5" }
  ],
  Bhojpuri: [
    { name: "Bhatar Mange Sona", rating: "4.5/5" },
    { name: "Pagal Banaibe", rating: "4.5/5" }
  ]
};

var songsList = Object.keys(songsSeries);

export default function App() {
  var [selected, setSelected] = useState("Bhojpuri");

  function categoriesClickHandler(categories) {
    setSelected(categories);
  }

  return (
    <div className="App">
      <h1> Song Recommender </h1>
      <p> This Web App will give you the songs recommendations to listen.</p>
      <div>
        {songsList.map(function (categories) {
          return (
            <button
              key={categories}
              onClick={() => categoriesClickHandler(categories)}
            >
              {" "}
              {categories}
            </button>
          );
        })}
      </div>
      <hr />

      <ul>
        {songsSeries[selected].map(function (tvSeries) {
          return (
            <li key={tvSeries.name}>
              <div className="name"> {tvSeries.name}</div>
              <div className="rating"> {tvSeries.rating} </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
