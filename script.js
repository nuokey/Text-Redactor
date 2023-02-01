input = document.querySelector("input");

textField = document.getElementById("text-field");

let cursorCoord = 0;

function importFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    let text = reader.result;
    

    textField.innerHTML = textToHTML(text);
  };
}

document.addEventListener("keyup", function() {
  console.log("file changed");

  text = textField.textContent;
  console.log(text);

  let cursor = document.getSelection();

  console.log(cursor);

  textField.innerHTML = textToHTML(text);

  textField.setSelectionRange(10, 10);
  
})

function colorCheck(word) {
  let color = "white";
  if (word == "word") {
    color = "red";
  }

  return color
}

function textToHTML(text) {
  let htmlText = "";

  let word = "";

  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      htmlText += `<span class="word" style="color: ${colorCheck(word)}">${word}</span>&nbsp`;
      word = "";
    }
    else if (text[i] == ".") {
      htmlText += `<span class="word" style="color: ${colorCheck(word)}">${word}</span><span class="word" style="color: ${colorCheck(word)}">.</span>`;
      word = "";
    }
    else if (text[i] == "\n") {
      htmlText += `<span class="word" style="color: ${colorCheck(word)}">${word}\n</span><br>`;
      word = "";
    }
    else {
      word += text[i];
    }
  }
  htmlText += `<span class="word" style="color: ${colorCheck(word)}">${word}</span>`;

  return htmlText
}