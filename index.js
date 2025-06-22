function displayWords(response){
  console.log("words generated")
  new Typewriter("#shona-words", {
    strings: response.data.answer,
    autoStart: true,
    delay:1,
    cursor :"",
  });

}
function generateWords(event){
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");

let apiKey = "8fe22908f12at3143aof40dfb7505473";
let prompt = `User instructions: Generate shona words ${instructionsInput.value}`;
let context = "You are an excellent teacher who makes shona language easy.Your mission is to teach nonspeaking people shona langauge, make sure your words are presented in a simpla format, and please aline sentences properly. Make sure to follow the user instructions";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generating words");
console.log(`prompt:${prompt}`);
console.log(`context:${context}`);


axios.get(apiUrl).then(displayWords);
}

let wordsFormElement  = document.querySelector("#words-generator-form");
wordsFormElement.addEventListener("submit", generateWords);