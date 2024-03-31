let gameseq = [];
let userseq = [];
let btns = ["yellow","blue","pink" ,"beepblue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2"); //for updating value of h2






document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;//mean game start hogya or ek hi  baar start hoga okk
        levelup(); //for calling after starting
    }

    
});
function gameflash(btn){
   btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}
function userflash(btn){
   btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },1000);
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randindex = Math.floor(Math.random()*3);
    let randcolor =  btns[randindex];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    // console.log(randindex);
    // console.log(randcolor);
    // console.log(randbtn);
    // btnflash(randbtn);
    gameflash(randbtn);
}
function checkans(idx){
//    let idx = level-1;
   if(userseq[idx] == gameseq[idx]){
   if(userseq.length == gameseq.length){
    setTimeout(levelup,1000);
   }

   }
   else{
    h2.innerHTML = `game over! your score was  <b> ${level}</b> press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.Color  = "white";
        document.querySelector("body").style.backgroundColor = "";

    },500);
    reset();
   }

}

function btnpress(){
    // console.log("btn was pressed");
//    console.log(this)//ye bataega kon sa click hua hai button like blue,pink..etc
   let btn = this;
//    btnflash(btn);
userflash(btn);
usercolor = btn.getAttribute("id");
// console.log(usercolor);
userseq.push(usercolor);
checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq= [];
    userseq = [];
    level = 0;
}


//shi se dekho toh bht{ btn } but ye sb alag2 hai bzc of its scope ok imp..
// matching sequence ki video 12 min wali ok imp 