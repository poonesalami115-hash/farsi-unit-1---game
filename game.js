let i=0;
let score=0;
let life=3;

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

alert("نام خود را وارد کنید.");

return;

}

startPage.classList.add("hide");

quizPage.classList.remove("hide");

showQuestion();

}
function showQuestion(){

bar.style.width=((i/questions.length)*100)+"%";

let q=questions[i];

question.innerHTML=(i+1)+"- "+q.q;

answers.innerHTML="";

for(let n=0;n<q.a.length;n++){

let btn=document.createElement("button");

btn.className="answer";

btn.innerHTML=q.a[n];

btn.onclick=function(){

checkAnswer(n);

};

answers.appendChild(btn);

}

}
function checkAnswer(n){

if(n===questions[i].c){

alert("✅ آفرین! پاسخ درست است.");

score+=5;

scoreBox.innerHTML=score;

}else{

alert("❌ پاسخ نادرست است.");

life--;

lifeBox.innerHTML=life;

if(life<=0){

endGame(false);

return;

}

}

score+=5;

scoreBox.innerHTML=score;

}else{

life--;

lifeBox.innerHTML=life;

if(life<=0){

endGame(false);

return;

}

}

i++;

if(i>=questions.length){

endGame(true);

}else{

showQuestion();

}

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

if(!win){

result.innerHTML=
playerName.value+
"<br>😔 جان‌های شما تمام شد.<br>⭐ امتیاز: "+
score;

}else{

result.innerHTML=
playerName.value+
"<br>🎉 تبریک!<br>⭐ امتیاز: "+
score+
"<br>"+medal+
"<br><br>👩‍🏫 آموزگار: پونه سلامی";

}

}
