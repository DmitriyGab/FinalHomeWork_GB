const pass1 = document.querySelector(`#pass1`);
const pass2 = document.querySelector(`#pass2`);

pass2.addEventListener(`input`, (e) => {
  // console.log(pass2.value);

  if (pass2.value !== pass1.value) {
    pass1.style.borderColor = `red`;
    pass1.style.borderWidth = `3px`;
    pass2.style.borderColor = `red`;
    pass2.style.borderWidth = `3px`;
  } else {
    pass1.style.borderColor = `green`;
    pass1.style.borderWidth = `3px`;
    pass2.style.borderColor = `green`;
    pass2.style.borderWidth = `3px`;
  }
});

const stars = document.querySelectorAll(`.stars_main4 svg`);
stars.forEach((star, i) => {
  star.addEventListener(`mouseover`, () => {
    console.log(i);
    for (let j = 0; j < 5; j++) {
        stars[j].style.fill = `rgb(176, 176, 176)`;
    };
    for (let j = 0; j < i+1; j++) {
        stars[j].style.fill = `#FFD36F`;
    };
  });
});
