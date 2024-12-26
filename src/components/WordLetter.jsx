const WordLetter = ({ letter }) => {
  return (
    <p className="flex justify-center items-center bg-[#323232] border-b border-[#F9F4DA] w-12 h-12 text-ellipsis text-[#F9F4DA] text-2xl font-medium">{letter}</p>
  )
}

export default WordLetter