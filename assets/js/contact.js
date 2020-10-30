const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  var form = document.getElementById("MyForm");
  var isValidForm = form.checkValidity();
  if (isValidForm) {
    alert("Message Sent Successfully");
  }
});
