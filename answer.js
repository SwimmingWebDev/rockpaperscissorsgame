/*

COMPLETE THIS FILE WITH JAVASCRIPT CODE, AND ANSWER THE QUESTIONS BELOW:

Q1: What is the purpose of the following line in the CSS file, and what does it do?
    left: calc(50% - 62px)
    (0.5 mark)

A1: WRITE YOUR ANSWER HERE.
to set the left property of a div in an exact location
on its parent width -62px
------------------------------------------------------------------------------------------

Q2: The play() method does not take any arguments. How does it know which image the player has selected?
    (0.5 mark)

A2: WRITE YOUR ANSWER HERE.
If the player choose a image, then the image displays with a 10px black border.
------------------------------------------------------------------------------------------

Q3: What can you say about the height of the #computer_choice element?
    How much is it? What does the element contain? Does the height make sense?
    If you could change it, what would you change it to, and why?
    Explain your answer.
    (0.5 mark)

A3: WRITE YOUR ANSWER HERE.

the height of the #computer_choice is 200px.
position and height elements are contained in it.
Yes. Because its height is the same as the height of images.

I will change the option of position property in #computer_choice img
to relative and change the option of position property in #computer_choice 
to absolute becuase #computer_choice should be the #computer_choice img 's parent.


------------------------------------------------------------------------------------------

Q4: We want to change the play function so that it now takes an argument.
    We expect the argument to be an event object, like the ones generated by event listeners.
    Which changes would you make to the code of the function? Be as descriptive as possible.
    (1.5 marks)
    

A4: WRITE YOUR ANSWER HERE.
    e.g. 
    const play = ((event) => {
    event.preventDefault();
   
    })
    preventDefault() helps that when you click on a "Submit" button, 
    prevent it from submitting a form.
    

------------------------------------------------------------------------------------------

WRITE YOUR CODE BELOW OUTSIDE OF THE COMMENT.

*/

/* <script src="answer.js" defer></script>; 
my javascript works with defer!!!
*/

function play() {
  // complete this function

  document.addEventListener("DOMContentLoaded", function () {
    const resultText = document.getElementById("result");
    const againBtn = document.getElementById("play-again");
    const images = document.querySelectorAll("#player_choice img");
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    const comRock = document.getElementById("computer_rock");
    const comPaper = document.getElementById("computer_paper");
    const comScissors = document.getElementById("computer_scissors");

    images.forEach((image) => {
      image.addEventListener("click", () => {
        image.classList.add("selected");
        rock.style.pointerEvents = "none";
        paper.style.pointerEvents = "none";
        scissors.style.pointerEvents = "none";
        console.log(image.id);

        playRound(image.id, computerPlay());
        image.classList.disabled = false;
        againBtn.addEventListener("click", () => {
          image.classList.remove("selected");
          againBtn.style.display = "none";
          comRock.style.display = "none";
          comPaper.style.display = "none";
          comScissors.style.display = "none";
          rock.style.pointerEvents = "";
          paper.style.pointerEvents = "";
          scissors.style.pointerEvents = "";
          resultText.textContent = "";
        });
      });
    });

    const computerPlay = () => {
      const choices = ["rock", "paper", "scissors"];
      const randomChoice = Math.floor(Math.random() * choices.length);
      if (choices[randomChoice] == "rock") {
        comRock.classList.add("selected");
        comRock.style.display = "block";
      } else if (choices[randomChoice] == "paper") {
        comPaper.classList.add("selected");
        comPaper.style.display = "block";
      } else if (choices[randomChoice] == "scissors") {
        comScissors.classList.add("selected");
        comScissors.style.display = "block";
      }
      console.log(randomChoice);
      console.log(`com: ${choices[randomChoice]}`);
      return choices[randomChoice];
    };

    const playRound = (player, computer) => {
      if (player === computer) {
        resultText.textContent = "It's a tie!";
        againBtn.style.display = "block";
        return 0;
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
      ) {
        resultText.textContent = "You Won!";
        againBtn.style.display = "block";
        return 1;
      } else {
        resultText.textContent = "You Lost!";
        againBtn.style.display = "block";
        return -1;
      }
    };
  });
}

// add code
play();
