import EliminationsContainer from "./components/EliminationsContainer"
import Keyboard from "./components/Keyboard"
import Title from "./components/Title"
import WordContainer from "./components/WordContainer"

function App() {
  return (
    <main className="max-w-xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      <EliminationsContainer />
      <WordContainer />
      <Keyboard />
    </main>
  )
}

export default App
