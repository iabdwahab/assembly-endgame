import WordLetter from "./WordLetter"

const WordContainer = ({ word }) => {

  const wordJSX = word.split('').map((letter, index) => (
    <WordLetter key={index} letter={letter} />
  ))

  return (
    <div className="flex gap-1 justify-center">
      {wordJSX}
    </div>
  )
}

export default WordContainer