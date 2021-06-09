const userInput = document.querySelector(".userInput");
const translate = document.querySelector(".translate");
const translatedText = document.querySelector(".translatedText");

function translateTheText() {
  const input = userInput.value;
  translatedText.innerHTML = input;
}

function errorHandler(error) {
  console.log("gandla", error);
  alert("fuck off");
}

//callling server for processing

// fetch(getTrans);

translate.addEventListener("click", translateTheText);
