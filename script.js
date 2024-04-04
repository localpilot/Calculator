let equal = 0;
const display = document.getElementById('display');

function appendToDisplay(input){
    if (equal == 1) {
        display.value = "";
        display.value += input;
        equal = 0; 
    }
    else{
        display.value += input;
    }
    
}
function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
        equal = 1;

    }
    catch(error){
        display.value = 'Error';
    }
}