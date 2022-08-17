// diposite
dipositButton.addEventListener('click', () => {
  const time = `${dat}/${mon}/${y} ${h}:${m}:${s}`
  count++
  // git input  value
  const newDipositFildValue = getInput('#diposit-fild')
  if (newDipositFildValue >= 0) {
    // update count
    setValue('.count', count)

    // git dashbord value
    const newDiposit = getdata('#diposite-ammount')

    // total diposit
    const totalDeposit = newDipositFildValue + newDiposit

    // update dashborad deposit
    setValue('#diposite-ammount', newDipositFildValue)

    // update dahboard main blance
    const getCurrentBlance = getdata('#current-blance')
    const totalCurrentBlance = getCurrentBlance + totalDeposit
    setValue('#current-blance', totalCurrentBlance)

    // update bank statement
    setValue('.total-diposit', totalCurrentBlance)
    setValue('.total-blance', totalCurrentBlance)

    createTr(newDipositFildValue, '00', totalCurrentBlance, time)
  } else {
    alert('Not a valid info')
  }
})

dipositFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    // git input  value
    const newDipositFildValue = getInput('#diposit-fild')
    if (newDipositFildValue >= 0) {
      const time = `${dat}/${mon}/${y} ${h}:${m}:${s}`

      // update count
      count++
      setValue('.count', `${count < 10 ? '0' + count : count}`)

      // git dashbord value
      const newDiposit = getdata('#diposite-ammount')

      // total diposit
      const totalDeposit = newDipositFildValue + newDiposit

      // update dashborad deposit
      setValue('#diposite-ammount', newDipositFildValue)

      // update dahboard main blance
      const getCurrentBlance = getdata('#current-blance')
      const totalCurrentBlance = getCurrentBlance + totalDeposit
      setValue('#current-blance', totalCurrentBlance)

      // update bank statement
      setValue('.total-diposit', totalCurrentBlance)
      setValue('.total-blance', totalCurrentBlance)

      createTr(newDipositFildValue, '00', totalCurrentBlance, time)
    } else {
      alert('Not a valid info')
    }
  }
})
