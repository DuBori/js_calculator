let numOne ='';
let operator ='';
let numTwo ='';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (number) =>() =>{
    if (operator){
        numTwo +=number;
    }else {
        // console.log(operator);
        numOne +=number;
    }
    // console.log(typeof(number));
    console.log("this is one: "+numOne,"this is two: "+numTwo);
    $result.value += number;
}
// 값은 스트링으로 받게 설정을했다. 그래야 여러개의 숫자를 받을수 있으니까
// 숫자도 가능하지만 위와 같은 이유로 ''로 설정한거임 
document.querySelector('#num_0').addEventListener('click', onClickNumber('0'));
document.querySelector('#num_1').addEventListener('click', onClickNumber('1'));
document.querySelector('#num_2').addEventListener('click', onClickNumber('2'));
document.querySelector('#num_3').addEventListener('click', onClickNumber('3'));
document.querySelector('#num_4').addEventListener('click', onClickNumber('4'));
document.querySelector('#num_5').addEventListener('click', onClickNumber('5'));
document.querySelector('#num_6').addEventListener('click', onClickNumber('6'));
document.querySelector('#num_7').addEventListener('click', onClickNumber('7'));
document.querySelector('#num_8').addEventListener('click', onClickNumber('8'));
document.querySelector('#num_9').addEventListener('click', onClickNumber('9'));

const onClickOperator =(giho) =>() =>{
    operator = giho;
    $operator.value ='';
    if(numOne && !numTwo){
        $result.value ='';
        $operator.value+=giho;
    }else if ( operator == 'C'){
        console.log('reset');
        $operator.value ='';
        $result.value ='';
        numOne = operator = numTwo = '';
    }else if(!numOne){
        alert('숫자를 입력하세요');
        // console.log(numOne);
    }
}
document.querySelector('#icon_plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#icon_minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#icon_div').addEventListener('click', onClickOperator('/'));
document.querySelector('#icon_clr').addEventListener('click', onClickOperator('C'));
document.querySelector('#icon_doub').addEventListener('click', onClickOperator('X'));

const onClickcal = () =>()=>{
    switch(operator){
        case '+':
            console.log("current one: "+numOne,"current two: "+numTwo);
            $result.value = parseInt(numOne)+parseInt(numTwo);
            $operator.value='';numTwo='';
            numOne = $result.value;
            console.log('the answer is: '+$result.value);
            break;

        case '-':
            console.log("current one: "+numOne,"current two: "+numTwo);
            $result.value = parseInt(numOne)-parseInt(numTwo);
            $operator.value='';numTwo='';
            numOne = $result.value;
            console.log('the answer is: '+$result.value);
            break;
        
        case '/':
            console.log("current one: "+numOne,"current two: "+numTwo);
            $result.value = parseInt(numOne)/parseInt(numTwo);
            $operator.value='';numTwo='';
            numOne = $result.value;
            console.log('the answer is: '+$result.value);
            break;
        case 'X':
            console.log("current one: "+numOne,"current two: "+numTwo);
            $result.value = parseInt(numOne)*parseInt(numTwo);
            $operator.value='';numTwo='';
            numOne = $result.value;
            console.log('the answer is: '+$result.value);
            break;

        case 'C':
            $result.value = '';$operator.value='';;numTwo='';
            numOne = $result.value;
            console.log("current one: "+numOne,"current two: "+numTwo);
            console.log('the answer is: '+$result.value);
            break;
        
        default:
            console.log('???????');
            break;
    
    }
}
;
document.querySelector('#icon_same').addEventListener('click',onClickcal());

