const layar = document.querySelector(".screen");
const papanKalkulator = document.querySelector(".calculator-body");

papanKalkulator.addEventListener("click", function (event) {
  if (event.target.tagName !== "INPUT") return;

  if (event.target.classList.contains("action-clear")) {
    layar.innerText = "";
    return;
  }

  if (event.target.classList.contains("action-backspace")) {
    layar.innerText = layar.innerText.slice(0, -1);
    return;
  }

  if (event.target.classList.contains("action-evaluate")) {
    try {
      layar.innerText = eval(layar.innerText);
    } catch (err) {
      layar.innerText = "Error";
    }
    return;
  }

  layar.innerText += event.target.value;
});