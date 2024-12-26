export function getRandomWord(wordsList) {
  const randomIndex = Math.floor(Math.random() * wordsList.length);

  return wordsList[randomIndex];
}
