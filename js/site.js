/*

refactor to use DOM

function displayData(result) {
  // output 3 things
  let tableBody = document.getElementById("results")
  tableBody.innerHTML = ""
  let rowTemplate = document.getElementById("tableTemplate");
  const tableRow = document.importNode(rowTemplate.content, true)
  let rowCols = tableRow.querySelectorAll("td");

  // the original
  rowCols[0].textContent = result.usr.toUpperCase();
  // the reversed
  rowCols[1].textContent = result.rev.toUpperCase();;
  // was it a palindrome
  rowCols[2].textContent = result.pal ? "PALINDROME" : "Not a Palindrome";
  tableBody.appendChild(tableRow);
}




*/

function getValues() {
  // get values for fizz and buzz
  let fizz = document.getElementById("fizzValueID").value;
  let buzz = document.getElementById("buzzValueID").value;

  // validation
  fizz = parseInt(fizz);
  buzz = parseInt(buzz)
  if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
    fizz < -100 || fizz > 100 ? Swal.fire("The number for Fizz is outside of the specified range.") : null;
    buzz < -100 || buzz > 100 ? Swal.fire("The number for Buzz is outside of the specified range.") : null;

    // clear DOM
    writeHTML("");

    let numbersArray = new Array(100).fill().map((_, idx) => idx + 1);

    genHTML(numbersArray, fizz, buzz);

  } else {

    Swal.fire("Please Enter Numbers Only");
  }
}

// generate the html to be written
function genHTML(numbersArray, fizz, buzz) {
  let string = "";
  numbersArray.forEach((i) => {

    if (i % fizz == 0 && i % buzz == 0) {
      // if i % fizz && buzz write fizz buzz
      string = `<tr><td class="fizzbuzzNumber">${i} - FizzBuzz</td></tr>`;

    } else if (i % fizz == 0) {
      // if i % fizz write fizz
      string = `<tr><td class="fizzNumber">${i} - Fizz</td></tr>`;

    } else if (i % buzz == 0) {
      // if i % buzz write buzz
      string = `<tr><td class="buzzNumber">${i} - Buzz</td></tr>`;
    } else {
      // if else write number
      string = `<tr><td class="Number">${i}</td></tr>`;
    }
    writeHTML(string);
  })
}
// simple write to element function
function writeHTML(htmlStr) {
  let tableBody = document.getElementById("resultsID")
  htmlStr == "" ? tableBody.innerHTML = "" : tableBody.innerHTML += htmlStr;
}






