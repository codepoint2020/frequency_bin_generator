let lowestScore = 20;
let hps = 50;
let testTakers = 36;

let layBinaries = [];

let stringBin = "";
let randomStringBin = "";

//Display the binaries on a table

let table = document.createElement("table");
let row = table.insertRow();
document.getElementById("arrayTable").appendChild(table);


for (let i = 1; i <= hps; i++) {
    if (layBinaries.length < lowestScore) {
        layBinaries.push(1);
    } else {
        layBinaries.push(0);
    }
    
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

shuffleArray(layBinaries);

for (let i = 0; i < layBinaries.length; i++) {
    let cell = row.insertCell();
    cell.innerHTML = layBinaries[i];
}



// stringBin = layBinaries.join(',');

// console.log(stringBin);


// console.log(layBinaries[20]);
// console.log(layBinaries.length);


// function getRandomNumber() {
//     return Math.floor(Math.random() * 51);
// }
