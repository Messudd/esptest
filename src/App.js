import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  const btnStyle = {
    backgroundColor: "darkblue",
    border: "1px solid transparent",
    padding: "5px 10px",
    borderRadius: "4px",
    width: "100%",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
  };

  const toggleLED = (state) => {
    axios
      .post("https://b4b0-82-222-123-251.ngrok-free.app/led", { state }) // Ngrok URL'sini buraya ekleyin
      .then((response) => {
        console.log("LED state updated");
      })
      .catch((error) => {
        console.error("There was an error updating the LED state!", error);
      });
  };

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
        style={{
          display: "flex",
          width: "30%",
          margin: "50px auto",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <button style={btnStyle} onClick={() => toggleLED("on")}>
          Lamb on
        </button>
        <button style={btnStyle} onClick={() => toggleLED("off")}>
          Lamb Off
        </button>
      </div>
    </>
  );
}

export default App;
