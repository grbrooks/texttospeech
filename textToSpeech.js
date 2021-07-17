let speech = new SpeechSynthesisUtterance();
document.querySelector("#talk").addEventListener("click", () => { speech.text = document.querySelector("textarea").value; })