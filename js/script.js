


// letters 
const letters = "abcdefghijklmnopqrstuvwxyz"

// get array from letters 
let lettersArray = Array.from(letters)

// Select letters container
let lettersContainer = document.querySelector(".letters")

// generate letters
lettersArray.forEach(letter => {

    // create span
    let spanEle = document.createElement("span")

    // create letter text node
    let theLetter = document.createTextNode(letter)

    // append the letter to span
    spanEle.appendChild(theLetter)

    // add class to span
    spanEle.className = "letter-box"

    // append span to the letter container
    lettersContainer.appendChild(spanEle)
})


// object of words + category
const word = {

    programming: ["php", "javascript", "html", "css", "python", "c++", "java"], 

    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],

    people: ["Albert Einstein", "Hitchcock", "Alexander", 
    "Cleopatra", "Mahatma Ghandi"],

    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}


// get random properties
let allKeys = Object.keys(word)

// Random number depend on key length
let randomPropNumber = Math.floor(Math.random() * allKeys.length)

// category
let randomPropName = allKeys[randomPropNumber]

// category words
let randomPropValue = word[randomPropName]

// Random number depend on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// the choosen wor words
let randomValueValue = randomPropValue[randomValueNumber]

// console.log(randomValueValue)


// set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName 

// select letters Guess element
let letterGuessContainer = document.querySelector(".letter-guess")

// convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue)

// create spans append on word
lettersAndSpace.forEach(letter => {

    // crete empty span
    let span = document.createElement("span")

    // if letter is space
    if(letter === " ") {

        // add class to span
        span.className = "with-space"
    }

    // append span to the letters Guess container
    letterGuessContainer.appendChild(span)
})


// Select Guess spans
let guessSpans = document.querySelectorAll(".letter-guess span")

// set wrong attempt
let wrongAttempt = 0

// select the draw element
let theDraw = document.querySelector(".hangman-draw")

// Handle clicking on letters
document.addEventListener("click", (e) => {

    // set the choose status
    let theStatus = false


    if(e.target.className === "letter-box") {

        e.target.classList.add("clicked")

        // get clicked letter
        let theClickedLetter = e.target.innerHTML.toLowerCase()
        
        // The chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase())

        // console.log(lettersAndSpace)

        theChosenWord.forEach((wordLetter, wordIndex) => {


            // if the clicked letter equal to one of the chosen word letter
            if(theClickedLetter == wordLetter) {

                // set the status to correct
                theStatus = true


                // loop on all guess span
                guessSpans.forEach((span, spanIndex) => {

                    if(wordIndex === spanIndex) {

                        span.innerHTML = theClickedLetter
                    }
                })
            } 
        })


        // outside loop
        
        // if letter is wrong
        if(theStatus != true) {

            // Increase the wrong attempts
            wrongAttempt++

            // add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempt}`)

            // play fail sound
            document.getElementById("fail").play()
            // 

            

            
            if(wrongAttempt === 8) {

                endGame()

                lettersContainer.classList.add("finished")
            }   
        }
        else {

            // play success sound
            document.getElementById("success").play()
        }
        
    }

    



})



// end game function
function endGame () {

    // create popup div
    let div =document.createElement("div")

    // create text
    let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`)

    // append the text to the div
    div.appendChild(divText);

    // add class on div
    div.className = "popup"

    // Append to the body
    document.body.appendChild(div)
}



