// get modal window
const modal = document.getElementById('modal');
// get open modal button
const modalBtn = document.getElementById('modal-button');
// get close modal button
const closeBtn = document.getElementById('close-button');

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
} 