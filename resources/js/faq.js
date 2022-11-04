
const faq = document.getElementsByClassName("faqs__question");
console.log(faq)

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */

        const next = this.nextElementSibling;
        if (next.style.display === "block") {
            next.style.display = "none";
        } else {
            next.style.display = "block";
        }
    });
}