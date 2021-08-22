let yikes=undefined;

function toggleTimer(){
  let buttonObject=document.getElementById("button");
  let state=buttonObject.innerHTML;
  if (state==="start"){
    startTimer();
  }else{
    endTimer();
  }
}

function timer(){
  let timerSecondsObject=document.getElementById("timer-seconds");
  let timerMinutesObject=document.getElementById("timer-minutes");
  let seconds=parseInt(timerSecondsObject.innerHTML);
  let minutes=parseInt(timerMinutesObject.innerHTML);
  if(seconds==0){
    if(minutes==0){
      let alarm = new Audio("/assets/alarm.wav");
      alarm.play();
      endTimer();
    }else{
      minutes=minutes-1;
      seconds=59;
    }
  }else{
    seconds=seconds-1;
  }
  if (seconds<10){
    timerSecondsObject.innerHTML="0"+seconds;
  }else{
    timerSecondsObject.innerHTML=seconds;
  }
  if (minutes<10){
    timerMinutesObject.innerHTML="0"+minutes;
  }else{
    timerMinutesObject.innerHTML=minutes;
  }
}

function startTimer(){
  // check formatting
  let setupSecondsObject=document.getElementById("setup-seconds");
  let setupSeconds=setupSecondsObject.value;
  let setupMinutesObject=document.getElementById("setup-minutes");
  let setupMinutes=setupMinutesObject.value;
  if (errorInFormatting(parseInt(setupMinutes),parseInt(setupSeconds))){
    showError();
    return;
  }else{
    hideError();
  }
  // sync timer with setup
  let timerSecondsObject=document.getElementById("timer-seconds");
  let timerMinutesObject=document.getElementById("timer-minutes");
  if (setupSecondsObject.value.length==1){
    timerSecondsObject.innerHTML="0"+setupSeconds;
  }else{
    timerSecondsObject.innerHTML=setupSeconds;
  }
  if (setupMinutesObject.value.length==1){
    timerMinutesObject.innerHTML="0"+setupMinutes;
  }else{
    timerMinutesObject.innerHTML=setupMinutes;
  }
  // hide setup
  let setupObject=document.getElementById("setup");
  setupObject.style.display="none";
  // show timer
  let timerObject=document.getElementById("timer");
  timerObject.style.display="inline";
  // change button text
  let buttonObject=document.getElementById("button");
  buttonObject.innerHTML="pause";
  // start timer
  // console.log("started");
  yikes=setInterval(timer,1000);
}

function endTimer(){
  // start timer
  // console.log("stopped");
  clearInterval(yikes);
  // change button text
  let buttonObject=document.getElementById("button");
  buttonObject.innerHTML="start";
  // sync setup with timer
  let timerSecondsObject=document.getElementById("timer-seconds");
  let timerMinutesObject=document.getElementById("timer-minutes");
  let setupSecondsObject=document.getElementById("setup-seconds");
  let setupMinutesObject=document.getElementById("setup-minutes");
  setupSecondsObject.value=timerSecondsObject.innerHTML;
  setupMinutesObject.value=timerMinutesObject.innerHTML;
  // hide timer
  let timerObject=document.getElementById("timer");
  timerObject.style.display="none";
  // show setup
  let setupObject=document.getElementById("setup");
  setupObject.style.display="inline";
}


function errorInFormatting(minutes,seconds){
  if (isNaN(seconds)){
    return 1;
  }
  if (isNaN(minutes)){
    return 1;
  }
  if (seconds<0){
    return 1;
  }
  if (seconds>59){
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

function showError(){
  document.getElementById("error").style.display="inline";
}

function hideError(){
  document.getElementById("error").style.display="none";
}
