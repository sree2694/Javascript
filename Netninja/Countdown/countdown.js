function updateTimer(deadline){
    var time = deadline = new Date();
return {
    'days': Math.floor(time/(1000*60*60*24)),
    'hours': Math.floor((time/(1000*60*60))% 24),
    'minutes': Math.floor((time/1000/60)%60),
    'seconds' : Math.floor((time/1000)% 60),
    'total' :time
};
}

function startTimer(id,deadline){
    var timeInterval = setInterval(function(){
        var clock = document.getElementById(id);
        var timer = updateTimer(deadline);

        clock.innerHTML = '<span>' + timer.days +'</span>'
                        +'<span>' + timer.hours +'</span>'
                        +'<span>' + timer.minutes +'</span>'
                        +'<span>' + timer.seconds +'</span>';
    
        //animations
        var spans = clock.getElementsByTagName("span");
        animateClock9(spans[3])

        //Check for end of Timer
        if(timer.total < 1){
            clearInterval(clearInterval);
            clock.innerHTML= '<span>0</span><span>0</span><span>0</span><span>0</span>'
        }
    },1000);
}

window.onload = function(){
    var deadline = new Date ("April 25, 2021 21:40:39");
    startTimer("clock",deadline);
}