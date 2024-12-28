const Message = ({ gameStatus }) => {
  const containerClassNames = `
    absolute
    w-screen
    h-screen
    top-0
    left-0
    z-10
    flex
    justify-center
    items-center
    bg-[#73737342]
  `;

  const modalClassNames = `
    py-5
    px-8
    w-[450px]
    max-w-full
    flex
    flex-col
    justify-center
    items-center
    gap-3
    rounded
    bg-[#282726]
    `

  return (
    <div className={containerClassNames}>
      <div className={modalClassNames}>
        <div className="text-center w-full">
          <h5 className={`text-4xl ${gameStatus === 'won' ? 'text-green-500' : 'text-red-500'} capitalize`}>You {gameStatus}</h5>
          <hr className="mt-2 mb-4" />
          <p className="text-lg text-white">
            {gameStatus === 'won' ? 'Well done! 🎉' : 'Better luck next time.'}
          </p>
        </div>
        <button className="bg-black text-white text-lg w-full rounded py-3">New Game</button>
      </div>
    </div >
  )
}

export default Message