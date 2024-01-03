const button = document.querySelector("button");
const adviceId = document.querySelector(".id-number");
const adviceText = document.querySelector(".advice-text");

async function getAdvice() {
    const url = "https://api.adviceslip.com/advice";
    const advice = await fetch(url);
    return await advice.json();
}

async function getAdviceData() {
    animateButton()
    const adviceID = await getAdvice();
    adviceId.innerHTML = adviceID.slip.id;
    adviceText.innerHTML = adviceID.slip.advice;
}

button.addEventListener("click", getAdviceData);

function animateButton() {
    if (!button.classList.contains("clicked")) {
        button.classList.add("clicked");
        setTimeout(() =>
            button.classList.remove("clicked"), 2000)}
    } 