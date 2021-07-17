let speech = new SpeechSynthesisUtterance();

speech.lang = "en";
let voices = [];
document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
});
document.querySelector("#rate").addEventListener("input", () => {
    // Get rate Value from the input
    const rate = document.querySelector("#rate").value;

    // Set rate property of the SpeechSynthesisUtterance instance
    speech.rate = rate;

    // Update the rate label
    document.querySelector("#rate-label").innerHTML = rate;
});