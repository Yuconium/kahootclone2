import "../App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Quiz() {
  let { id } = useParams();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/test")
      .then((data) => data.json())

      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>
        <div className="bg-red-400 w-screen h-32 text-center place-content-center">
          {id}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Quiz;
