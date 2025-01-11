import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import "../App.css";

function WelcomeMenu() {
  const navigate = useNavigate();
  let [id, setId] = useState("");

  return (
    <>
      <div className="place-content-center h-full">
        <div className="flex justify-center">
          <div className="place-content-center bg-yellow-400 border-8 border-red-400 m-8 h-24 p-2  text-center rounded-md shadow-2xl">
            <p>Code:</p>
            <input
              className="rounded-xl mx-2 px-4"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <Button
              func={() => (id != "" ? navigate("/quiz/" + id) : undefined)}
              text="click"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeMenu;
