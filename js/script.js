// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar side bar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scroll
// Ambil elemen navbar berdasarkan ID
const navbar = document.getElementById('navbar');

// Simpan posisi scroll terakhir
let lastScrollPosition = window.scrollY;

// Tambahkan event scroll ke window
window.addEventListener('scroll', () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
    // Scroll ke bawah → sembunyikan navbar
    navbar.style.top = '-100px'; // sesuaikan dengan tinggi navbar
  } else {
    // Scroll ke atas → tampilkan navbar
    navbar.style.top = '0';
  }

  // Update posisi scroll terakhir
  lastScrollPosition = currentScrollPosition;
});

// Animasi gerak


  const hiddenElements = document.querySelectorAll('.hidden-element');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show')
      }
    });
  }, { threshold: 0.1 });

  hiddenElements.forEach(el => observer.observe(el));







    
