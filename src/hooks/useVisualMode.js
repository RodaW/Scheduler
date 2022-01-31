import { useState } from "react";
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  function transition(newMode, replace = false) {
    setMode(newMode)
    if (replace) {
      let newHistory = [...history]
      newHistory[newHistory.length - 1] = newMode
      setHistory(newHistory)
    } else {
      setHistory([...history, newMode])
    }
  }
  function back() {
    if (history.length === 1) {
      return
    }
    let newHistory = [...history]
    newHistory.pop()
    setHistory(newHistory)
    setMode(newHistory[newHistory.length - 1])
  }
  return { mode, transition, back };
}