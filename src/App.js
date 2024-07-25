import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import audio from './audio/light-switch.mp3';
import './btn.css';
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const sound = new Audio(audio);

  const toggleLED = (state) => {
    axios
      .post("https://b4b0-82-222-123-251.ngrok-free.app/led", { state }) // Ngrok URL'sini buraya ekleyin
      .then((res) => {
        console.log("status: ", res.data);
        setValue(res.data);
      })
      .catch((err) => {
        console.error("There was an error updating the LED state!", err);
      });
  };

  useEffect(() => {
    sound.play();
  },[value])

  return (
    <>
      <h2 style={{ color: "darkred", textAlign: "center" }}>
        Mesud Lamb Test Open - Close{" "}
      </h2>
      <hr
        style={{
          width: "50%",
          opacity: "0.5",
          color: "#000",
        }}
      />
      <div
        className="body-div"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "50px 0",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "250px",
            padding: "10px",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <button className="hover-btn" onClick={() => toggleLED("on")}>
            Lamb on
          </button>
          <button className="hover-btn" onClick={() => toggleLED("off")}>
            Lamb Off
          </button>
        </div>
        <div className="icon">
          <FontAwesomeIcon
            icon={faLightbulb}
            bounce
            fontSize="5rem"
            style={{ color: value === 'on' &&  "#FFD43B"}}
          />
        </div>
      </div>
    </>
  );
}

export default App;
