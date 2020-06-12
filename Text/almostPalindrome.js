const isCasiPalindromo = (word) => {
  return word.split('')
    .filter((letter, i)=>letter !== word[word.length -1 - i])
    .length < 4
}
