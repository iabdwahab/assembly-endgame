import wordsList from './words';

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsList.length);

  const wordObject = wordsList[randomIndex];
  const { word: wordText, hint } = wordObject;

  const lettersDetails = wordText.split('').map((letterText) => ({
    letterText,
    isDisplayed: false,
  }));

  return {
    wordText,
    hint,
    lettersDetails,
  };
}

export function checkWinning(word) {
  return word.lettersDetails.every((letter) => letter.isDisplayed);
}
