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
