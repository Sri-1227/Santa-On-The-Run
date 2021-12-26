document.addEventListener("DOMContentLoaded", () => {
  const santa = document.querySelector("#santa");
  const track = document.querySelector("#track");
  const body = document.querySelector("body");
  const alert = document.getElementById("alert");
  let isJumping = false;
  let isGameOver = false;
  let gravity = 0.9;

  function control(e) {
    if (e.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  }
  document.addEventListener("keyup", control);
  const kid = document.createElement("div");
  kid.classList.add("kid");
  track.appendChild(kid);
  kid.style.left = 900 + "px";
  let position = 0;

  function jump() {
    let count = 0;
    let timerId = setInterval(function () {
      //move down
      if (count === 15) {
        clearInterval(timerId);
        let downTimerId = setInterval(function () {
          if (count === 5) {
            clearInterval(downTimerId);
            isJumping = false;
          }
          position -= 5;
          count--;
          position = position * gravity;
          santa.style.bottom = position + "px";
        }, 20);
      }
      //move up
      position += 30;
      count++;
      position = position * gravity;
      santa.style.bottom = position + "px";
    }, 15);
  }

  function generateObstacles() {
    let randomTime = Math.random() * 7000;
    let obstaclePosition = 1300;
    const obstacle = document.createElement("div");
    if (!isGameOver) obstacle.classList.add("obstacle");

    track.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + "px";

    let timerId = setInterval(function () {
      if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60) {
        clearInterval(timerId);
        alert.innerHTML = "Game Over";
        isGameOver = true;

        obstacle.classList.remove("obstacle");

        document.getElementById("replay").innerHTML = "Refresh to play again";
      }
      obstaclePosition -= 10;
      obstacle.style.left = obstaclePosition + "px";
    }, 10);
    if (!isGameOver) setTimeout(generateObstacles, randomTime);
  }
  generateObstacles();
});
