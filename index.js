function generateWords(event){
    event.preventDefault();

new Typewriter("#shona-words", {
    strings: "Words Generator",
    autoStart: true,
    delay:1,
    cursor :"",
  });


}

let wordsFormElement  = document.querySelector("#words-generator-form");
wordsFormElement.addEventListener("submit", generateWords);