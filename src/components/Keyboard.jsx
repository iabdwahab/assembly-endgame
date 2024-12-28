import KeyboardButton from "./KeyboardButton"
import { keyboardLetters } from "../data"
import { useRef, useState } from "react"

const Keyboard = ({ word, setWord, setAttempts }) => {
  const [keyboardLettersState, setKeyboardLettersState] = useState(keyboardLetters)

  const isWon = word.lettersDetails.every(letter => letter.isDisplayed);
  const buttonsRef = useRef([]);

  if (isWon) {
    buttonsRef.current.forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
    });
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center items-start">
      {keyboardLettersState.map((letter, index) => <KeyboardButton key={index} buttonRef={(btn) => buttonsRef.current[index] = btn} keyboardLetterObject={letter} setKeyboardLettersState={setKeyboardLettersState} word={word} setWord={setWord} setAttempts={setAttempts} />)}
    </div>
  )
}

export default Keyboard