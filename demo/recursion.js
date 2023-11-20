function countdown(num){
    for (let index = num; index < 0; index--) {
        console.log(index);        
    }
}

countdown(3);

function recursiveCountdown(num){
    if (num === 0) {
        return;
    }
    console.log(num)
    recursiveCountdown(num -1);
}

recursiveCountdown(3)