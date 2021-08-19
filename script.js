// function startTimer(){
//   let setup=document.getElementById("setup");
//   let timer=document.getElementById("timer");
//   // let minutes=document.getElementById("timer-minutes")
//   let button=document.getElementById("button");
//   if (button.innerHTML=="Start"){
//     setup.style.display="none";
//     timer.style.display="inline";
//     button.innerHTML="Pause";
//   }else {
//     setup.style.display="inline";
//     timer.style.display="none";
//     button.innerHTML="Start";
//   }
// }

// function updateMinutes(){
//   let setupMinutes=document.getElementById("setup-minutes");
//   let timerMinutes=document.getElementById("timer-minutes");
//   minutes=parseInt(setupMinutes.value);
//   timerMinutes.innerHTML=setupMinutes.value;
//   // console.log(timerMinutes.innerHTML);
// }
// function updateSeconds(){
//   let setupSeconds=document.getElementById("setup-seconds");
//   let timerSeconds=document.getElementById("timer-seconds");
//   timerSeconds.innerHTML=setupSeconds.value;
//   // console.log(timerSeconds.innerHTML);
// }
// function errorInformating(minutes,seconds){
//   // returns 0 is there is no error and 1 if there is error

//   if (isNaN(minutes) || (minutes<0) || (minutes>60)){
//     return 1;
//   }
//   return 0;
// }

function toggleTimer(){
  let button=document.getElementById("button");
  let state=button.innerHTML;
  if (state==="Start"){
    startTimer();
  }else{
    endTimer();
  }
}

function startTimer(){
  // check format for seconds
  let setupSeconds=document.getElementById("setup-seconds");
  if (errorInSeconds(parseInt(setupSeconds.value))){
    showError("error formating secconds");
  }else{
    hideError();
  }
  // check format for minutes
  let setupMinutes=document.getElementById("setup-minutes");
  if (errorInMinutes(parseInt(setupMinutes.value),parseInt(setupSeconds.value))){
    showError("error formating minutes");
  }else{
    hideError();
  }
  // sync timer with setup
  // hide setup
  // show timer
  // start timer
}

function errorInSeconds(seconds){
  if (isNaN(seconds)){
    return 1;
  }
  if (seconds<5){
    return 1;
  }
  if (seconds>59){
    return 1;
  }
  return 0;
}

function errorInMinutes(minutes,seconds){
  if (isNaN(minutes)){
    return 1;
  }
  if (minutes<0){
    return 1;
  }
  if (minutes>60){
    return 1;
  }
  if ((minutes==60)&&(seconds!=0)){
    return 1;
  }
  return 0;
}

function showError(msg){
  document.getElementById("error").style.display="inline";
  document.getElementById("error").innerHTML=msg;
}

function hideError(){
  document.getElementById("error").style.display="none";
}

function fixFormating(){
  let minutes=document.getElementById("setup-minutes");
  let seconds=document.getElementById("setup-seconds");
  if ()
}