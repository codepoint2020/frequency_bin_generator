let lowestScore = 20;
let hps = 30;
let testTakers = 33;

function generateAndDisplayBinaries() {
    let table = document.createElement("table");

    for (let t = 0; t < testTakers; t++) {
        let layBinaries = [];
        for (let i = 1; i <= hps; i++) {
            if (layBinaries.length < lowestScore) {
                layBinaries.push(1);
            } else {
                layBinaries.push(0);
            }
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

generateAndDisplayBinaries();