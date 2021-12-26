document.addEventListener("DOMContentLoaded", () => {
  var santa = document.getElementById("santa");
  var track = document.getElementById("game");
  var alert = document.getElementById("alert");
  let isgameover = false;
  let isJumping = false;
  let gravity = 0.98;

  //adding obstacle
  const obstacle = document.createElement("div");
  obstacle.classList.add("obstacle");
  track.appendChild(obstacle);
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 32 && !isJumping) {
      let timerId = setInterval(function () {
        if (
          obstacle.style.left >= 0 &&
          obstacle.style.left <= 360 &&
          santa.style.bottom <= 145
        ) {
          console.log("game over");
          clearInterval(timerId);
          //   alert.innerHTML = "Game Over";
          isgameover = true;
          //remove all children
        }
      }, 20);
      obstacle.classList.add("movingtree");
    }
  });
  //obstacle

  //adding kid
  const kid = document.createElement("div");
  kid.classList.add("kid");
  track.appendChild(kid);
  kid.style.left = 900 + "px";
  //kid
  //santa jumping
  document.addEventListener("keypress", function (e) {
    if (e.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  });

  let position = 0;
  function jump() {
    let count = 0;
    let timerId = setInterval(function () {
      //move down
      if (count === 20) {
        clearInterval(timerId);
        let downTimerId = setInterval(function () {
          if (count === 5) {
            clearInterval(downTimerId);
            position = 50;
            isJumping = false;
          }
          position -= 10;
          count--;
          //   position = position * gravity;
          santa.style.bottom = position + "px";
        }, 20);
      }
      //move up
      position += 10;
      count++;
      //   position = position * gravity;
      santa.style.bottom = position + "px";
    }, 20);
  }
});
// santa

//game over condition
// if (
//     obstacle.style.left >= 0 &&
//     obstacle.style.left <= 360 &&
//     santa.style.bottom <= 145
//   ) {
//     document.getElementById("alert").innerHTML = "game over";
//   }
