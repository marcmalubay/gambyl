// sup
'use strict'

const play = document.getElementById("play");
play.onclick = function() {play1()};

const skip = document.getElementById("skip");
skip.onclick = function () {skip1()};

const pause = document.getElementById("pause");
pause.onclick = function() {pause1()};

const moneybutton = document.getElementById("moneybutton");
moneybutton.onclick = function() {getMoney()};

const uplever = document.getElementById("uplever");
uplever.onclick = function() {
    animateLever(), 
    myFunction()
};




const pointcounter = document.querySelector('.pointcounter');
const firstnum = document.querySelector('.firstnum');
const secondnum = document.querySelector('.secondnum');
const thirdnum = document.querySelector('.thirdnum');
const flash = document.querySelector('.flash');
const gmtimer = document.querySelector('.gmtimer');

const downlever = document.querySelector('.downlever');
const middlelever = document.querySelector('.middlelever');


var cdtime;
var rollcount =0;
var rand = 0;
var time;
var rollcount2 =0;
var rand2 = 0;
var time2;
var rollcount3 =0;
var rand3 = 0;
var time3;
var points = 0;
var gamblecount = 0;
var playcount =-1;
var skipcount =0;
var songamount = 3;

var sosa = new Audio('sounds/fanetofull.mp3');
var shotta = new Audio('sounds/shottaflow.mp3');
var shotta2 = new Audio('sounds/shottaflow2.mp3');
var slatt = new Audio('sounds/slattnoise.mp3');
slatt.volume = 0.5;
var score = points;
// audio

function play1() {
    if (playcount == -1) {
        playcount+=2;
    }
    for (var i = 0; i<songamount+1; i++) {
        if (playcount == i) {
            if (i == 1) {
                shotta.play();
                sosa.pause();
                shotta2.pause
                sosa.currentTime = 0;
                shotta2.currentTime =0;
                break;
            }

            if (i == 2) {
                shotta.currentTime = 0;
                shotta2.currentTime =0;
                sosa.play();
                shotta2.pause
                shotta.pause();

                break;
            }
            if (i == 3) {
                shotta2.play();
                shotta.currentTime = 0;
                sosa.currentTime = 0;
                sosa.pause();
                shotta.pause();
                playcount-=songamount;
            }
        }
    }
}

function skip1() {
    if (playcount >= songamount) {
        playcount-=songamount;
    }
    if (playcount >= 0) {
    playcount+=1;
    for (var i = 0; i<songamount+1; i++) {
        if (playcount == i) {
            if (i == 1) {
                shotta.play();
                sosa.pause();
                shotta2.pause();
                shotta.currentTime = 0;
                sosa.currentTime = 0;
                shotta2.currentTime = 0;
                break;
            }

            if (i == 2) {
                sosa.play();
                shotta.pause();
                shotta2.pause();
                shotta.currentTime = 0;
                sosa.currentTime = 0;
                shotta2.currentTime = 0;
                break;

            }

            if (i == 3) {
                shotta2.play();
                shotta.pause();
                sosa.pause();
                shotta.currentTime = 0;
                sosa.currentTime = 0;
                shotta2.currentTime = 0;
            }
        }
    }
}

}

function pause1() {

    for (var i = 0; i<songamount+1; i++) {
        if (playcount == i) {
            if (i == 1) {
                shotta.pause();
                break;
            }

            if (i == 2) {
                sosa.pause();
                break;
            }
            if (i== 3) {
                shotta2.pause();
                break;
            }
            
        }
    }
}
// audio

middlelever.style.display = 'none';
downlever.style.display = 'none';

function animateLever() {

    if (points > 0) {   
    var AY = setTimeout(middle, 150);
    function middle() {
        uplever.style.display = 'none';
        middlelever.style.display = "block";
        clearTimeout(AY);
    }
    var CUH = setTimeout(lower, 300);
    function lower () {
        middlelever.style.display = "none";
        downlever.style.display = "block";
        clearTimeout(CUH);
    }

    var CUH1 = setTimeout(back, 450);
    function back () {
        downlever.style.display = "none";
        middlelever.style.display = "block";
        clearTimeout(CUH1);
    }
    
    var CUH2 = setTimeout(up1, 600);
    function up1 () {
        middlelever.style.display = "block";
        downlever.style.display = "none";
        clearTimeout(CUH2);
    }
    

    
}
}

