// withdraw Ammount
withdrawButton.addEventListener('click', () => {
  // get withdraw by input
  const getWithdraw = getInput('#withdraw-fild')
  const getCurrentBlance = getdata('#current-blance')
  if (getWithdraw < getCurrentBlance) {
    const time = `${dat}/${mon}/${y} ${h}:${m}:${s}`

    count++
    // update count
    setValue('.count', count)

    // update withdraw dashboard
    setValue('#withdraw-ammount', getWithdraw)

    // update main blance
    const afterwithdraw = getCurrentBlance - getWithdraw
    setValue('#current-blance', afterwithdraw)

    // update bank statement
    const totalWithdraw = getdata('.total-withdrad')
    setValue('.total-withdrad', getWithdraw + totalWithdraw)
    setValue('.total-blance', afterwithdraw)

    createTr('00', getWithdraw, afterwithdraw, time)
  } else {
    alert('not a valid info')
  }
})

withdrawFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    // get withdraw by input
    const getWithdraw = getInput('#withdraw-fild')
    const getCurrentBlance = getdata('#current-blance')

    // validation
    if (getWithdraw < getCurrentBlance) {
      const time = `${dat}/${mon}/${y} ${h}:${m}:${s}`

      // update count
      count++
      setValue('.count', count)

      // update withdraw dashboard
      setValue('#withdraw-ammount', getWithdraw)

      // update main blance
      const afterwithdraw = getCurrentBlance - getWithdraw
      setValue('#current-blance', afterwithdraw)

      // update bank statement
      const totalWithdraw = getdata('.total-withdrad')
      setValue('.total-withdrad', getWithdraw + totalWithdraw)
      setValue('.total-blance', getCurrentBlance - getWithdraw)

      createTr('00', getWithdraw, afterwithdraw, time)
    } else {
      alert('not a valid info')
    }
  }
})
