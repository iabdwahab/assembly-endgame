import { useEffect, useRef, useState } from "react"
import EliminationsContainer from "./components/EliminationsContainer"
import Keyboard from "./components/Keyboard"
import Title from "./components/Title"
import WordContainer from "./components/WordContainer"
import { checkWinning, getRandomWord } from "./utils"
import Message from "./components/Message"
import { eliminations, keyboardLetters } from "./data"
import Hint from "./components/Hint"

function App() {
  const [gameStatus, setGameStatus] = useState('playing');
  const [word, setWord] = useState(getRandomWord);
  const [eliminationList, setEliminationList] = useState(eliminations);
  const [attempts, setAttempts] = useState(0);
  const [keyboardLettersState, setKeyboardLettersState] = useState(keyboardLetters);
  const keyboardButtonsRef = useRef([]);

  console.log(word)
  console.log(word.hint)

  useEffect(() => {
    if (checkWinning(word)) {
      setGameStatus('won');
    } else if (attempts >= 8) {
      setGameStatus('lose');
    }
  }, [word])

  function setNewGame() {
    setKeyboardLettersState(keyboardLetters);
    setEliminationList(eliminations)
    setWord(getRandomWord);
    setAttempts(0);
    setGameStatus('playing');

    keyboardButtonsRef.current.forEach(btn => {
      btn.disabled = false;
      btn.classList.remove('disabled');
    });
  }

  return (
    <main className="max-w-xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      {gameStatus !== 'playing' && <Message gameStatus={gameStatus} setNewGame={setNewGame} />}
      <EliminationsContainer attempts={attempts} eliminationList={eliminationList} setEliminationList={setEliminationList} />
      <Hint hint={word.hint} />
      <WordContainer word={word} />
      <Keyboard keyboardLettersState={keyboardLettersState} setKeyboardLettersState={setKeyboardLettersState} keyboardButtonsRef={keyboardButtonsRef} word={word} setWord={setWord} setAttempts={setAttempts} gameStatus={gameStatus} />
    </main>
  )
}

export default App
