import Elimination from "./Elimination"

const EliminationsContainer = ({ eliminationList }) => {
  return (
    <div className="flex flex-wrap justify-center max-w-md mx-auto gap-2">
      {eliminationList.map(item => <Elimination key={item.id} data={item} />)}
    </div>
  )
}

export default EliminationsContainer