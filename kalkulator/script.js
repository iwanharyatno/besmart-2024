const output = document.querySelector(".screen");

document
  .querySelector(".calculator-body")
  .addEventListener("click", function (e) {

    if (e.target.tagName === "INPUT") {
      if (e.target.classList.contains("action-clear")) {
        output.innerText = "";
      } else if (e.target.classList.contains("action-backspace")) {
        output.innerText = output.innerText.toString().slice(0, -1);
      } else if (e.target.classList.contains("action-evaluate")) {
        try {
          output.innerText = eval(output.innerText);
        } catch (err) {
          output.innerText = "Error";
        }
      } else {
        output.innerText += e.target.value;
      }
    }
  });