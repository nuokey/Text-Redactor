input = document.querySelector("input");

textField = document.getElementById("text-field");

function importFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    let text = reader.result;
    let htmlText = "";
    let color = "white";

    let word = "";

    // text = text.split("\n");
    // console.log(text);

    htmlText += `<span class="word" style="color: ${color}">`
    for (let i = 0; i < text.length; i++) {
      if (text[i] == " ") {
        htmlText += `<span class="word" style="color: ${color}">${word}</span>&nbsp`;
        word = "";
      }
      else if (text[i] == ".") {
        htmlText += `<span class="word" style="color: ${color}">${word}</span>&nbsp`;
        word = "";
      }
      else if (text[i] == "\n") {
        htmlText += `${word}</span><br><span class="word" style="color: ${color}">`;
        word = "";
      }
      else {
        word += text[i];
      }
    }
    htmlText += "</span>";

    // for (let i = 0; i < text.length; i++) {
    //   text[i] = text[i].split(" \.");
    // }

    console.log(text);
    // text.forEach(e1 => {
    //   htmlText += '<div class="stroke">'
    //   e1.forEach(e => {
    //     htmlText += `<span class="word" onchange="textChange(this);" style="color: ${color}">${e}&nbsp</span>`;
    //   });
    //   htmlText += '</div>'
    // });

    console.log(htmlText);
    textField.innerHTML = htmlText;
  };
}

document.addEventListener("keydown", function() {
  console.log("asdfasdf");
})