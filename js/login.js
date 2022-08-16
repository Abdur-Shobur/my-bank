// secect dom Element
const email = document.querySelector('#email')
const passworad = document.querySelector('#passworad')
const submit = document.querySelector('#btn-submit')

// event manage
submit.addEventListener('click', () => {
  const emailValue = email.value
  const passValue = passworad.value
  const verify =
    emailValue === 'abc@gmail.com' && passValue === 'abcd'
      ? (window.location.href = './bank.html')
      : alert('Wrong password!')
})

/*
if (e.keyCode === 13) {
        console.log(e)
        e.target.addEventListener('keypress', (e) => {
          e.bgChange.style.backgroundColor = '#3b82f680'
          
        })
        e.target.addEventListener('keyup', changeColor2)

        function changeColor2() {
        }
        function changeColor() {
          bgChange.style.backgroundColor = 'red'
        }
      }

      */
