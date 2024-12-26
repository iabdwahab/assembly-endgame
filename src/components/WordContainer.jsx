import WordLetter from "./WordLetter"

const WordContainer = () => {
  return (
    <div className="flex gap-1 justify-center">
      <WordLetter letter='H' />
      <WordLetter letter='E' />
      <WordLetter letter='L' />
      <WordLetter letter='L' />
      <WordLetter letter='O' />
    </div>
  )
}

export default WordContainer