const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(element => {
  revealObserver.observe(element);
});

// MOBILE NAV TOGGLE

const toggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (toggle) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}


// CONTACT MODAL
let modal = document.getElementById("contactModal");
let callBtn = document.getElementById("callBtn");
let waBtn = document.getElementById("waBtn");

function openContactModal(number) {
  modal = document.getElementById("contactModal");
  callBtn = document.getElementById("callBtn");
  waBtn = document.getElementById("waBtn");

  callBtn.href = "tel:" + number;
  waBtn.href = "https://wa.me/91" + number;

  modal.classList.add("active");
}

function closeContactModal() {
  modal.classList.remove("active");
}

/* OUTSIDE CLICK */
document.addEventListener("click", function (e) {
  if (modal.classList.contains("active") && e.target.id === "contactModal") {
    closeContactModal();
  }
});

/* ESC CLOSE */
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeContactModal();
  }
});