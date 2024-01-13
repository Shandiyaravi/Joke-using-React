import Joke from "./components/joke";
import jokesdata from "./jokesdata";

export default function App() {
  const jokeElements = jokesdata.map((joke) => {
    return <Joke setup={joke.Setup} punchline={joke.Punchline}></Joke>;
  });
  return <div>{jokeElements}</div>;
}
