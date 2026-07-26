// ================================
// Example Login Credentials
// (Replace locally before sharing)
// ================================

const PHONE = "0795752294";
const PASSWORD = "chebet";

// ================================
// Login
// ================================

function login() {

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    if (phone === PHONE && password === PASSWORD) {

        document.body.style.transition = "1s";
        document.body.style.background = "#FFD700";

        document.querySelector(".login-card").innerHTML = `
            <div class="unlock">
                <h1>🔓</h1>
                <h2>Access Granted</h2>
                <p>Preparing something beautiful...</p>
            </div>
        `;

        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 3000);

    } else {

        alert("❌ Incorrect contact number or password.");

    }

}

// ================================
// Floating Gold Particles
// ================================

function createParticle(){

    const particle = document.createElement("span");

    particle.innerHTML = "✨";

    particle.style.position = "fixed";
    particle.style.left = Math.random()*100+"vw";
    particle.style.top = "100vh";
    particle.style.fontSize = (10+Math.random()*18)+"px";
    particle.style.opacity = ".8";
    particle.style.pointerEvents = "none";
    particle.style.animation = "rise 8s linear forwards";

    document.body.appendChild(particle);

    setTimeout(()=>{
        particle.remove();
    },8000);

}

setInterval(createParticle,700);

// ================================
// Mouse Glow
// ================================

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.background="gold";
glow.style.boxShadow="0 0 35px gold";
glow.style.pointerEvents="none";
glow.style.zIndex="9999";

document.body.appendChild(glow);

function moveGlow(x, y) {
    glow.style.left = (x - 10) + "px";
    glow.style.top = (y - 10) + "px";
}

document.addEventListener("mousemove", (e) => {
    moveGlow(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    moveGlow(touch.clientX, touch.clientY);
});