const scriptURL = 'https://script.google.com/macros/s/AKfycbxYoxIXPMaTdc676ipQACC6bd4jwYophYDcM5J9Ru5xZQHELmZiwdffrzEQ7Lq7EsEijQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})