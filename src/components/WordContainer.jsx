import WordLetter from "./WordLetter"

const WordContainer = ({ word }) => {
  const { lettersDetails } = word;

  const wordJSX = lettersDetails.map((letter, index) => (
    <WordLetter key={index} letter={letter.letterText} isDisplayed={letter.isDisplayed} />
  ))

  return (
    <div className="flex gap-1 justify-center">
      {wordJSX}
    </div>
  )
}

export default WordContainer