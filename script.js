const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submitButton = document.querySelector("#submit-button");

form.addEventListener("submit", e => {
  e.preventDefault();

  if (!nameInput.value || !emailInput.value || !messageInput.value) {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Message sent from ${nameInput.value} (${emailInput.value}): ${messageInput.value}`);

  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
});

submitButton.addEventListener("click", () => {
  submitButton.innerText = "Sending...";
});
var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}