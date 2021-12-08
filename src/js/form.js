document
  .getElementById("register-form")
  .addEventListener("keypress", function (event) {
    if (event.code == "Enter") {
      event.preventDefault();
    }
  });
