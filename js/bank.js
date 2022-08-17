let count = 01
// secect dom Element
const dipositAmmount = document.querySelector('#diposite-ammount')
const withdrawAmmount = document.querySelector('#withdraw-ammount')
const curentBlance = document.querySelector('#current-blance')
const dipositFild = document.querySelector('#diposit-fild')
const dipositButton = document.querySelector('#btn-deposit')
const withdrawButton = document.querySelector('#btn-withdraw')
const bgChange = document.querySelector('.bg-change')

// bankstatement
const S_totalDiposit = document.querySelector('.total-diposit')
const S_totalWithdraw = document.querySelector('.total-withdrad')
const S_totalBlance = document.querySelector('.total-blance')
const S_tBody = document.querySelector('.t-body')
const S_count = document.querySelector('.count')
const S_time = document.querySelector('.current-time')

// date formate
const date = new Date()
const d = date.getDay() + 1
const s = date.getSeconds()
const m = date.getMinutes()
const y = date.getFullYear()
const mon = date.getMonth() + 1
const dat = date.getDate()

S_time.innerText = `${dat}/${mon}/${y}`
function mybgFun() {
  console.log('afhj')
}

// diposite ammount
// access by Enter key
dipositFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    //   counting
    // e.preventDefault()
    let dipositFild = parseFloat(e.target.value)
    if (dipositFild >= 0) {
      count++
      S_count.innerText = count

      //   add diposit dashbord
      const finalDiposit = parseFloat(dipositAmmount.innerText) + dipositFild
      dipositAmmount.innerText = dipositFild

      // add statement dashbord
      S_totalDiposit.innerText = finalDiposit

      // add main blance dashbord
      const addBlanceMainAccount =
        dipositFild + parseFloat(curentBlance.innerText)
      curentBlance.innerText = addBlanceMainAccount

      //   update diposit bank statmant
      const tr = document.createElement('tr')
      tr.innerHTML = `<td> ${count < 10 ? '0' + count : count}</td>
    <td>${dipositFild}</td>
                    <td>00</td>
                    <td>${addBlanceMainAccount}</td>
                    <td>${dat}/${mon}/${y}</td>`
      S_tBody.appendChild(tr)

      //   add statement dashbord current blance
      S_totalBlance.innerText = addBlanceMainAccount

      e.target.value = ''

      // want to change bg color but not working
      e.target.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
          console.log(e)
          e.bgChange.style.backgroundColor = '#3b82f680'
        }
      })
    } else {
      alert('Please give valid ammount')
      e.target.value = ''
    }
  }
})

// withdraw Ammount
// access by click
withdrawButton.addEventListener('click', () => {
  let withdrawFilds = document.querySelector('#withdraw-fild')
  let withdrawFild = parseFloat(withdrawFilds.value)

  if (withdrawFild > 0 && parseFloat(curentBlance.innerText) > withdrawFild) {
    // counting
    count++
    S_count.innerText = count
    // withdraw dashbord
    const totalWithdraw = parseFloat(withdrawAmmount.innerText) + withdrawFild
    withdrawAmmount.innerText = totalWithdraw

    // add statement withdraw dashbord
    S_totalWithdraw.innerText = totalWithdraw

    //   remove balance from main balance
    const afterwithdraw =
      parseFloat(curentBlance.innerText) - parseFloat(parseFloat(withdrawFild))
    curentBlance.innerText = afterwithdraw

    //   add statement dashbord main blance
    S_totalBlance.innerText = afterwithdraw

    //   update withdraw bank statmant
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${count}</td>
    <td>00</td>
                  <td>${withdrawFild}</td>
                  <td>${afterwithdraw}</td>
                  <td>${dat}/${mon}/${y}</td>`
    S_tBody.appendChild(tr)

    withdrawFilds.value = ''
  } else {
    alert('Please give valid ammount')
    withdrawFilds.value = ''
  }
})
