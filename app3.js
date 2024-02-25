let lowestScore = 17;
let hps = 30;
let testTakers = 33;

function generateAndDisplayBinaries() {
    let table = document.createElement("table");

    for (let t = 0; t < testTakers; t++) {
        let numberOfOnes = getRandomIntInclusive(lowestScore, hps); // Random number of 1s
        let layBinaries = new Array(hps).fill(0); // Initialize all as 0s
        for (let i = 0; i < numberOfOnes; i++) {
            layBinaries[i] = 1; // Set first N elements as 1s
        }

        shuffleArray(layBinaries);

        let row = table.insertRow();
        for (let i = 0; i < layBinaries.length; i++) {
            let cell = row.insertCell();
            cell.innerHTML = layBinaries[i];
        }
    }

    document.getElementById("arrayTable").appendChild(table);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

generateAndDisplayBinaries();