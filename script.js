//grabing all the stuff
const userInput = document.querySelector(".userInput");
const translate = document.querySelector(".translate");
const translatedText = document.querySelector(".translatedText");

//the moch api link
const url = "	https://api.funtranslations.com/translate/valyrian.json";

//makeup for the url thing
function getTranslationURL(input) {
  return url + "?" + "text=" + input;
}

//error handling bro
function errorHandler(error) {
  console.log("gandla", error);
  alert(
    "There's a rate limit of 5 requests for it.. so it might be throwing error , you can try after an hour peace❤"
  );
}

function translateTheText() {
  //reading the value of input
  const userinput = userInput.value;

  //callling server for processing
  fetch(getTranslationURL(userinput))
    .then((response) => response.json())
    .then((json) => {
      const translatedshit = json.contents.translated;
      //output
      translatedText.innerHTML = translatedshit;
    })
    .catch(errorHandler);
}

//adding the event listener to the the btn
translate.addEventListener("click", translateTheText);
