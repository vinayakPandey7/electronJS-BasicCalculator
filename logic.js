window.addEventListener('keypress', function(e) {
  var keycode = e.which || e.keyCode;
  var valueEntered = String.fromCharCode(keycode);
  
switch (true) {
      
      case e.keyCode>47 && e.keyCode<=57: takeValue(valueEntered,'no')      
        break;
      case ([42,43,45,47].indexOf(e.keyCode) >-1): takeValue(valueEntered,'op')          
        break;

      case ([61,13].indexOf(e.keyCode) > -1): takeValue('=','eq');
        break;
      case e.keyCode==127: handleReset();
        
        break;
    default:
        break;
}


});
    let preValue = '';
    let prevDone = false;
    let currentEntered = '';
    let operator;
    let stringinput= '';
    let resultVal = '';

    function takeValue(val, inpType) {

        if (prevDone == false && inpType == 'no') {
            currentEntered = Number(currentEntered + val);
            stringinput = String(currentEntered);
            document.getElementById('screen1').innerText = stringinput;
        } else if (inpType == 'op') {
            if (resultVal == '') {
                preValue = Number(currentEntered);
                
                prevDone = true;
            } 
            currentEntered = '';
            
            operator = val;
            
            stringinput = document.getElementById('screen1').innerText + operator
            document.getElementById('screen1').innerText = stringinput;
        } else if (prevDone == true && inpType == 'no') {
            currentEntered = Number(currentEntered+val);
            stringinput = stringinput + String(val)
            document.getElementById('screen1').innerText = stringinput
        } else if (val == '=' && inpType == 'eq') {
            currentEntered = Number(currentEntered);
            switch (operator) {
                case '+': resultVal = preValue + currentEntered;
                     break;
                case '-': resultVal = preValue - currentEntered;
                     break;
                case '*': resultVal = preValue * currentEntered;
                     break;
                case '/': resultVal = preValue / currentEntered;
                     break;

                default:resultVal = resultVal
                    break;
            }

            document.getElementById('screen1').innerText = stringinput;
            document.getElementById('screen2').innerText = resultVal;
            preValue = resultVal;
            prevDone = true;   
            
        }





    }

    function handleReset(){
        document.getElementById('screen1').innerText = 0;
        document.getElementById('screen2').innerText = 0;
        preValue = '';
        currentEntered = '';
        operator = '';
        stringinput = '';
        prevDone = false;
        resultVal=''
    }
