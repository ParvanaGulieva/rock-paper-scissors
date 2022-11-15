const game = () => {
  let computerScore = 0;
  let yourScore = 0;

  const participantImages = document.querySelectorAll(".participant-image");
  const buttons = document.querySelectorAll(".selection");

  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");

  const playerOptions = [rockButton, paperButton, scissorsButton];
  const computerOptions = ["rock", "paper", "scissors"];

  const result = document.querySelector(".result-t");
  const resultYou = document.querySelector(".your-result");
  const resultComp = document.querySelector(".comp-result");

  const restartDiv = document.querySelector(".restart");

  const winner = (you, comp) => {
    if (you === comp) {
      result.textContent = "Tie!";
    } else if (you == "rock") {
      if (comp == "paper") {
        computerScore++;
        result.textContent = "Computer Won!";
        resultComp.textContent = computerScore;
      } else if (comp == "scissors") {
        yourScore++;
        result.textContent = "Player Won!";
        resultYou.textContent = yourScore;
      }
    } else if (you == "paper") {
      if (comp == "rock") {
        yourScore++;
        result.textContent = "Player Won!";
        resultYou.textContent = yourScore;
      } else if (comp == "scissors") {
        computerScore++;
        result.textContent = "Computer Won!";
        resultComp.textContent = computerScore;
      }
    } else if (you == "scissors") {
      if (comp == "rock") {
        computerScore++;
        result.textContent = "Computer Won!";
        resultComp.textContent = computerScore;
      } else if (comp == "paper") {
        yourScore++;
        result.textContent = "Player Won!";
        resultYou.textContent = yourScore;
      }
    }
  };

  const restartBtn = document.querySelector(".restart-btn");

  restartBtn.style.display = "block";
  restartBtn.addEventListener("click", () => {
    resultYou.textContent = 0;
    resultComp.textContent = 0;
    result.textContent = "";
    participantImages[0].innerHTML = "";
    participantImages[1].innerHTML = "";

    restartDiv.style.display = "none";
  });

  buttons.forEach((el) =>
    el.addEventListener("click", function (e) {
      const choiceNumber = Math.floor(Math.random() * 3);
      const computerChoice = computerOptions[choiceNumber];
      const myChoice = e.target.getAttribute("data-type");
      participantImages[0].innerHTML = `<img src='/${myChoice}.png' />`;
      participantImages[1].innerHTML = `<img src='/${computerChoice}.png' />`;
      winner(myChoice, computerChoice);

      restartDiv.style.display = "flex";
    })
  );
};

game();
