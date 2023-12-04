import { Counter } from "../features/counter/Counter";
import logo2 from "../logo2.svg";

export const User = () => {
  return (
    <header className="App-header">
      <Counter/>
      <img src={logo2} className="App-logo" alt="app-logo" />
    </header>
  );
};
