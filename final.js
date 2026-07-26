const btn = document.getElementById("surpriseBtn");

if (btn) {

    btn.addEventListener("click", () => {

        document.body.innerHTML = `

<div class="ending">

    <div class="gift-box">
        🎁
    </div>

    <h1>❤️</h1>

    <h2>I Love You Becky</h2>

    <p>

        Thank you for being the beautiful soul that you are.

        You make ordinary moments feel extraordinary,
        and your smile is one of my favorite sights in the world.

        This little website was created to celebrate you
        and to remind you how truly special you are.

        Happy National Girlfriend's Day, my beautiful Becky.

        ❤️ Forever & Always ❤️

    </p>

    <div class="signature">

        Made with love, just for Becky ❤️
        <br>
        <span>— by Derrick</span>

    </div>

    <div class="confetti">
        🎉 ✨ ❤️ 🎊 💖 ✨ 🎉
    </div>

</div>

        `;

        document.body.style.overflowY = "auto";

    });

}