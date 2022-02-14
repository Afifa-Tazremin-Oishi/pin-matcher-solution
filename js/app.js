function getPin(){
    const pin = Math.round(Math.random()*100000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        //console.log('got 3 digit calling again', pin);
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInt = document.getElementById('typed-number');
    if(isNaN(number)){
        if(number == 'C'){
            calcInt.value = '';
        }

    }
    else{
        
        const previousCalc = calcInt.value;
        const newCalc =  previousCalc + number;
        calcInt.value = newCalc;
    }
});

function verifyPin(){
    //console.log('going to verify');
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-number').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-failed');
    if(pin == typedNumbers){
       successMessage.style.display = 'block';
       failError.style.display = 'none';
    } 
    else{
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}
   
   