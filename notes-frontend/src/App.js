import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Chords from "./components/Chords";

// VER O ARQUIVO QUE A BÁRBARA ME MANDOU PELO TEAMS

const options = {
  headers: {'Content-Type': 'application/json', 'Accept':'application/json'}
}

async function accessToken(){
  await axios
      .post("https://api.hooktheory.com/v1/users/auth",
            {username: "luizavap", 
            password:"luizavalezim123"}, 
            options)
      .then((response) => {
            var token = response.data.activkey;
            return token;
  });
}
 

async function accessChords(activkey){
  await axios
      .get("https://api.hooktheory.com/v1/trends/nodes",
          {headers: {"Authorization": `Bearer ${activkey}`}})
      .then((response) => {
            var chords = response.data;
            console.log(chords);
            return chords;
      });
}


function App() {
    const [chords, setChords] = useState([]);
    console.log(chords);

    useEffect(() => {
        accessToken().then((token) => {
                      accessChords(token)
                          .then((chr) => setChords(chr))
    })}, []);



    const combinationChords = [
      {
        id: 1,
        title: "1a Opção de acordes",
        content:
          "Em G A C",
      },
      {
        id: 2,
        title: "2a Opção de acordes",
        content: "Em Am C",
      },
    ];

    

    return (
      <div className="main">
        <div className="title">
            <h1> Chords </h1>
            <h1> Theory </h1>
        </div>

        <div className="content">
          <div className="chords"> 
                {combinationChords.map((chordsCard) => (
                  <Chords key={`chordsCard${chordsCard.id}`} title={chordsCard.title}>
                    {chordsCard.content}
                  </Chords>
                ))}
          </div>
        </div>
      </div>
    );
}

export default App;
