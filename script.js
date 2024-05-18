const inA = document.querySelector('.calculator__input-A');
const inB = document.querySelector('.calculator__input-B');

const sum = document.querySelector('.calculator__button-sum');
const sub = document.querySelector('.calculator__button-sub');
const mul = document.querySelector('.calculator__button-mul');
const div = document.querySelector('.calculator__button-div');

const out = document.querySelector('.calculator__answer');

sum.addEventListener("click", function () {
    const a = Number(inA.value);
    const b = Number(inB.value);

    out.innerHTML = 'Answer: ' + String(a + b);
});

sub.addEventListener("click", function () {
    const a = Number(inA.value);
    const b = Number(inB.value);
    out.innerHTML = 'Answer: ' + String(a - b);
});

mul.addEventListener("click", function () {
    const a = Number(inA.value);
    const b = Number(inB.value);
    out.innerHTML = 'Answer: ' + String(a * b);
});

div.addEventListener("click", function () {
    const a = Number(inA.value);
    const b = Number(inB.value);
    out.innerHTML = 'Answer: ' + String(a / b);
});