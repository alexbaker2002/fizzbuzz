function getValues() {
  // get values for fizz and buzz
  let fizz = document.getElementById("fizzValueID").value;
  let buzz = document.getElementById("buzzValueID").value;

  // validation
  fizz = parseInt(fizz);
  buzz = parseInt(buzz)
  if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
    // only allow integers inside scope of numbers
    //startingNumber < 0 ? null : startingNumber = 0;
   // endingNumber > 100 ? null : endingNumber = 100;

    // clear DOM
    writeHTML("");

    let numbersArray = new Array(100).fill().map((_, idx) => idx + 1);

    genHTML(numbersArray, fizz, buzz);

  } else {

    alert("Please Enter Numbers Only");
  }


}

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