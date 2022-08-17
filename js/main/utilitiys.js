// secect dom Element

const dipositButton = document.querySelector('#btn-deposit')
const withdrawButton = document.querySelector('#btn-withdraw')

// get input fild data
function getInput(input) {
  const inputEle = document.querySelector(input)
  const inputValue = parseFloat(inputEle.value)
  inputEle.value = ''
  return inputValue
}

// get dashbord data
function getdata(data) {
  const getdata = document.querySelector(data)
  getdataValue = parseFloat(getdata.innerText)
  return getdataValue
}

// set data
function setValue(set, value) {
  const seter = document.querySelector(set)
  seter.innerText = value
}
