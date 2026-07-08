let i=0;
let score=0;
let life=3;
bar.style.width="0%";
result.innerHTML="";
const startPage=document.getElementById("startPage");
const quizPage=document.getElementById("quizPage");
const finishPage=document.getElementById("finishPage");

const startBtn=document.getElementById("startBtn");
const playerName=document.getElementById("playerName");

const question=document.getElementById("question");
const answers=document.getElementById("answers");

const scoreBox=document.getElementById("score");
const lifeBox=document.getElementById("life");
const result=document.getElementById("result");
const bar=document.getElementById("bar");

startBtn.onclick=startGame;

function startGame(){

if(playerName.value.trim()==""){

alert("نام خود را وارد کنید");

return;

}

i=0;
score=0;
life=3;

scoreBox.innerHTML=score;
lifeBox.innerHTML=life;

startPage.classList.add("hide");
finishPage.classList.add("hide");
quizPage.classList.remove("hide");

showQuestion();

}
function showQuestion(){

bar.style.width=((i/questions.length)*100)+"%";

const q=questions[i];

question.innerHTML=(i+1)+" . "+q.q;

answers.innerHTML="";

q.a.forEach(function(item,index){

const btn=document.createElement("button");

btn.className="answer";

btn.textContent=item;

btn.onclick=function(){

checkAnswer(index);

};

answers.appendChild(btn);

});

}

function checkAnswer(index){

const correct=(index===questions[i].c);

const buttons=document.querySelectorAll(".answer");

buttons.forEach(btn=>btn.disabled=true);

if(correct){

score+=5;

scoreBox.textContent=score;

}else{

life--;

lifeBox.textContent=life;

}

setTimeout(function(){

i++;

if(life<=0){

endGame(false);

return;

}

if(i>=questions.length){

endGame(true);

}else{

showQuestion();

}

},800);

}
function endGame(win){

quizPage.classList.add("hide");
finishPage.classList.remove("hide");

bar.style.width="100%";

let medal="🥉 مدال برنز";

if(score>=90){
medal="🥇 مدال طلا";
}else if(score>=70){
medal="🥈 مدال نقره";
}

if(win){

result.innerHTML=
"🎉 آفرین "+playerName.value+
"<br><br>امتیاز: "+score+
"<br>"+medal+
"<br><br>👩‍🏫 آموزگار: پونه سلامی";

}else{

result.innerHTML=
"😔 جان‌های شما تمام شد."+
"<br><br>امتیاز: "+score+
"<br><br>دوباره تلاش کن 🌹";

}

}
