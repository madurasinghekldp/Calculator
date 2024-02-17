let inputvalue = '';

function clickClear(){
    inputvalue = '';
    document.getElementById("input1").value = inputvalue;
    
}

function click7(){
    inputvalue = inputvalue.concat(document.getElementById('7').value);
    document.getElementById("input1").value = inputvalue;
}

function click8(){
    inputvalue = inputvalue.concat(document.getElementById('8').value);
    document.getElementById("input1").value = inputvalue;
}

function click9(){
    inputvalue = inputvalue.concat(document.getElementById('9').value);
    document.getElementById("input1").value = inputvalue;
}

function click4(){
    inputvalue = inputvalue.concat(document.getElementById('4').value);
    document.getElementById("input1").value = inputvalue;
}

function click5(){
    inputvalue = inputvalue.concat(document.getElementById('5').value);
    document.getElementById("input1").value = inputvalue;
}

function click6(){
    inputvalue = inputvalue.concat(document.getElementById('6').value);
    document.getElementById("input1").value = inputvalue;
}

function click1(){
    inputvalue = inputvalue.concat(document.getElementById('1').value);
    document.getElementById("input1").value = inputvalue;
}

function click2(){
    inputvalue = inputvalue.concat(document.getElementById('2').value);
    document.getElementById("input1").value = inputvalue;
}

function click3(){
    inputvalue = inputvalue.concat(document.getElementById('3').value);
    document.getElementById("input1").value = inputvalue;
}

function click0(){
    inputvalue = inputvalue.concat(document.getElementById('0').value);
    document.getElementById("input1").value = inputvalue;
}

function clickDot(){
    inputvalue = inputvalue.concat(document.getElementById('dot').value);
    document.getElementById("input1").value = inputvalue;
}

function clickAdd(){
    inputvalue = inputvalue.concat(' ',document.getElementById('add').value,' ');
    document.getElementById("input1").value = inputvalue;
}

function clickSub(){
    inputvalue = inputvalue.concat(' ',document.getElementById('sub').value,' ');
    document.getElementById("input1").value = inputvalue;
}
function clickMul(){
    inputvalue = inputvalue.concat(' ',document.getElementById('mul').value,' ');
    document.getElementById("input1").value = inputvalue;
}
function clickDiv(){
    inputvalue = inputvalue.concat(' ',document.getElementById('divi').value,' ');
    document.getElementById("input1").value = inputvalue;
}
function clickEqu(){
    let array = inputvalue.split(' ');
    let result = Number(array[0]);
    if(array[array.length-1]==='') {result = 'Syntax error';}
    else{
        for(let i = 1;i<array.length-1;i+=2){
            if(array[i]==='+'){
                result = result+Number(array[i+1]);
            }
            else if(array[i]==='-'){
                result = result-Number(array[i+1]);
            }
            else if(array[i]==='x'){
                result = result*Number(array[i+1]);
            }
            else if(array[i]==='/'){
                result = result/Number(array[i+1]);
            }
            
        }
    }
        
    inputvalue = String(result);
    document.getElementById("input1").value = inputvalue;
}