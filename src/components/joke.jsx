import { useState } from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function toggle() {
    setIsShown((prevState) => !prevState);
  }

  return (
    <div>
      <h3>setup:{props.setup}</h3>
      {isShown && <p>punchline:{props.punchline}</p>}
      <button onClick={toggle}>Show Punchline</button>
      <hr />
    </div>
  );
}
