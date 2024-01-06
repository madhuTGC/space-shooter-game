const QuestionList = [
  { 'Q1': "What is Your Name" },
  { 'Q2': "What is Your School Name" },
  { 'Q3': "What is Your father Name" },
  { 'Q4': "What is Your Mother Name" },
  { 'Q5': "What is Your Brother Name" },
  { 'Q6': "Where are you From" },
  { 'Q7': "What is going on?" },
  { 'Q8': "Had a Dinner?" },
  { 'Q9': "why 1+1 is equal to 2?" },
  {'Q10': "Explain Newtons law of motion?"}


  // Add more questions as needed
];

let currentQuestionIndex = 0;


function displayQuestion() {
  if (currentQuestionIndex < QuestionList.length) {
      const currentQuestion = QuestionList[currentQuestionIndex];
      displayQuestionInModal(Object.values(currentQuestion)[0]);
      
      currentQuestionIndex++;
  } else {
      currentQuestionIndex = 0;
      alert("madhu")
      // onGameOver();
  }
}

function displayQuestionInModal(question) {
  $('#questionText').text(question);
  $('#continueButton').on('click', function () {
      // Close the modal
      $('#questionModal').modal('hide');
      // Resume the game logic here
      // resumeGame();
  });

  $('#questionModal').modal('show');
}






var jet = document.getElementById("jet");
var board = document.getElementById("board");

window.addEventListener("keydown", (e) => {
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  if (e.key == "ArrowLeft" && left > 0) {
    jet.style.left = left - 10 + "px";
  }
  //460  =>  board width - jet width
  else if (e.key == "ArrowRight" && left <= 1500) {
    jet.style.left = left + 10 + "px";
  }

  if (e.key == "ArrowUp" || e.keyCode == 32) {
    //32 is for space key
    var bullet = document.createElement("div");
    bullet.classList.add("bullets");
    board.appendChild(bullet);

    var movebullet = setInterval(() => {
      var rocks = document.getElementsByClassName("rocks");

      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i];
        if (rock != undefined) {
          var rockbound = rock.getBoundingClientRect();
          var bulletbound = bullet.getBoundingClientRect();

          //Condition to check whether the rock/alien and the bullet are at the same position..!
          //If so,then we have to destroy that rock

          if (
            bulletbound.left >= rockbound.left &&
            bulletbound.right <= rockbound.right &&
            bulletbound.top <= rockbound.top &&
            bulletbound.bottom <= rockbound.bottom
          ) {
            rock.parentElement.removeChild(rock); //Just removing that particular rock;
            // alert("madhu")
            displayQuestion();
            console.log("1",1) 

            //Scoreboard
            // document.getElementById("points").innerHTML =
              // parseInt(document.getElementById("points").innerHTML) + 1;
          }
        }
      }
      var bulletbottom = parseInt(
        window.getComputedStyle(bullet).getPropertyValue("bottom")
      );

      //Stops the bullet from moving outside the gamebox
      if (bulletbottom >= 1000) {
        clearInterval(movebullet);
      }

      bullet.style.left = left + "px"; //bullet should always be placed at the top of my jet..!
      bullet.style.bottom = bulletbottom + 3 + "px";
    });
  }
});

var generaterocks = setInterval(() => {
  var rock = document.createElement("div");
  rock.classList.add("rocks");
  //Just getting the left of the rock to place it in random position...
  var rockleft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left")
  );
  //generate value between 0 to 450 where 450 => board width - rock width
  rock.style.left = Math.floor(Math.random() * 2000) + "px";


  board.appendChild(rock);
}, 1000);


// var generaterocksright = setInterval(() => {
//   var rock = document.createElement("div");
//   rock.classList.add("rocks");
//   //Just getting the left of the rock to place it in random position...
//   var rockright = parseInt(
//     window.getComputedStyle(rock).getPropertyValue("right")
//   );
//   //generate value between 0 to 450 where 450 => board width - rock width
//   rock.style.right = Math.floor(Math.random() * 1000) + "px";


//   board.appendChild(rock);
// }, 1000);

var moverocks = setInterval(() => {
  var rocks = document.getElementsByClassName("rocks");
  console.log("rocks",rocks.length)


  if (rocks != undefined) {
    for (var i = 0; i < rocks.length; i++) {
      //Now I have to increase the top of each rock,so that the rocks can move downwards..
      var rock = rocks[i]; //getting each rock
      var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
      );
      //475 => boardheight - rockheight + 25
      if (rocktop >= 475) {
        // alert("Game Over");
        // clearInterval(moverocks);
        // window.location.reload();
      }

      rock.style.top = rocktop + 40 + "px";
    }
  }
}, 1000);








