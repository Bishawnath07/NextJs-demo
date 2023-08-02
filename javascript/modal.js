// Get the modal elements
const modalOverlay = document.querySelector(".modal-overlay");
const openModalBtn = document.querySelector(".open-modal-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");

// Function to open the modal
function openModal() {
  modalOverlay.style.display = "flex";
}

// Function to close the modal
function closeModal() {
  modalOverlay.style.display = "none";
}

// Event listeners for the buttons
openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
