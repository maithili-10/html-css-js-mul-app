const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl=document.getElementById("score");


let score = JSON.parse(localStorage.getItem("score"));
if(!score){
  score=0;
}
scoreEl.innerText=`score:${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2} ?`;
const correctans = num1 * num2;
formEl.addEventListener("submit", () => {
  const userans = +inputEl.value;
  if (userans == correctans) {
    score++;
    console.log(score);
    updateLocalStorage();
  }
  else {
    score--;
    console.log(score);
    updateLocalStorage();
  }
});
const updateLocalStorage=()=>{
  localStorage.setItem("score",JSON.stringify(score))
}
