const cart = document.getElementById("cart");
const cactus = document.getElementById("cactus");

function jump() {
  if (cart.classList != "jump") {
    cart.classList.add("jump");

    setTimeout(function () {
      cart.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current cart Y position
  let cartTop = parseInt(window.getComputedStyle(cart).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 60 && cactusLeft > 0 && cartTop >= 140) {
    // collision
    // window.getComputedStyle(cart).setProperty("top") = cartTop;
    document.getElementById("cart").style.top =  toString(cartTop);
    alert("Game Over!");
    
  }
}, 10);

document.addEventListener("keydown", function (event) {
    // if(event.which)
  jump();
});