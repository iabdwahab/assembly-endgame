import Elimination from "./Elimination"

const EliminationsContainer = () => {

  const eliminationList = [
    { id: 1, value: 'HTML', bgColor: '#E2680F', textColor: 'white', isEliminated: true },
    { id: 2, value: 'CSS', bgColor: '#328AF1', textColor: 'white', isEliminated: true },
    { id: 3, value: 'JavaScript', bgColor: '#F4EB13', textColor: 'black', isEliminated: false },
    { id: 4, value: 'React', bgColor: '#2ED3E9', textColor: 'black', isEliminated: false },
    { id: 5, value: 'TypeScript', bgColor: '#298EC6', textColor: 'white', isEliminated: false },
    { id: 6, value: 'Node.js', bgColor: '#599137', textColor: 'white', isEliminated: false },
    { id: 7, value: 'Python', bgColor: '#FFD742', textColor: 'black', isEliminated: false },
    { id: 8, value: 'Ruby', bgColor: '#D02B2B', textColor: 'white', isEliminated: false },
    { id: 9, value: 'Assembly', bgColor: '#2D519F', textColor: 'white', isEliminated: false },
  ]

  return (
    <div className="flex flex-wrap justify-center max-w-md mx-auto gap-2">
      {eliminationList.map(item => <Elimination key={item.id} data={item} />)}
    </div>
  )
}

export default EliminationsContainer