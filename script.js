let body = document.querySelector("body");

function mouseMove(e) {
  let div = document.createElement("div");
  div.classList = "curAnim";
  body.appendChild(div);
  div.style.transition = "all .8s linear";
  div.style.left = e.clientX + "px";
  div.style.top = e.clientY + "px";
  div.style.left = div.offsetLeft - 20 + "px";

  let divs = document.querySelectorAll(".curAnim");
  let divsArr = Array.from(divs);
  divsArr.map((item) => {
    console.log(item);
    if (divsArr.length >= 40) {
      div.style.opacity = "0";
    }
    if (divsArr.length >= 70) {
      body.removeChild(item);
    }
    item.addEventListener("transitionend", () => {
      div.style.opacity = "0";
    });
  });
}

document.addEventListener("mousemove", mouseMove);
