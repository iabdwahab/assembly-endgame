import { useEffect, useState } from "react"
import EliminationsContainer from "./components/EliminationsContainer"
import Keyboard from "./components/Keyboard"
import Title from "./components/Title"
import WordContainer from "./components/WordContainer"
import { checkWinning, getRandomWord } from "./utils"
import Message from "./components/Message"

function App() {
  const [word, setWord] = useState(getRandomWord);
  const [attempts, setAttempts] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing');

  useEffect(() => {
    if (checkWinning(word)) {
      setGameStatus('won');
    } else if (attempts >= 8) {
      setGameStatus('lose');
    }
  }, [word])

  console.log('App:', word);
  console.log(attempts)

  return (
    <main className="max-w-xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      {gameStatus !== 'playing' && <Message gameStatus={gameStatus} />}
      <EliminationsContainer attempts={attempts} />
      <WordContainer word={word} />
      <Keyboard word={word} setWord={setWord} setAttempts={setAttempts} gameStatus={gameStatus} />
    </main>
  )
}

export default App
