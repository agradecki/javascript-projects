const divs = document.querySelectorAll("div");

const logText = function (e) {
  console.log(this.classList.value);
  //   e.stopPropagation();
};

divs.forEach((div) =>
  div.addEventListener("click", logText, {
    once: true,
  })
);
