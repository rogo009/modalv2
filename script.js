// get modal window
const modal = document.getElementById("modal");
// get open modal button
const modalBtn = document.getElementById("modal-button");
// get close modal button
const closeBtn = document.getElementById("close-button");
// get submit modal button
const submit = document.getElementById("submit");

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
submit.addEventListener("click", isEmpty);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
    error.classList.add("errorDisplay");
  }
  // if (e.target == submit) {
  //   closeModal();
  // }
}

function isEmpty() {
  
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  if (name.value === "" || name.value == null) {
    error.classList.remove("errorDisplay");
  }
  if (email.value === "" || email.value == null) {
    error.classList.remove("errorDisplay");
  }
}
