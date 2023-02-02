input = document.getElementById("file-open");

textField = document.getElementById("text-field");

let cursorCoord = 0;

let lastText = "";


function openFile(input) {
  let file = input.files[0];

  let htmlText = "";

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    let text = reader.result;
    let text2 = "";

    
    // text = text.replace("Hello", "dfsdfsdf");
    // text = text.replace(" ", "&nbsp");
    // text = text.replace("    ", "&nbsp&nbsp&nbsp&nbsp");

    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") {
        text2 += "&nbsp";
      }
      else {
        text2 += text[i];
      }
    }

    text2 = text2.split("\r\n");

    console.log(text2);
    
    text2.forEach(element => {
        htmlText += `<div>${element}</div>`;
    });

    // htmlText.replace(" ", "&nbsp");

    textField.innerHTML = htmlText;

    

    console.log(textField.innerHTML);
  };
}

function saveFile() {
  
}