function getMoney() {
    points +=500;
    pointcounter.textContent = "your points: " + points;
    moneybutton.style.display = 'none';
    
    var cd = setInterval(chill, 1000);
    cdtime = 6;
    function chill () {
        gmtimer.style.display = 'block';
        cdtime-=1;
        gmtimer.textContent = "Get Points Cooldown: " + cdtime + " seconds";

        if (cdtime == 0) {
            gmtimer.style.display = 'none';
            moneybutton.style.display = 'block';
            cdtime = 6;
            clearInterval(cd);
        }
        

    }



}


function myFunction() {
    rollcount =0;
    rollcount2 = 0;
    rollcount3 = 0;
   

    

    if (points > 0) { 

    slatt.play();
    points-=100;
    pointcounter.textContent = "your points: " + points;
    gamblecount+=1;
    var score = points;
    document.getElementById("score").value = score;


// gamble count 
    console.log("get help. this is your " + (gamblecount) + "th" + " roll" + "\n call this. \n 1-800-522-4700");

    // box 1
    if (1==1){
        rand = Math.ceil((Math.random()*10)/2);
        firstnum.textContent = rand;
    }
    console.log("seconds roll: " + rand);
    var time = rand;

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


        if (rollcount == 1) {
            firstnum.src = 'images/slotMachineImages/lemon.png';
        } 
        if (rollcount == 2) {
            firstnum.src = 'images/slotMachineImages/diamond.png';
        }
        if (rollcount == 3) {
            firstnum.src = 'images/slotMachineImages/watermelon.png';
        }
        if (rollcount == 4) {
            firstnum.src = 'images/slotMachineImages/heart.png';
        }
        if (rollcount == 5) {
            firstnum.src = 'images/slotMachineImages/marijuana.png';
        }
        if (rollcount == 6) {
            firstnum.src = 'images/slotMachineImages/horseshoe.png';
        }
        if (rollcount == 7) {
            firstnum.src = 'images/slotMachineImages/seven.png';
        }
        if (rollcount == 8) {
            firstnum.src = 'images/slotMachineImages/cherry.png';
        }
        if (rollcount == 9) {
            firstnum.src = 'images/slotMachineImages/bar.png';
        }

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
    rand2 = Math.ceil((Math.random()*10)/2);
    secondnum.textContent = rand2;
}
console.log("seconds roll: " + rand2);
var time2 = rand2;

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
    
    if (rollcount2 == 1) {
        secondnum.src = 'images/slotMachineImages/lemon.png';
    } 
    if (rollcount2 == 2) {
        secondnum.src =  'images/slotMachineImages/diamond.png';
    }
    if (rollcount2 == 3) {
        secondnum.src = 'images/slotMachineImages/watermelon.png';
    }
    if (rollcount2 == 4) {
        secondnum.src = 'images/slotMachineImages/heart.png';
    }
    if (rollcount2 == 5) {
        secondnum.src = 'images/slotMachineImages/marijuana.png';
    }
    if (rollcount2 == 6) {
        secondnum.src = 'images/slotMachineImages/horseshoe.png';
    }
    if (rollcount2 == 7) {
        secondnum.src = 'images/slotMachineImages/seven.png';
    }
    if (rollcount2 == 8) {
        secondnum.src = 'images/slotMachineImages/cherry.png';
    }
    if (rollcount2 == 9) {
        secondnum.src = 'images/slotMachineImages/bar.png';
    } 
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
    rand3 = Math.ceil((Math.random()*10)/2);
    thirdnum.textContent = rand3;
}
console.log("seconds roll: " + rand3);
var time3 = rand3;

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

    if (rollcount3 == 1) {
        thirdnum.src = 'images/slotMachineImages/lemon.png';
    } 
    if (rollcount3 == 2) {
        thirdnum.src =  'images/slotMachineImages/diamond.png';
    }
    if (rollcount3 == 3) {
        thirdnum.src = 'images/slotMachineImages/watermelon.png';
    }
    if (rollcount3 == 4) {
        thirdnum.src = 'images/slotMachineImages/heart.png';
    }
    if (rollcount3 == 5) {
        thirdnum.src = 'images/slotMachineImages/marijuana.png';
    }
    if (rollcount3 == 6) {
        thirdnum.src = 'images/slotMachineImages/horseshoe.png';
    }
    if (rollcount3 == 7) {
        thirdnum.src = 'images/slotMachineImages/seven.png';
    }
    if (rollcount3 == 8) {
        thirdnum.src = 'images/slotMachineImages/cherry.png';
    }
    if (rollcount3 == 9) {
        thirdnum.src = 'images/slotMachineImages/bar.png';
    } 

    if (time3 == 0) {
        myStopFunction4();
        
    }
}
function myStopFunction4() {
    clearInterval(NLE3);
}

