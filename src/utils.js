import wordsList from './words';

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  const wordText = wordsList[randomIndex];
  const lettersDetails = wordText.split('').map((letterText) => ({
    letterText,
    isDisplayed: false,
  }));

  return {
    wordText,
    lettersDetails,
  };
}

export function checkWinning(word) {
  return word.lettersDetails.every((letter) => letter.isDisplayed);
}
