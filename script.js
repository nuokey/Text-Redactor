input = document.querySelector("input");

textField = document.getElementById("text-field");

let cursorCoord = 0;

let lastText = "";
let text;

function importFile(input) {
  let file = input.files[0];

  let htmlText = "";

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    text = reader.result;

    htmlText.replace(" ", "&nbsp");

    text = text.split("\r\n");

    console.log(text);
    
    text.forEach(element => {
        htmlText += `<div>${element}</div>`;
    });

    // htmlText.replace(" ", "&nbsp");

    textField.innerHTML = htmlText;

    

    console.log(textField.textContent);
  };
}