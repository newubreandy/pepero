
const generateBtn = document.getElementById("generate-btn");
const numberSpans = document.querySelectorAll(".number");

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
}

function displayNumbers() {
    const lottoNumbers = generateLottoNumbers();
    numberSpans.forEach((span, index) => {
        span.textContent = lottoNumbers[index];
    });
}

generateBtn.addEventListener("click", displayNumbers);

displayNumbers();
