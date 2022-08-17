function gitInput(input) {
  const inputEle = document.querySelector(input)
  const inputValue = parseFloat(inputEle.value)
  inputEle.value = ''
  return inputValue
}

dipositButton.addEventListener('click', () => {
  gitInput('#diposit-fild')
})
