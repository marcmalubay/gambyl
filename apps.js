// sup
'use strict'


const money = document.querySelector('.btn');
const firstnum = document.querySelector('.firstnum');
const secondnum = document.querySelector('.secondnum');
const thirdnum = document.querySelector('.thirdnum');
var rollcount =0;
var jamal = 0;
var time;
var rollcount2 =0;
var jamal2 = 0;
var time2;
var rollcount3 =0;
var jamal3 = 0;
var time3;

var gamblecount = 0;


money.addEventListener('click', function() {
    gamblecount+=1;

    if (gamblecount > 5) {
        alert("get help. \n call this. \n 1-800-522-4700");
        money.disabled = true;
        
    }
    // box 1
    if (1==1){
        jamal = Math.ceil((Math.random()*10)/2);
        firstnum.textContent = jamal;
    }
    console.log("seconds roll: " + jamal);
    var time = jamal;
    jamal+=2;

    var MyVar = setInterval(myTimer, 500);
    function myTimer(){

        time-=1;
        if (time == 0) {
            myStopFunction();
        }
        
    }
    function myStopFunction() {
        clearInterval(MyVar);
    }

    var NLE = setInterval(roll, 75);  
    function roll(){
        rollcount+=1;
        if (rollcount == 10) {
            rollcount-=9;

        }
        firstnum.textContent = rollcount;
        if (time == 0) {
            myStopFunction1();
        }
    }
    function myStopFunction1() {
        clearInterval(NLE);
    }
// end of box 1


// box 2
if (1==1){
    jamal2 = Math.ceil((Math.random()*10)/2);
    secondnum.textContent = jamal2;
}
console.log("seconds roll: " + jamal2);
var time2 = jamal2;
jamal2+=2;

var MyVar2 = setInterval(myTimer2, 500);
function myTimer2(){


    time2-=1;
    if (time2 == 0) {
        myStopFunction2();
    }
    
}
function myStopFunction2() {
    clearInterval(MyVar2);
}

var NLE2 = setInterval(roll2, 75);  
function roll2(){
    rollcount2+=1;
    if (rollcount2 == 10) {
        rollcount2-=9;

    }

    secondnum.textContent = rollcount2;
    if (time2 == 0) {
        myStopFunction3();
    }
}
function myStopFunction3() {
    clearInterval(NLE2);
}



// end of box 2

// box 3
if (1==1){
    jamal3 = Math.ceil((Math.random()*10)/2);
    thirdnum.textContent = jamal3;
}
console.log("seconds roll: " + jamal3);
var time3 = jamal3;
jamal3+=2;

var MyVar3 = setInterval(myTimer3, 500);
function myTimer3(){

    time3-=1;
    if (time3 == 0) {
        myStopFunctionthird();
    }
    
}
function myStopFunctionthird() {
    clearInterval(MyVar3);
}

var NLE3 = setInterval(roll3, 75);  
function roll3(){
    rollcount3+=1;
    if (rollcount3 == 10) {
        rollcount3-=9;

    }

    thirdnum.textContent = rollcount3;
    if (time3 == 0) {
        myStopFunction4();
    }
}
function myStopFunction4() {
    clearInterval(NLE3);
}

 console.log(rollcount2)






// end of box 3
})

firstnum.addEventListener('click', function() {
    
})
secondnum.addEventListener('click', function() {
    
})
thirdnum.addEventListener('click', function() {
    
})