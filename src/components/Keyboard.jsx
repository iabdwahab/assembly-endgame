import KeyboardButton from "./KeyboardButton"

const Keyboard = ({ keyboardLetters }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center items-start">
      {keyboardLetters.map(letter => <KeyboardButton data={letter} />)}
    </div>
  )
}

export default Keyboard