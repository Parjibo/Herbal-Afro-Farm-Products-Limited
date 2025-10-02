const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");
const seeMoreBtn = document.getElementById("seeMoreBtn");
const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");

const cardsPerPage = 4;
let currentVisible = cardsPerPage;

// Hide extra cards initially
cards.forEach((card, index) => {
  if (index >= cardsPerPage) card.style.display = "none";
});

// Show more cards
seeMoreBtn.addEventListener("click", () => {
  for (let i = currentVisible; i < currentVisible + cardsPerPage; i++) {
    if (cards[i]) cards[i].style.display = "block";
  }
  currentVisible += cardsPerPage;
  if (currentVisible >= cards.length) seeMoreBtn.style.display = "none";
});

// Search filter
searchInput.addEventListener("keyup", function() {
  const query = searchInput.value.toLowerCase();
  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
