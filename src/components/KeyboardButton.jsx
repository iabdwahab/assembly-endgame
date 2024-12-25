const KeyboardButton = ({ data }) => {
  const { letter, status } = data

  const classNames = 'w-12 h-12 rounded text-2xl font-bold border border-white hover:opacity-95 active:opacity-85'
  const styles = {
    backgroundColor: status === 'correct' ? '#10A95B'
      : status === 'wrong' ? '#EC5D49'
        : '#FCBA29'
  }

  return (
    <button className={classNames} style={styles}>{letter}</button>
  )
}

export default KeyboardButton