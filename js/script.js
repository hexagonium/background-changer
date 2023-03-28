const bg = document.getElementById("bg");
const color = document.getElementById("bg__color");
const button = document.getElementById("bg__button");

const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


function generateHexColor() {
    // Формирование цвета
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHex()];
    }

    return hexColor;
}

function getRandomHex() {
    return parseInt(Math.random() * hex.length);
}


button.addEventListener("click", () => {
    // Получаем сгенерированный цвет
    let hexColor = generateHexColor();

    // Устанавливаем и выводим полученный цвет
    bg.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
});