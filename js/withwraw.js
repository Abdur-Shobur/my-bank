// withdraw Ammount
function newDop() {
  // get input fild
  const getWithdraw = getInput('#withdraw-fild')

  //  get main blance
  const getCurrentBlance = getdata('#current-blance')

  // validation  {main balance is gatter than withdraw blance}
  if (getWithdraw < getCurrentBlance) {
    // update withdraw dashboard
    setValue('#withdraw-ammount', getWithdraw)

    // update main blance
    const afterwithdraw = getCurrentBlance - getWithdraw
    setValue('#current-blance', afterwithdraw)

    // update count
    count++
    setValue('.count', count < 10 ? '0' + count : count)

    // update bank statement
    const totalWithdraw = getdata('.total-withdrad')
    setValue('.total-withdrad', getWithdraw + totalWithdraw)
    setValue('.total-blance', afterwithdraw)

    // update time
    const time = getDate()

    // update table row tr
    createTr('00', getWithdraw, afterwithdraw, time)
  } else {
    alert('not a valid info')
  }
}

// by click functon
withdrawButton.addEventListener('click', () => {
  newDop()
})

// by enter press
withdrawFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    newDop()
  }
})
