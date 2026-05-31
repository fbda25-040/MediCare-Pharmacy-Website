console.log("JavaScript is connected!");
// ===============================
// Typing Effect
// ===============================

const texts = [
    "Your Partner in Better Health",
    "Trusted Healthcare Solutions",
    "Quality Medicines, Expert Care",
    "Caring For Your Family's Health"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing-headline");

function typeEffect() {
    if (!typingElement) return;

    const currentText = texts[textIndex];

    if (isDeleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

if (typingElement) {
    typeEffect();
}


// ===============================
// Contact Form
// ===============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function () {
        alert("Message Sent Successfully!");
    });
}


// ===============================
// Health Tips Generator
// ===============================

const tips = [
    "Drink at least 8 glasses of water daily.",
    "Exercise for at least 30 minutes every day.",
    "Take medications as prescribed.",
    "Eat fruits and vegetables regularly.",
    "Get enough sleep every night.",
    "Wash your hands regularly to prevent illness."
];

const tipBtn = document.getElementById("tipBtn");

if (tipBtn) {
    tipBtn.addEventListener("click", function () {
        const random =
            Math.floor(Math.random() * tips.length);

        document.getElementById("tipText").textContent =
            tips[random];
    });
}


// ===============================
// Product Search
// ===============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const filter =
            searchInput.value.toLowerCase();

        document
            .querySelectorAll(".product-card")
            .forEach(card => {

                card.style.display =
                    card.textContent
                        .toLowerCase()
                        .includes(filter)
                        ? "block"
                        : "none";

            });
    });
}


// ===============================
// Prescription Upload Form
// ===============================

const prescriptionForm =
    document.querySelector(".prescription-form");

if (prescriptionForm) {

    prescriptionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Prescription uploaded successfully. Our pharmacist will review it shortly."
        );

        prescriptionForm.reset();

    });

}