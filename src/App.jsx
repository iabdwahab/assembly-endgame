import { useState } from "react"
import EliminationsContainer from "./components/EliminationsContainer"
import Keyboard from "./components/Keyboard"
import Title from "./components/Title"
import WordContainer from "./components/WordContainer"
import { getRandomWord } from "./utils"

function App() {
  const [word, setWord] = useState(getRandomWord);
  const [attempts, setAttempts] = useState(0);
  console.log('App:', word);
  console.log(attempts)

  return (
    <main className="max-w-xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      <EliminationsContainer attempts={attempts} />
      <WordContainer word={word} />
      <Keyboard word={word} setWord={setWord} setAttempts={setAttempts} />
    </main>
  )
}

export default App
