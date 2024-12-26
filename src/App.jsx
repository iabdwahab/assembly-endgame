import { useState } from "react"
import EliminationsContainer from "./components/EliminationsContainer"
import Keyboard from "./components/Keyboard"
import Title from "./components/Title"
import WordContainer from "./components/WordContainer"
import { eliminationList } from "./data"
import { getRandomWord } from "./utils"

function App() {
  const [word, setWord] = useState(getRandomWord);
  console.log('App:', word);

  return (
    <main className="max-w-xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      <EliminationsContainer eliminationList={eliminationList} />
      <WordContainer word={word} />
      <Keyboard word={word} setWord={setWord} />
    </main>
  )
}

export default App
