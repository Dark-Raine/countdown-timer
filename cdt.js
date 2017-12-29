function countDown(seconds){
    var interv = 1000;
    var intervId = setInterval(() =>{
        console.log(seconds);
        seconds-=1;

        if( seconds < 1){
            console.log("Ring Ring!!");
            clearInterval(intervId);
        }
    }, interv);
    
}

countDown(5);