let count = 1

// secect dom Element
const dipositFild = document.querySelector('#diposit-fild')
const withdrawFild = document.querySelector('#withdraw-fild')
const dipositButton = document.querySelector('#btn-deposit')
const withdrawButton = document.querySelector('#btn-withdraw')
const S_tBody = document.querySelector('.t-body')
const S_time = document.querySelector('.current-time')
const S_count = document.querySelector('.count')

// date formate
const date = new Date()
const d = date.getDay() + 1
const s = date.getSeconds()
const m = date.getMinutes()
const y = date.getFullYear()
const mon = date.getMonth() + 1
const dat = date.getDate()
const h = date.getHours()

// statement current time
S_time.innerText = `${dat}/${mon}/${y}`

// get input fild data {input fild}
function getInput(input) {
  const inputEle = document.querySelector(input)
  const inputValue = parseFloat(inputEle.value)
  inputEle.value = ''
  return inputValue
}

// get dashbord data {dashboard}
function getdata(data) {
  const getdata = document.querySelector(data)
  getdataValue = parseFloat(getdata.innerText)
  return getdataValue
}

// set data {set data}
function setValue(set, value) {
  const seter = document.querySelector(set)
  seter.innerText = value
}

// create table tr
function createTr(diposit = 0, withdrad = 0, Total, time) {
  const tr = document.createElement('tr')
  tr.innerHTML = `<td> ${count < 10 ? '0' + count : count}</td>
  <td>${diposit}</td>
  <td>${withdrad}</td>
  <td>${Total}</td>
  <td>${time}</td>`
  S_tBody.appendChild(tr)
}
