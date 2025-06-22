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
let context = `
You are an excellent teacher who makes the Shona language easy to understand, please teach them how to pronounce the words everytime they request to be taught by you.
Your mission is to generate the answer in basic HTML format for non-Shona-speaking people and in your answer dont include the word html.

Please follow these guidelines
- put the shona words in bolds letters.
- Use simple and clear vocabulary.
- Present words and sentences in an easy-to-read format if there's a need to list please do so.
- Align and space sentences properly for readability.
- Always follow the User instructions carefully.
`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let wordsElement  = document.querySelector("#shona-words");
wordsElement.classList.remove("hidden");
wordsElement.innerHTML = `Generating Shona words for you about ${instructionsInput.value}`;


console.log("generating words");
console.log(`prompt:${prompt}`);
console.log(`context:${context}`);


axios.get(apiUrl).then(displayWords);
}

let wordsFormElement  = document.querySelector("#words-generator-form");
wordsFormElement.addEventListener("submit", generateWords);