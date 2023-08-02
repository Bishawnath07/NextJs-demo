

// Get the popup elements
const popupBtns = document.querySelectorAll(".popup-btn");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close-btn");

// Function to open the popup in the appropriate position
function openPopup(event) {
  const position = event.target.classList[1];
  popup.classList.add(position, "active");
}

// Function to close the popup
function closePopup() {
  popup.classList.remove("bottom", "left", "right", "active");
}

// Event listeners for the popup buttons
popupBtns.forEach((btn) => {
  btn.addEventListener("click", openPopup);
});

// Event listener for the close button
closeBtn.addEventListener("click", closePopup);

// Event listener to close the popup when clicking outside
document.addEventListener("click", (event) => {
  if (!popup.contains(event.target) && popup.classList.contains("active")) {
    closePopup();
  }
});