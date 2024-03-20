const form = document.getElementById('my-form')
const submit = document.getElementById('submit')
submit.addEventListener('click', e => {
  e.preventDefault()
  const formData = {}
  for (let i = 0; i < form.elements.length; i++) {
    const field = form.elements[i]
    if (field.type !== 'submit' && field.value !== undefined) {
      formData[field.id] = field.value.trim()
    }
  }
  for (const key in formData) {
    const emptyField = document.getElementById(key)
    if (formData.hasOwnProperty(key) && formData[key] === '') {
      emptyField.classList.add('error')
    } else {
      emptyField.classList.remove('error')
    }
  }
})

// btn-menu

const btnMenu = document.querySelector('.btn-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');
const headerList = document.querySelector('.header__list');

btnMenu.addEventListener('click', function () {
  headerList.classList.add('active');
});

btnMenuClose.addEventListener('click', function () {
  headerList.classList.remove('active');
});