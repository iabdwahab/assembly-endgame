import EliminationsContainer from "./components/EliminationsContainer"
import Title from "./components/Title"

function App() {
  return (
    <main className="max-w-2xl mx-auto py-10 px-3 flex flex-col gap-8">
      <Title />
      <EliminationsContainer />
    </main>
  )
}

export default App
