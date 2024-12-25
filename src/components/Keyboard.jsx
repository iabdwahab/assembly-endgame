import KeyboardButton from "./KeyboardButton"

const Keyboard = () => {
  const letters = [
    {
      "id": 1,
      "letter": "A",
      "status": "correct"
    },
    {
      "id": 2,
      "letter": "B",
      "status": "wrong"
    },
    {
      "id": 3,
      "letter": "C",
      "status": "initial"
    },
    {
      "id": 4,
      "letter": "D",
      "status": "initial"
    },
    {
      "id": 5,
      "letter": "E",
      "status": "initial"
    },
    {
      "id": 6,
      "letter": "F",
      "status": "initial"
    },
    {
      "id": 7,
      "letter": "G",
      "status": "initial"
    },
    {
      "id": 8,
      "letter": "H",
      "status": "initial"
    },
    {
      "id": 9,
      "letter": "I",
      "status": "initial"
    },
    {
      "id": 10,
      "letter": "J",
      "status": "initial"
    },
    {
      "id": 11,
      "letter": "K",
      "status": "initial"
    },
    {
      "id": 12,
      "letter": "L",
      "status": "initial"
    },
    {
      "id": 13,
      "letter": "M",
      "status": "initial"
    },
    {
      "id": 14,
      "letter": "N",
      "status": "initial"
    },
    {
      "id": 15,
      "letter": "O",
      "status": "initial"
    },
    {
      "id": 16,
      "letter": "P",
      "status": "initial"
    },
    {
      "id": 17,
      "letter": "Q",
      "status": "initial"
    },
    {
      "id": 18,
      "letter": "R",
      "status": "initial"
    },
    {
      "id": 19,
      "letter": "S",
      "status": "initial"
    },
    {
      "id": 20,
      "letter": "T",
      "status": "initial"
    },
    {
      "id": 21,
      "letter": "U",
      "status": "initial"
    },
    {
      "id": 22,
      "letter": "V",
      "status": "initial"
    },
    {
      "id": 23,
      "letter": "W",
      "status": "initial"
    },
    {
      "id": 24,
      "letter": "X",
      "status": "initial"
    },
    {
      "id": 25,
      "letter": "Y",
      "status": "initial"
    },
    {
      "id": 26,
      "letter": "Z",
      "status": "initial"
    }
  ]

  return (
    <div className="flex flex-wrap gap-2 justify-center items-start">
      {letters.map(letter => <KeyboardButton data={letter} />)}
    </div>
  )
}

export default Keyboard