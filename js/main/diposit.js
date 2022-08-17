const getCurrentBlance = getdata('#current-blance')

// diposite
dipositButton.addEventListener('click', () => {
  // git input  value
  const newDipositFildValue = getInput('#diposit-fild')

  // git dashbord value
  const newDiposit = getdata('#diposite-ammount')

  // update dashborad deposit
  setValue('#diposite-ammount', newDipositFildValue)

  // total diposit
  const totalDeposit = newDipositFildValue + newDiposit

  // update dahboard main blance
  const totalCurrentBlance = getCurrentBlance + totalDeposit
  setValue('#current-blance', totalCurrentBlance)

  // update bank statement
  setValue('.total-diposit', totalCurrentBlance)
  setValue('.total-blance', totalCurrentBlance)
})

// withdraw Ammount
withdrawButton.addEventListener('click', () => {
  // get withdraw by input
  const getWithdraw = getInput('#withdraw-fild')

  // update withdraw dashboard
  setValue('#withdraw-ammount', getWithdraw)

  // update main blance
  setValue('#current-blance', getCurrentBlance - getWithdraw)

  // update bank statement
  const totalWithdraw = getdata('.total-withdrad')
  setValue('.total-withdrad', getWithdraw + totalWithdraw)
})
