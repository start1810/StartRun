let startBtn = document.querySelector('#start'); 
let pausedBtn = document.querySelector('#pause');
let returnBtn = document.querySelector('#return');

let hour = 0; 
let minute = 0; 
let second = 0; 

startBtn.addEventListener('click', function () {
    timer = true; 
    stopWatch();
}); 

pausedBtn.addEventListener('click', function () { 
    timer = false; 
}); 

returnBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});


function stopWatch() { 
    if (timer) { 
        second++; 
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
        if (second < 10) { 
            secString = "0" + secString; 
        } 
    
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        setTimeout(stopWatch, 1000); 
    } 
};