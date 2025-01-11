import "../App.css";

function Button({ func, text, customcss }) {
  return (
    <>
      <button
        className="bg-red-400  hover:bg-red-800 rounded-md p-2 mx-2"
        onClick={func}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
