const input = document.querySelector("#lbsInput");
const grams = document.querySelector("#gramsOutput");
const kilograms = document.querySelector("#kgOutput");
const ounces = document.querySelector("#ozOutput");
const pounds = document.querySelector("#poundOutput");
const output = document.querySelector("#output");
const output1 = document.querySelector("#output-1");
const output2 = document.querySelector("#output-2");
const output3 = document.querySelector("#output-3");

const O = document.querySelector(".o");
const G = document.querySelector(".g");
const K = document.querySelector(".k");
const P = document.querySelector(".p");

function active (out) {
  if (out.style.display === "none") {
    out.style.display = "block"
  } else {
    out.style.display = "none"
  }
}


O.addEventListener('click', (e) => {
  active(output)
 
  e.preventDefault()
})

G.addEventListener('click', (e) => {
  active(output1)
 
  e.preventDefault()
})

K.addEventListener('click', (e) => {
  active(output2)
 
  e.preventDefault()
})

P.addEventListener('click', (e) => {
  active(output3)
 
  e.preventDefault()
})



input.addEventListener("input", (e) => {

  let lbs = e.target.value;
  grams.innerHTML = lbs / 0.0022046;

  kilograms.innerHTML = lbs / 2.2046;

  ounces.innerHTML = lbs * 16;

  e.preventDefault();
})
