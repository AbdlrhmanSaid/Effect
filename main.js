let secTwo = document.querySelector(".two");
let progSpan = document.querySelectorAll(".progress span");

let nums = document.querySelectorAll(".nums .num");
let secThree = document.querySelector(".three");
let started = false; // function started ? no

window.onscroll = function () {
  // count num
  if (window.scrollY >= secThree.offsetTop - 50) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
  // prog width
  if (window.scrollY >= secTwo.offsetTop - 100) {
    progSpan.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
