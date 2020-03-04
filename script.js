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

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
  // if (e.target == submit) {
  //   closeModal();
  // }
}

function isEmpty() {
  let input = document.querySelector('input');
  if (input.value === "" || input.value == null) {
    error.classList
  }
}
