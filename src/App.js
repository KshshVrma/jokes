import "./styles.css";
import { useState, useEffect } from "react";
// import time from "time"

export default function App() {
  const [wat, setWat] = useState([]);
  useEffect(() => {
    f();
  }, []);

  const f = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political&type=single"
    ).then((res) => {
      // setWat(res.body)
      res.json().then((data) => {
        setWat(data.joke);
      });
      // time.sleep(3);
      // setTimeout(()=>{},6000)
    });
  };

  return <div className="App">{wat}</div>;
}
