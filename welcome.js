const message =
"Hi Becky ❤️";

let i = 0;

function typeWriter(){

    if(i < message.length){

        document.getElementById("typing").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();

const beginBtn = document.getElementById("beginBtn");

if (beginBtn) {
    beginBtn.addEventListener("click", () => {
        window.location.href = "letter.html";
    });
}