// end of box 3
var x = false;
var checker = setInterval(rollchecker,175);

function rollchecker(){

    if (time3 == 0 && time2 == 0 && time == 0) {
            slatt.pause();
            slatt.currentTime = 0;        
            middlelever.style.display = "none";
            uplever.style.display = "block";
            if  (time3 == 0 && time2 == 0 && time == 0 && rollcount3 == rollcount2 && rollcount3 == rollcount && rollcount3 != null) {
                points+=10000;
                pointcounter.textContent = "your points: " + points;
                    } 
                    clearInterval(checker);
            }
            
    }
        
    
    

    var animater = setInterval(animate,175); 
    var animatecount = 0;
    function animate(){
        flash.textContent = "";
        animatecount+=1;


        if (time3 == 0 && time2 == 0 && time == 0 && rollcount3 == rollcount2 && rollcount3 == rollcount && rollcount3 != null) {
            
        if (animatecount%2==0) {
        flash.textContent = "YOU WIN";
        console.log("animate");
        }

        if (animatecount >= 25 && time3 == 0 && time2 == 0 && time == 0) {
            console.log("animatecount60");
            flash.textContent = "";
            clearInterval(animater);
            
        }
    } else if (time3 == 0 && time2 == 0 && time == 0){
        clearInterval(animater);
    }
}
} else {
    alert("You have no points. Click the get points button");
}
}


var score = points;

//serverside

const Errors = document.getElementById("error");

function get_scores(callback) {
    let file = "scores.json";
    fetch(file, {cache:'no-cache'})
    .then (function(response){
        if(response.status !== 200) {
            Errors.innerHTML = response.status;

        }
        response.json().then(function(data) {
            let scores = JSON.stringify(data);
            console.log(scores);
            callback(scores);
        });
    })
    .catch(function(err){
        Errors.innerHTML = err;
    })
}


const List = document.getElementById("highscores");

var list_scores = function (scores) {
  // turn scores JSON to a JavaScript object
  let object = JSON.parse(scores);

  // Store lowest high score for later
  let lowest_score = object[9].score;
  document.getElementById('lowscores').value = lowest_score;

  // loop through high scores
  for (let i=0; i<object.length; i++) {
    // console.log(object[i]);
    let li = document.createElement("LI");
    let text = document.createTextNode(object[i].name + " ... " + object[i].score);
    li.appendChild(text);
    List.appendChild(li);
    if (i===0) {
      li.setAttribute('class',"top1");
    }
    if (i===1) {
      li.setAttribute('class',"top2");
    }
    if (i===2) {
      li.setAttribute('class',"top3");
    }
  }
}

function resetForm () {
    while (List.hasChildNodes()) {
      List.removeChild(List.firstChild);
    }
    get_scores(list_scores);
  }

  const Myform = document.getElementById("myform");
Myform.addEventListener("submit", function (event) {
  // don't reload page
  Myform.style.display = "none";
  event.preventDefault();
  var tenth_score = document.getElementById('lowscores').value;

    var formData = new FormData(this);
    fetch ("nlechoppa.php", {
      method: "post",
      body: formData
    })
    .then (function (response){
      return response.text();
    })
    .then(function(text) {
      resetForm();
      console.log(text);
    })
    .catch(function (err) {
      Errors.innerHTML = err;
    })
});
  
//serverside





firstnum.addEventListener('click', function() {
    
})
secondnum.addEventListener('click', function() {
    
})
thirdnum.addEventListener('click', function() {
    
})
pointcounter.addEventListener('click', function() {

})
flash.addEventListener('click', function() {

})
middlelever.addEventListener('click', function() {

})
downlever.addEventListener('click', function() {

})

document.getElementById("score").addEventListener('click', function() {

})
document.getElementById("highscores").addEventListener('click', function() {

})
document.getElementById("lowscores").addEventListener('click', function() {

})
