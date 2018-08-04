const userText = document.querySelector("#userText");
const originalText = document.querySelector("#originalText").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var interval;         //to make interval accessible in other functions
var timer=[0,0];      // to store values of timer
var checkIfTimerwasrunning=false; //*check at bottom

// Run a standard minute/second/hundredths timer:
function startTimer()
{
timer[1]++;
var clock=timer[0]+":"+timer[1];

theTimer.innerHTML=clock;

    if(timer[1] == 60){
        timer[0]++;
        timer[1]=0;
        }
}


// Match the text entered with the provided text on the page:
function CheckText()
{
let textEntered = userText.value;
let originTextMatch = originalText.substring(0,textEntered.length);


    if (textEntered == originalText)
     {
        document.querySelector("body").classList.add("bg-primary");
        document.querySelector("body").classList.remove("bg-danger", "bg-success");  
            
        //this stops the timer when Text is complete. 
        clearInterval(interval);
     }
      else {
        if (textEntered == originTextMatch) {
        document.querySelector("body").classList.add("bg-success");
        document.querySelector("body").classList.remove("bg-danger");  
        } 
     
     else {
        document.querySelector("body").classList.add("bg-danger");
        document.querySelector("body").classList.remove("bg-success");     
        }
}
}

// Start the timer:
function start(){
    let textEnteredLength=userText.value.length;
        if(textEnteredLength==0 && !checkIfTimerwasrunning){
            checkIfTimerwasrunning=true;
interval=setInterval(startTimer,1000);
        }
}

// Reset everything. Location.reload method refreshes the page.
function ResetEverything()
{
location.reload();
}

// Event listeners for keyboard input and the reset button:
userText.addEventListener("keypress",start,false);
userText.addEventListener("keyup",CheckText,false);
resetButton.addEventListener("click",ResetEverything,false);

//This Page is created by Gaurav Raina

//*When we erase all text after entering something setInterval is called twice this setting multiple intervals.
// We use checkTimerrunning to avoid multiple intervals.
