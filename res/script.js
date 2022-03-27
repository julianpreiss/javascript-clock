let wakeUpTime = 7;
let noon = 12;
let lunchTime = 12;
let napTime = 4;
let partyTime = 'init';
let evening = 18;

// Getting it to show the current time on the page
let showCurrentTime = function()
{
    // get element where we want to display the clock
    let clock = document.getElementById('clock');

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";

    // Set hours
	if (hours >= noon)
	{
	    meridian = "PM";
	}

	if (hours > noon)
	{
		hours = hours - 12;
	}

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    let clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
let updateClock = function() 
{
  let time = new Date().getHours();
  let messageText;
  let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  let timeEventJS = document.getElementById("timeEvent");
  let lolcatImageJS = document.getElementById('displayImage');
  
  if (partyTime == true)
  {
    image = "https://i.pinimg.com/originals/dc/a6/56/dca6565ec395d3a3d42f014aef93e3b1.jpg";
    messageText = "Arrancó la fiesta!";
  }
  else if (time == wakeUpTime)
  {
    image = "https://www.sitioandino.com.ar/files/image/156/156433/54089c0b2beb7_720_960!.jpg?s=cea729140568ef1fd5dec61f3f5b8112&d=1599687310";
    messageText = "A despertar!";
  }
  else if (time == lunchTime)
  {
    image = "https://i.pinimg.com/474x/09/85/16/098516685e6516b27c47e7b1f0d3a961.jpg";
    messageText = "A comer!";
  }
  else if (time == napTime)
  {
    image = "https://ruizhealytimes.com/wp-content/uploads/2020/11/cerati.jpeg";
    messageText = "A dormir la siesta!";
  }
  else if (time < noon)
  {
    image = "https://i.pinimg.com/originals/79/e9/f8/79e9f845caca6a60663be5006c054e34.jpg";
    messageText = "Buenos días!";
  }
  else if (time >= evening)
  {
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnd0kNX9--cmXoOETjGL8i5VO2TSC3dPd12A&usqp=CAU";
    messageText = "Buenas noches!";
  }
  else
  {
    image = "https://resizer.glanacion.com/resizer/2y9Qkz6YJjTlC7_hNhwjZlJn4MI=/1200x746/smart/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/3RRPOHHT5NHLVL76QUM7CG54JQ.jpg";
    messageText = "Buenas tardes!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
let oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
let partyButton = document.getElementById("partyTimeButton");

let partyEvent = function()
{
    if (partyTime === 'init')
    {
        partyTime = false;
    } else {
        partyTime = !partyTime;
        if (partyTime === true) {        
            partyTimeButton.innerText = "Se termino la fiesta :(";
            partyTimeButton.style.backgroundColor = "rgb(114, 0, 38)";
            partyTimeButton.style.color = "white";
        } else {
            partyTimeButton.innerText = "Fiesta!";
            partyTimeButton.style.backgroundColor = "rgba(10, 175, 230, 1)";
        }
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 

// Activates Wake-Up selector
let wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
let wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

// Activates Lunch selector
let lunchTimeSelector =  document.getElementById("lunchTimeSelector");
let lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};

// Activates Nap-Time selector
let napTimeSelector =  document.getElementById("napTimeSelector");
let napEvent = function()
{
    napTime = napTimeSelector.value;
};

// Activates selectors
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);


// Clock

function wallClock () {
  
  var hourPointer   = document.querySelector('.hour'),
      minutePointer = document.querySelector('.minute'),
      secondPointer = document.querySelector('.second'),
      transform = getTransform();
  
  function updateClock() {
     var now = new Date(),
         second = now.getSeconds() * 6,
         minute = now.getMinutes() * 6 + (second / 60),
         hour   = (((now.getHours() % 12) / 12) * 360) + (minute / 12);
     
     hourPointer.style[transform]   = `rotate(${hour}deg)`;
     minutePointer.style[transform] = `rotate(${minute}deg)`;
     secondPointer.style[transform] = `rotate(${second}deg)`;
  }
  
  function getTransform() {
     var style = document.createElement('div').style,
         transform,
         vendor;      
     
     if (undefined !== style[vendor = 'webkitTransform']) {
        transform = vendor;
     }
     
     if (undefined !== style[vendor = 'msTransform']) {
        transform = vendor;
     }
     
     if (undefined !== style[vendor = 'transform']) {
        transform = vendor;
     }
     
     return transform;
  }
  
  setInterval(updateClock, 1000);
}
wallClock();