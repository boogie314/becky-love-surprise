const letter = `

Dear Becky ❤️,

There are moments in life that change everything.

Meeting you was one of those moments.

Your smile has a way of making ordinary days feel special, and your presence brings a kind of peace that's hard to describe.

Thank you for every laugh, every conversation, every memory we've shared, and for simply being yourself.

On this National Girlfriend's Day, I wanted to give you something different—something you could keep and revisit whenever you wanted.

This little website is just a reminder that you're appreciated more than words can fully express.

No matter what tomorrow brings, I hope you continue smiling, chasing your dreams, and knowing that you are deeply valued.

Happy National Girlfriend's Day.

With love,

❤️
`;

let i = 0;

const loveLetter = document.getElementById("loveLetter");
const nextBtn = document.getElementById("nextBtn");
const petalsContainer = document.querySelector(".petals");

// ================================
// Typewriter Effect
// ================================

function typeLetter() {

    if (i < letter.length) {

        loveLetter.textContent += letter.charAt(i);

        i++;

        setTimeout(typeLetter, 35);

    } else {

        nextBtn.style.display = "block";

    }

}

typeLetter();

// ================================
// Continue Button
// ================================

nextBtn.addEventListener("click", () => {
    window.location.href = "timeline.html";
});

// ================================
// Falling Rose Petals
// ================================

function createPetal() {

    if (!petalsContainer) return;

    const petal = document.createElement("div");

    petal.className = "petal";
    petal.textContent = "🌹";

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 11000);

}

// Creates petals every 800ms (better performance on phones)
setInterval(createPetal, 800);