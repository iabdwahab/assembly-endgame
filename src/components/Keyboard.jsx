import KeyboardButton from "./KeyboardButton"

const Keyboard = ({ word, setWord, setAttempts, gameStatus, keyboardLettersState, setKeyboardLettersState, keyboardButtonsRef }) => {
  if (gameStatus === 'won' || gameStatus === 'lose') {
    disabelKeyboard();
  }

  function disabelKeyboard() {
    keyboardButtonsRef.current.forEach(btn => {
      btn.disabled = true;
      btn.classList.add('disabled');
    });
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center items-start">
      {keyboardLettersState.map((letter, index) => <KeyboardButton key={index} buttonRef={(btn) => keyboardButtonsRef.current[index] = btn} keyboardLetterObject={letter} setKeyboardLettersState={setKeyboardLettersState} word={word} setWord={setWord} setAttempts={setAttempts} />)}
    </div>
  )
}

export default Keyboard