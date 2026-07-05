// ===========================
// Portfolio JavaScript
// ===========================

// Smooth active navigation
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

// Reveal animation habang nag-scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .project-card, .skill").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Floating animation sa AA circle
const circle = document.querySelector(".circle");

let angle = 0;

function floating() {

    angle += 0.02;

    circle.style.transform =
        `translateY(${Math.sin(angle) * 12}px)`;

    requestAnimationFrame(floating);
}

floating();

// Greeting depende sa oras
const hello = document.querySelector(".hello");

const hour = new Date().getHours();

if (hour < 12) {

    hello.innerHTML = "☀️ Good Morning, I'm";

}
else if (hour < 18) {

    hello.innerHTML = "🌤️ Good Afternoon, I'm";

}
else {

    hello.innerHTML = "🌙 Good Evening, I'm";

}

// Scroll Progress Bar
const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#38bdf8";
progress.style.zIndex = "9999";
progress.style.width = "0%";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const current =
        document.documentElement.scrollTop;

    progress.style.width =
        (current / total) * 100 + "%";

});

// Console Message 😄
console.log("🚀 Aaron Portfolio Loaded Successfully!");