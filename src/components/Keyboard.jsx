import KeyboardButton from "./KeyboardButton"
import { keyboardLetters } from "../data"
import { useState } from "react"

const Keyboard = ({ word, setWord }) => {
  const [keyboardLettersState, setKeyboardLettersState] = useState(keyboardLetters)

  return (
    <div className="flex flex-wrap gap-2 justify-center items-start">
      {keyboardLettersState.map((letter, index) => <KeyboardButton key={index} keyboardLetterObject={letter} setKeyboardLettersState={setKeyboardLettersState} word={word} setWord={setWord} />)}
    </div>
  )
}

export default Keyboard