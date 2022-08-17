function gitInput(input) {
  const inputEle = document.getElementById(input)
  const inputValue = parseFloat(inputEle.value)
  return inputValue
}
gitInput('btn-deposit')
dipositButton.addEventListener('click', () => {
  console.log(dipositFild.value)
})
