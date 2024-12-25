import eliminatedIcon from '../../public/eliminated-icon.png'

const Elimination = ({ data }) => {
  const { value, bgColor, textColor, isEliminated } = data;

  const styles = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <div className='relative rounded overflow-hidden'>
      {isEliminated && <Eliminated />}
      <p className='font-medium w-fit px-3 py-1' style={styles}>{value}</p>
    </div >
  )
}

function Eliminated() {
  return (
    <span className='absolute bg-[#3f3f3fa2] w-full h-full flex justify-center items-center'>
      <img src={eliminatedIcon} alt="Elimination Icon" className='w-5' />
    </span>
  )
}

export default Elimination