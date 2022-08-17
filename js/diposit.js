// diposite
function diposit() {
  // git input  value
  const newDipositFildValue = getInput('#diposit-fild')

  // validtaion never fild less then 0
  if (newDipositFildValue >= 0) {
    // get dashbord value
    const newDiposit = getdata('#diposite-ammount')

    // total diposit
    const totalDeposit = newDipositFildValue + newDiposit

    // update dashborad deposit
    setValue('#diposite-ammount', newDipositFildValue)

    // update dahboard main blance
    const getCurrentBlance = getdata('#current-blance')
    const totalCurrentBlance = getCurrentBlance + totalDeposit
    setValue('#current-blance', totalCurrentBlance)

    // update count
    count++
    setValue('.count', count)

    // update bank statement
    setValue('.total-diposit', totalCurrentBlance)
    setValue('.total-blance', totalCurrentBlance)

    const time = `${dat}/${mon}/${y} ${h}:${m}:${s}`
    createTr(newDipositFildValue, '00', totalCurrentBlance, time)
  } else {
    alert('Not a valid info')
  }
}

// by click event
dipositButton.addEventListener('click', () => {
  diposit()
})

// by enter press
dipositFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    diposit()
  }
})
