import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace) => {
    const add = () => {
      setMode(newMode);
      setHistory([...history, newMode]);
    };

    const skip = () => {
      setMode(newMode);
      setHistory([...history, newMode]);
      const replaced = history.length - 2;
      const usurp = [...history].splice(replaced, 1);
      setHistory([...usurp]);
    };

    replace ? skip() : add();
  };

  const back = () => {
    const greaterThanOne = () => {
      const prev = [...history];
      prev.pop();

      const last = prev.length - 1;
      setMode(prev[last]);
      setHistory([...prev]);
    };

    history.length === 1 ? setMode(history[0]) : greaterThanOne();
  };

  return { mode, transition, back };
}
