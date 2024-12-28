import Elimination from "./Elimination"
import { useEffect } from "react"

const EliminationsContainer = ({ attempts, eliminationList, setEliminationList }) => {

  useEffect(() => {

    setEliminationList(prevList => {
      return prevList.map((eliminationItem) => {

        if (eliminationItem.id === attempts) {
          return {
            ...eliminationItem,
            isEliminated: true
          }
        } else {
          return eliminationItem
        }

      })
    })

  }, [attempts]);

  return (
    <div className="flex flex-wrap justify-center max-w-md mx-auto gap-2">
      {eliminationList.map(item => <Elimination key={item.id} data={item} />)}
    </div>
  )
}

export default EliminationsContainer