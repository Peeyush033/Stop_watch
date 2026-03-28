
      let countdownele= document.getElementById('countdown');
      let restvalueelmeent=document.querySelector('.restvalue');
      let startcount=0;
      let idinterval;
//   funtion create

// start time function
let startTimer=()=>{
idinterval=setInterval(()=>{countdownele.innerText=startcount++;},1000);

};

// stop function

let stop=()=>{
  
  let currentvalue=startcount;
  let newpara=document.createElement('p');
  newpara.innerText=`the stop time ${currentvalue -1}`;
   restvalueelmeent.append(newpara);
};
let stoptime=()=>{
  stop()
  clearInterval(idinterval);

};


// rest
let rest=()=>{

  startcount=0;
  countdownele.innerText=startcount;
     clearInterval(idinterval);
};

// get time
let showTime=()=>{
  
  let currentvalue=startcount;
  let newpara=document.createElement('p');
  newpara.innerText=`the get time ${currentvalue -1}`;
   restvalueelmeent.append(newpara);
};



// clear
let ClearTimevalue=()=>{
   restvalueelmeent.innerHTML="";

};











// start function
document.querySelector('.start-btn').addEventListener('click',startTimer);
// stop function
document.querySelector('.stop-btn').addEventListener('click',stoptime);

// rest function
document.querySelector('.rest-btn').addEventListener('click',rest);

// get time function
document.querySelector('.gettime').addEventListener('click',showTime);


// clear time
document.querySelector('.clearTime').addEventListener('click',ClearTimevalue);

