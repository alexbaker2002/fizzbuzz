// Get Template to make table ** From Coder Foundry**
function getTemplate() {

    let rowTemplate = document.getElementById("fbTemplate");

    for (let i = 0; i < numbersArray.length; i += 5) {

        const tableRow = document.importNode(rowTemplate.content, true)

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(numbersArray[i]);
        rowCols[0].textContent = numbersArray[i];
        rowCols[1].classList.add(numbersArray[i + 1]);
        rowCols[1].textContent = numbersArray[i + 1];
        rowCols[2].classList.add(numbersArray[i + 2]);
        rowCols[2].textContent = numbersArray[i + 2];
        rowCols[3].classList.add(numbersArray[i + 3]);
        rowCols[3].textContent = numbersArray[i + 3];
        rowCols[4].classList.add(numbersArray[i + 4]);
        rowCols[4].textContent = numbersArray[i + 4];

        tableBody.appendChild(tableRow);
    }
}