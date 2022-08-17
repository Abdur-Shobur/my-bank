// withdraw Ammount

const newObj = {}
withdrawButton.addEventListener('click', () => {
  // get withdraw by input
  newDop(newObj)
  console.log(newObj)
})

withdrawFild.addEventListener('keyup', (e) => {
  // enter keyCode == 13
  if (e.keyCode === 13) {
    // get withdraw by input
    newDop(newObj)
  }
})
