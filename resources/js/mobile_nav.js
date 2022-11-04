// mobile nav

const navLink = document.getElementById("nav__mobile");
const toggleBtn = document.getElementById("hamburger")

toggleBtn.addEventListener('click', () => {
    if (navLink.style.display === "block") {
        navLink.style.display = "none";
        toggleBtn.classList.remove('close');
      } else {
        navLink.style.display = "block";
        toggleBtn.classList.add('close');
      }
})