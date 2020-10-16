const submitButton = document.getElementById('submitButton');
const nameInput = document.getElementById('name');
const phnInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

submitButton.addEventListener('click', function () {
  if (nameInput.value === '') {
    alert('Please Enter Name');
  } else if (emailInput.value === '') {
    alert('Please Enter Email');
  } else if (phnInput.value === '') {
    alert('Please Enter Phone');
  } else if (phnInput.value.length !== 11) {
    alert('Please Enter Valid 11 digit Number');
  }
});
