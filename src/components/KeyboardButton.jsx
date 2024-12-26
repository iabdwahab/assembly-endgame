const KeyboardButton = ({ keyboardLetterObject, setKeyboardLettersState, word, setWord }) => {
  const { letter, status } = keyboardLetterObject;

  const classNames = 'w-12 h-12 rounded text-2xl font-bold border border-white hover:opacity-95 active:opacity-85'
  const styles = {
    backgroundColor: status === 'correct' ? '#10A95B'
      : status === 'wrong' ? '#EC5D49'
        : '#FCBA29'
  }

  function handleClick(letter) {
    setKeyboardLettersState(prevState => {

      return prevState.map(prevStateLetter => {

        if (prevStateLetter.letter === letter) {
          return {
            ...prevStateLetter,
            status: word.wordText.includes(letter) ? 'correct' : 'wrong',
          }
        } else {
          return prevStateLetter
        }

      })

    })
  }

  return (
    <button className={classNames} onClick={() => handleClick(letter)} style={styles}>{letter}</button>
  )
}

export default KeyboardButton