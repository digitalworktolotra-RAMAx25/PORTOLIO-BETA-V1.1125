// --- Défilement fluide pour tous les liens du menu ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// --- Message de confirmation du formulaire ---
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const msg = document.querySelector(".msg");
    msg.textContent = "✅ Merci pour votre message !";
    msg.style.color = "#2e8bff";
    this.reset();
});

// --- Animation d’apparition au scroll ---
window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll("section");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("visible");
        }
    });
});
